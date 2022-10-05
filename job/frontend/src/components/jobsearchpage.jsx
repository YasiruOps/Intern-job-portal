import React, { useState, useEffect } from "react";
import "../CSS/jobsearchpage.css";
import Header1 from "./header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { GoSearch } from "react-icons/go";
import { BsFilter } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

import axios from "axios";
import Dropdown from "./dropdown";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setfilterjobs, setjobbas, setsearchoff } from "../actions/jobActions";

import { StyledEngineProvider } from "@mui/material/styles";
import Filter from "./filter_dropdown";

import moment from 'moment';

export default function Jobsearchpage() {
  //const searchdata = useSelector((state) => state.search.data);

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
      "10,000",
      "10,000 - 50,000",
      "50,000 - 100,000",
      "100,000 - 200,000",
      "200,000 - 500,000",
      "500,000+",
    ],
  };

  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();

  const searchoption = useSelector((state) => state.search.searchoption);
  const filterdjobs = useSelector((state) => state.job.fiterdjobs);

  let flag = useSelector((state) => state.job.searchoff);

  //date
  function timer(date, filterdate){

    if(filterdate.length===0){
      return false;
    }
    const date1 = moment(date).format("YYYY/MM/DD") 

    console.log("date",date, "date1", date1, "filterdate",filterdate)
    
      for (let i = 0; i < filterdate.length; i++) {
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

  useEffect(() => {
    if(searchoption.Location.length==0 &&
      searchoption["Date Posted"].length==0
      ){
      dispatch(setsearchoff(true));
      return;
    }
    console.log("ssssss",searchoption)
    dispatch(setsearchoff(false));

    const data = jobs.filter((item) => {
    const logic = {
      Location:searchoption.Location.length,
      locationtrue: false,
      Timer:searchoption["Date Posted"].length,
      timertrue:false
    }

      if (
        searchoption.Location &&
        searchoption.Location.includes(item.location)
      ) {
        logic.locationtrue = true;
      }
      if(timer(item.date, searchoption["Date Posted"])){
        logic.timertrue = true;
      }
      if((logic.Location == 0 || logic.locationtrue) && (logic.Timer == 0 || logic.timertrue)){
        return item;
      }
    });

    dispatch(setfilterjobs(data));
  }, [searchoption]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/jobs/`)
      .then((res) => {
        setJobs(res.data);
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
            <input type="text" className="searchinjob" placeholder="Search" />
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
              <Filter data={searchdata.location} title={"Location"} />
            </div>

            <div className="seltest">
              <Filter data={searchdata.date_posted} title={"Date Posted"} />
            </div>
            <div className="seltest">
              <Filter data={searchdata.salary} title={"Salary"} />
            </div>
            <div className="seltest">
              <Filter
                data={["Morning shifts", "Evening Shifts", "On call"]}
                title={"Work Hours"}
              />
            </div>
            <div className="seltest">
              <Filter data={[]} title={"Job Type"} />
            </div>
            <div className="seltest">
              <Filter data={[]} title={"Level of Education & training"} />
            </div>
            <div className="seltest">
              <Filter data={[]} title={"Years of experience"} />
            </div>
            <div className="seltest">
              <Filter data={[]} title={"Benefits"} />
            </div>
          </div>

          <div className="serachmidrgtside col-9">
            {console.log("flass", flag)}

            {flag
              ? jobs.map((job, i) => {
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
                })
              : filterdjobs.map((job, i) => {
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
          </div>
        </div>
      </div>
    </div>
  );
}
