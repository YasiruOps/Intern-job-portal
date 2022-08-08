import React from "react";
import "../CSS/jobsearchpage.css";
import Header1 from "./header";

import { GoSearch } from "react-icons/go";
import { BsFilter } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import Dropdown from "./dropdown";

export default function jobsearchpage() {

  return (
    <div>
      <Header1/>
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

         
          </div>



          <div className="serachmidrgtside col-9">           
            <div className="job-detaboxouter row">
              <div className="job-detaboxouter-left col-lg-8">
                <p className="posname">Junior software developer</p>
                <p className="compname">Rocket science .tec</p>
                <p className="location">Kaluthara, Panadura</p>
                <div style={{ display: "flex" }}>
                  <p className="sal">Salary : </p>
                  <p className="sal">Negotiable</p>
                </div>
              </div>
              <div className="job-detaboxouter-right col-lg-4">
                <p className="date col-4">Date Posted</p>
                <p className="date2 col-4">05/01/2022</p>

                <button type="button" className="btn addwishbtn">
                  <p className="wishbtntext">Add to wishlist</p>
                  <AiOutlineHeart className="wishbtnicon"/>               
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
