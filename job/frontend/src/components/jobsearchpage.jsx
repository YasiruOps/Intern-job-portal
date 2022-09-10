import React, { useState, useEffect } from "react";
import "../CSS/jobsearchpage.css";
import Header1 from "./header";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { GoSearch } from "react-icons/go";
import { BsFilter } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

import axios from "axios";
import Dropdown from "./dropdown";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setjobbas } from "../actions/jobActions";

export default function Jobsearchpage() {

  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();

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

  const Redirect=(id)=>{
    navigate('/Job-details',{state:id});
  }

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
            <p className="pres resultcount">200</p>{" "}
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
              <p className="loc">Location</p>
              <GrAdd className="locimg" />
            </div>
            <div className="seltest">
              <p className="loc">Date posted</p>
              <GrAdd className="locimg" />
            </div>
            <div className="seltest">
              <p className="loc">Salary</p>
              <GrAdd className="locimg" />
            </div>
            <div className="seltest">
              <p className="loc">Work hours</p>
              <GrAdd className="locimg" />
            </div>
            <div className="seltest">
              <p className="loc">Job type</p>
              <GrAdd className="locimg" />
            </div>
            <div className="seltest">
              <p className="loc">Job source</p>
              <GrAdd className="locimg" />
            </div>
            <div className="seltest">
              <p className="loc">Level of Education & training</p>
              <GrAdd className="locimg" />
            </div>
            <div className="seltest">
              <p className="loc">Years of experience </p>
              <GrAdd className="locimg" />
            </div>
            <div className="seltest">
              <p className="loc">Benefits </p>
              <GrAdd className="locimg" />
            </div>
          </div>

          <div className="serachmidrgtside col-9">
          
          {jobs.map((job,i) => {
              return (
                    <div className="job-detaboxouter row" onClick={()=>Redirect(job._id)} style={{marginBottom:"10px "}}>
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
