import React, { useState, useEffect } from "react";
import "../CSS/jobsearchpage.css";
import Header1 from "./header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { GoSearch } from "react-icons/go";
import { BsFilter, BsTerminal } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

import axios from "axios";
import Dropdown from "./dropdown";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setfilterjobs, setjobbas, setsearchoff } from "../actions/jobActions";
import { setSearch } from "../actions/searchAction";

import { StyledEngineProvider } from "@mui/material/styles";
import Filter from "./filter_dropdown";

import moment from 'moment';

export default function Jobsearchpage() {

  const searchoption = useSelector((state) => state.search.searchoption);

  //search eka
  function onChange(key, value) {
      const data = {...searchoption,[key]:value.toLowerCase()}
      dispatch(setSearch(data));
     
    }
    

  const searchdata = {
    location: ["Colombo", "Negambo", "Panadura", "Malabe"],
    date_posted: [
      "Today",
      "3 days ago",
      "1 week ago",
      "2 weeks ago",
      "1 month ago",
      "All time",
    ],
    salary: [
      "Negotiable",
      "0 - 50,000",
      "50,000 - 100,000",
      "100,000 - 200,000",
      "200,000 - 500,000",
      "500,000+",
    ],
    wrkhours:[
      "Morning shift",
      "Evening shift",
      "On call"
    ],
    experience:[
      "<1 year",
      "1 - 2 years",
      "2 - 4 years",
      "4+ years"
    ]
  };


  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();

  const filterdjobs = useSelector((state) => state.job.fiterdjobs);

  console.log("filterd jobs", filterdjobs)

  let flag = useSelector((state) => state.job.searchoff);
  
  //date
  function timer(date, filterdate){

    if(filterdate?.length===0){
      return false;
    }
    const date1 = moment(date).format("YYYY/MM/DD") 

    
      for (let i = 0; i < filterdate?.length; i++) {
        if(filterdate=="Today"){
          return moment().isSame(date1,"day")
        }
        if(filterdate == "3 days ago"){
          return moment().diff(date1,"days") <= 3
        }
        if(filterdate == "1 week ago"){
          return moment().diff(date1,"weeks") <= 1
        }
        if(filterdate == "2 week ago"){
          return moment().diff(date1,"weeks") <= 2
        }
        if(filterdate == "1 month ago"){
          return moment().diff(date1,"months") <= 1
        }
        if(filterdate == "All time"){
          return true;
        }
      }
      return false;
  }

  //function to convert the salary string to number
  function convertToNum(sal){
    let value = sal.trim();
    return value.replace(/[,+]/gm,'');
  }

  function salary(salary, jobsal){
    if( jobsal != "Negotiable"){
      jobsal = parseInt(jobsal);
    }

    for (let i = 0; i < salary?.length; i++) {
      if(jobsal == "Negotiable" && salary[i] == "Negotiable"){
        return true;
      }
      const values = salary[i].split(" - ").map(convertToNum)
    
      if(values.length == 2 && (jobsal >= values[0] && jobsal <= values[1])){
        return true
      }
      if(jobsal >= values[0]){
          return true
      }
    }
      return false;
    }
    
    function shiftTimes(shifts, jobshift)
    {
      
      for (let i = 0; i < shifts?.length; i++) {
        if(jobshift.toLowerCase()  == shifts[i].toLowerCase()){
        
          return true;
        }
      } 
      return false;
    }

    function experience(exp, jobexp)
    {
      jobexp = jobexp.replace(/[a-z|A-z|<+-\s]/gm,'');
     
      let value;
      for (let i = 0; i < exp?.length; i++) {
        value = exp[i].replace(/[a-z|A-z|<+-\s]/gm,''); 
       
        if ( value.length == 1 && value == 1 && (value == jobexp || !jobexp )){
   
          return true;
        }
        if ( value.length == 1 && value == 4 && value <= jobexp){
          
          return true;
        }
        if( value.length == 2 && value[0] <= jobexp && value[1]>=jobexp){
           
            return true;
        }
    }
        return false;
    }
  

  useEffect(() => {
    console.log("sss",searchoption)
    if(
      searchoption &&
      (
      searchoption?.Location?.length ||
      searchoption["Date Posted"]?.length ||
      searchoption?.Salary?.length ||
      searchoption["Work Hours"]?.length  ||
      searchoption?.Experience?.length ||
      searchoption?.searchkey?.length 
      )
      ){
        console.log("hiiiii ")
      dispatch(setsearchoff(false));
    }else
    {
      dispatch(setsearchoff(true));
    }
    
    

    //filter eka
    const data = jobs.filter((item) => {

    

    const logic = {
      Location:searchoption?.Location?.length,
      locationtrue: false,
      Timer:searchoption["Date Posted"]?.length,
      timertrue:false,
      Salary:searchoption?.Salary?.length,
      salarytrue:false,
      Shift:searchoption["Work Hours"]?.length,
      shifttrue:false,
      Experience:searchoption.Experience?.length,
      experiencetrue:false,
      Searchkey:searchoption.searchkey?.length,
      searchkeytrue:false
    }

      if (
        searchoption?.Location &&
        searchoption?.Location?.includes(item.location)
      ) {
        console.log("if ekee")
        logic.locationtrue = true;
      }

      if(timer(item.date, searchoption["Date Posted"])){
        logic.timertrue = true;
      }

      if(salary(searchoption.Salary ,item.salary)){
        logic.salarytrue = true;
      }

      if(shiftTimes(searchoption["Work Hours"] ,item.shiftTime)){
        logic.shifttrue = true;
      }

      if(experience(searchoption.Experience ,item.experience)){
        logic.experiencetrue = true;
      }

      if(item.title.toLowerCase().indexOf(searchoption.searchkey) > -1 ){
        logic.searchkeytrue = true;
      }

      console.log("logic", logic)

      if((!logic?.Location || logic?.locationtrue) 
      && (!logic?.Timer || logic?.timertrue) 
      && (!logic?.Salary || logic?.salarytrue)
      && (!logic?.Shift  || logic?.shifttrue)
      && (!logic?.Experience   || logic?.experiencetrue)
      && (!logic?.Searchkey || logic?.searchkeytrue)
      ){
        return item;
      }
    });


    dispatch(setfilterjobs(data));
  }, [searchoption]);

  useEffect(() => {
    salary(searchdata.salary);
    axios
      .get(`http://localhost:8000/jobs/`)
      .then((res) => {
        setJobs(res?.data);
        dispatch(setjobbas(res.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const navigate = useNavigate();

  const Redirect = (id) => {
    navigate("/Job-details", { state: id });
  };

  return (
    <div>
      <Header1 />
      <div className="jobsearch col-9">
        <p className="searchjobtag2">Search Jobs</p>

        <div className="col-12">
          <div className="searchboxjob2">
            <GoSearch className="searchiconjob" />
            <input type="text" className="searchinjob" placeholder="Search" 
                onChange={(e)=>onChange("searchkey", e.target.value)}
            />
            <button type="button" class="btn btn-light advancedsearhjob">
              Advanced
            </button>
          </div>
        </div>

        <hr className="jobdetailshr" />

        <div className="sortline col-12">
          <div className="sortlineinner">
            <p className="pres">About</p>{" "}
            <p className="pres resultcount">{jobs.length}</p>{" "}
            <p className="pres">results </p>
          </div>

          <div className="activity-selector">
            <p className="activitytag">Sort by</p>
            <div className="vertical-line3" />
            <select className="minimal3 ">
              <option>Best match</option>
              <option>Newest first</option>
              <option>Oldest first</option>
            </select>
          </div>
        </div>

        <hr className="jobdetailshr" />

        <div className="searchmid row">
          <div className="serachmidleftside col-3">
            <div className="filterbox">
              <BsFilter className="filter-icon" />
              <p className="filter-tag">Filter</p>
            </div>

            <div className="seltest">
              <Filter data={searchdata?.location} title={"Location"} />
            </div>

            <div className="seltest">
              <Filter data={searchdata?.date_posted} title={"Date Posted"} />
            </div>
            <div className="seltest">
              <Filter data={searchdata?.salary} title={"Salary"} />
            </div>
            <div className="seltest">
              <Filter
                data={searchdata?.wrkhours}
                title={"Work Hours"}
              />
            </div>
            <div className="seltest">
              <Filter data={searchdata?.experience} title={"Experience"} />
            </div>
            {/* <div className="seltest">
              <Filter data={[]} title={"Benefits"} />
            </div> */}
          </div>

          <div className="serachmidrgtside col-9">

            {flag
              ?(jobs?.map((job, i) => {
                
                  return (
                    <div
                      className="job-detaboxouter row"
                      onClick={() => Redirect(job._id)}
                      style={{ marginBottom: "10px " }}
                    >
                      <div className="job-detaboxouter-left col-lg-8">
                        <p className="posname">{job.title}</p>
                        <p className="compname">Rocket science .tec</p>
                        <p className="location">{job.location}</p>
                        <div style={{ display: "flex" }}>
                          <p className="sal">Salary : </p>
                          <p className="sal">{job.salary}</p>
                        </div>
                      </div>
                      <div className="job-detaboxouter-right col-lg-4">
                        <p className="date col-4">Date Posted</p>
                        <p className="date2 col-4">{job.date}</p>

                        <button type="button" className="btn addwishbtn">
                          <p className="wishbtntext">Add to wishlist</p>
                          <AiOutlineHeart className="wishbtnicon" />
                        </button>
                      </div>
                    </div>
                  );
                }))
                
              : filterdjobs?.map((job, i) => {
                  return (
                    <div
                      className="job-detaboxouter row"
                      onClick={() => Redirect(job._id)}
                      style={{ marginBottom: "10px " }}
                    >
                      <div className="job-detaboxouter-left col-lg-8">
                        <p className="posname">{job.title}</p>
                        <p className="compname">Rocket science .tec</p>
                        <p className="location">{job.location}</p>
                        <div style={{ display: "flex" }}>
                          <p className="sal">Salary : </p>
                          <p className="sal">{job.salary}</p>
                        </div>
                      </div>
                      <div className="job-detaboxouter-right col-lg-4">
                        <p className="date col-4">Date Posted</p>
                        <p className="date2 col-4">{job.date}</p>

                        <button type="button" className="btn addwishbtn">
                          <p className="wishbtntext">Add to wishlist</p>
                          <AiOutlineHeart className="wishbtnicon" />
                        </button>
                      </div>
                    </div>
                  );
                })}

                {
                  !flag && filterdjobs.length == 0? <h1>No jobs available</h1>:<div></div>
                }
          </div>
        </div>
      </div>
    </div>
  );
}
