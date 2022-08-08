import React from "react";
import "../CSS/jobsearchpage.css";
import Header from "./header";

import { GoSearch } from "react-icons/go";
import { BsFilter } from "react-icons/bs";

export default function jobsearchpage() {
  return (
    <div>
      <Header />
      <div className="jobsearch col-9">
        <p className="searchjobtag">Search Job</p>

        <div className="col-12">
          <div className="searchboxjob">
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
              <BsFilter className="filter-icon"/>
              <p className="filter-tag">Filter</p>
            </div>

          </div>
    


          <div className="serachmidrgtside col-9">ss</div>
        </div>

      </div>
    </div>
  );
}
