import React, { useState } from "react";
import "../CSS/employer-main.css";
import CalCok from "../images/calendar-clock-icon.png";
import SearchIcon from "@mui/icons-material/Search";
import { GoSearch } from "react-icons/go";
import Jobimg89 from "../images/icon_job_3.jpg";
import Pause from "../images/paused.png";
import Close from "../images/closed.png";
import Reviewd from "../images/reviewdash.png";
import Rejected from "../images/rejecteddash.png";
import New from "../images/newdash.ico";
import Chart from "./employerdashchart"

export default function employer_main() {
  return (
    <div className="dashmainouter row">
      <div className="dashtopcontainer col-12">
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

      <div className="col-12 dashcentercontainer-outer">
        <div className="dashcentercontainer row">
          <p className="dashjobdetailstag">Jobs</p>

          <div className="detailcomponenthead col-3">
            <div className="detailscomponent row">
              <div className="col-xxl-8">
                <p className="jobcount">8</p>
                <p className="jobsposted">Jobs Posted</p>
              </div>
              <div className="col-xxl-4 deatilcomponentimg-cover">
                <img src={Jobimg89} alt="#" className="deatilcomponentimg" />
              </div>
            </div>
          </div>

          <div className="detailcomponenthead col-3">
            <div className="detailscomponent row">
              <div className="col-xxl-8">
                <p className="jobcount">4</p>
                <p className="jobsposted">Paused</p>
              </div>
              <div className="col-xxl-4 deatilcomponentimg-cover">
                <img src={Pause} alt="#" className="deatilcomponentimg" />
              </div>
            </div>
          </div>

          <div className="detailcomponenthead col-3">
            <div className="detailscomponent row">
              <div className="col-xxl-8">
                <p className="jobcount">9</p>
                <p className="jobsposted">Closed</p>
              </div>
              <div className="col-xxl-4 deatilcomponentimg-cover">
                <img src={Close} alt="#" className="deatilcomponentimg" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="dashlowercontainer-outer col-12">
        <div className="dashlowercontainer row">
          <div className="lowfirstsec col-xl-4 ">
            <p className="applicationrev-tag">Application Status</p>

            <div className="blockdetails row">
              <div className="blockfirsthalf col-lg-8">
              <p className="applicaitonsconter">15</p>
              <p className="applicationsname-tag">New</p>
              </div>
              <div className="blocksecondhlaf col-lg-4">
              <img src={New} alt="" className="applcationsicon" />                
              </div>
            </div>

            <div className="blockdetails row">
              <div className="blockfirsthalf col-lg-8">
              <p className="applicaitonsconter">15</p>
              <p className="applicationsname-tag">New</p>
              </div>
              <div className="blocksecondhlaf col-lg-4">
              <img src={Reviewd} alt="" className="applcationsicon" />                
              </div>
            </div>

            
            <div className="blockdetails row">
              <div className="blockfirsthalf col-lg-8">
              <p className="applicaitonsconter">15</p>
              <p className="applicationsname-tag">New</p>
              </div>
              <div className="blocksecondhlaf col-lg-4">
              <img src={Rejected} alt="" className="applcationsicon" />                
              </div>
            </div>
            
          </div>
          
          <div className="lowsecondsec col-xl-8">
            chart here
          </div>

        </div>
      </div>
    </div>
  );
}
