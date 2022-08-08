import React from "react";
import "../CSS/jobsearchpage.css";
import Header from "./header";

import { GoSearch } from "react-icons/go";

export default function jobsearchpage() {
  return (
    <div >
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

        <div className="col-12">
          <div className="sortline">
            <p className="pres">About</p>{" "}
            <p className="pres resultcount">200</p>{" "}
            <p className="pres">results </p>
           
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
        </div>
      </div>
    </div>
  );
}
