import React, { useState, useEffect } from "react";
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
import Graph from "./Graph"
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Job1 from "../images/jobs.png"

export default function Employer_main() {

  const id = useSelector((state) => state.auth.employerid);
  const [jobs, setJobs] = useState([]);
  const [accept, setAccepted] = useState(0);
  const [reject, setReject] = useState(0);
  const [neww, setNew] = useState(0);


  useEffect(() => {
    axios
      .get(`http://localhost:8000/jobs/${id}`)
      .then((res) => {
        const data = res.data;
        setJobs(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios.get(`http://localhost:8000/application/${id}`)
    .then((res) => {

      let reject = 0;
      let accept = 0;
      let neww = 0 ; 
    
      res.data.forEach((app) => {
 
        if (app.applicationStatus == "Rejected") {
          reject++;
        }
        else if(app.applicationStatus == "Accepted"){
          accept++;
        }
        else{
          neww++;
        }
      });
      setAccepted(accept);
      setReject (reject);
      setNew(neww);
      
    })
    .catch((err) => {
      alert(err.message);
    });
  }, []);
  

  return (
    <div className="dashmainouter row">
      <div className="dashtopcontainer ">
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
          <input type="text" className="searchin" placeholder="Search" />
        </div>
      </div>

      <div className="col-12 dashcentercontainer-outer">
        <div className="dashcentercontainer row">
          <p className="dashjobdetailstag">Jobs</p>

          <div className="detailcomponenthead col-3">
            <div className="detailscomponent row">
              <div className="col-xxl-8">
                <p className="jobcount">{jobs.length}</p>
                <p className="jobsposted">Jobs Posted</p>
              </div>
              <div className="col-xxl-4 deatilcomponentimg-cover">
                <img src={Jobimg89} alt="#" className="deatilcomponentimg" />
              </div>
            </div>
          </div>

          <div className="col-9" style={{marginTop:"-70px", marginRight:"-250px", overflow:"hidden"}}>
            <img src={Job1} style={{height:"200px"}}/>
          </div>
        </div>
      </div>


      <div className="dashlowercontainer-outer col-12">
        <div className="dashlowercontainer row">
          <div className="lowfirstsec col-xl-4 ">
            <p className="applicationrev-tag">Application Status</p>

            <div className="blockdetails row">
              <div className="blockfirsthalf col-lg-8">
              <p className="applicaitonsconter">{neww}</p>
              <p className="applicationsname-tag">New</p>
              </div>
              <div className="blocksecondhlaf col-lg-4">
              <img src={New} alt="" className="applcationsicon" />                
              </div>
            </div>

            <div className="blockdetails row">
              <div className="blockfirsthalf col-lg-8">
              <p className="applicaitonsconter">{accept}</p>
              <p className="applicationsname-tag">Accpted</p>
              </div>
              <div className="blocksecondhlaf col-lg-4">
              <img src={Reviewd} alt="" className="applcationsicon" />                
              </div>
            </div>

            
            <div className="blockdetails row">
              <div className="blockfirsthalf col-lg-8">
              <p className="applicaitonsconter">{reject}</p>
              <p className="applicationsname-tag">Rejected</p>
              </div>
              <div className="blocksecondhlaf col-lg-4">
              <img src={Rejected} alt="" className="applcationsicon" />                
              </div>
            </div>
            
          </div>
          
          <div className="lowsecondsec col-xl-8">
            <Graph/>
          </div>

        </div>
      </div>
    </div>
  );
}
