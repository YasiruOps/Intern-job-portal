import React, { useState } from "react";
import "../CSS/employer-main.css";
import CalCok from "../images/calendar-clock-icon.png";
import SearchIcon from "@mui/icons-material/Search";
import { GoSearch } from "react-icons/go";

export default function employer_main() {
  return (
    <div>
      <div className="dashtopcontainer">
        <div className="outer-main3">
          <p className="dashbord-tag">Dashbord</p>
          <div className="activity-selector">
            <img src={CalCok} className="calclockimg" />
            <p className="activitytag">Activity</p>
            <div className="vertical-line3" />
            <select className="minimal3 ">
              <option>Today</option>
              <option>1 week</option>
              <option>2 weeks</option>
              <option>This month</option>
            </select>
          </div>
        </div>

        <div className="searchbox">
          <GoSearch className="searchicon" />
          <input type="text" className="searchin" placeholder="search" />
        </div>
      </div>

      <div className="dashcentercontainer">
        <p className="dashjobdetailstag">Jobs</p>

        <div className="detailcomponenthead col-4">
          <div className="detailscomponent row">
            <div className="col-10">
              <p className="8">8</p>
              <p className="jobsposted">jobs posted</p>
            </div>
            <div className="col-2">
              <GoSearch />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
