import React, { useState, useEffect } from "react";
import "../CSS/applicationmain.css";
import TodayIcon from "@mui/icons-material/Today";
import { GoSearch } from "react-icons/go";
import ReplyIcon from "@mui/icons-material/Reply";
import { MdLaunch } from "react-icons/md";
import Applicationform from "./application_popup";
import { useSelector, useDispatch } from "react-redux";
import Popup from "./popup";
import moment from "moment";

import axios from "axios";

export default function Applicationsmain_dash() {
  const [search, setSearch] = useState("");
  const[filterflag, setFilterflag]=useState(false);
  const [filterval, setFilterval] = useState([])
  const [timerout, setTimerout] = useState({})

  const [applications, setApplications] = useState([]);

  const id = useSelector((state) => state.auth.employerid);

  const [intern, setIntern] = useState([]);

  const [recordForEdit, setRecordForEdit] = useState(null);
  const[activity, setActivity] = useState("");

  useEffect(()=>{
    
    if(search.length){
      const data = applications.filter(item=>{
      let values = item?.offerTitle?.toLowerCase().indexOf(search) > -1 || item?.internID?.toLowerCase().indexOf(search) > -1
      return values
      })
      setFilterval(data);
      setFilterflag(true)
    }else{
      setFilterflag(false)
    }
  },[search])

  useEffect(() => {

    axios
      .get(`http://localhost:8000/application/${id}`)
      .then((res) => {
        const data = res.data;
        setApplications(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const [openPopup, setOpenPopup] = useState(false);

  const openInPopup = (app) => {
    setRecordForEdit(app);
    setOpenPopup(true);
  };

  //filter dates
  function timer(date, filterdate){

    if(filterdate?.length===0){
      return false;
    }
    const date1 = moment(date).format("YYYY/MM/DD") 

    
      for (let i = 0; i < filterdate?.length; i++) {
        if(filterdate=="Today"){
          return moment().isSame(date1,"day")
        }
        if(filterdate == "1 week"){
          return moment().diff(date1,"days") <= 7
        }
        if(filterdate == "2 weeks"){
          return moment().diff(date1,"days") <= 14
        }
        if(filterdate == "This month"){
          return moment().diff(date1,"months") <= 0
        }
        if(filterdate == "All"){
          return true;
        }
      }
      return false;
  }

  useEffect(()=>{
    if(activity.length){
      const data = applications.filter(item=>{
        let values = timer(item.date, activity)
        return values
      })
      setFilterval(data);
      setFilterflag(true)
    }else{
      setFilterflag(false)
    }
  },[activity])

  return (
    <div>
      {console.log("ssdasdsa",applications)}
      <div className="Iqouter-main">
        <div className="Inquestionstop">
          <p className="internq-tag">Applications</p>

          <div className="activity-selector">
            <TodayIcon className="activityiq" />
            <p className="activitytag">Activity</p>
            <div className="vertical-line3" />
            <select className="minimal3 " value={activity} onChange={(e) => {setActivity(e.target.value);}}>
              <option>All</option>
              <option>Today</option>
              <option>1 week</option>
              <option>2 weeks</option>
              <option>This month</option>
            </select>
          </div>

          <div className="searchbox test657">
            <GoSearch className="searchicon" />
            <input type="text" className="searchin" placeholder="search" 
             onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job Title</th>
              <th scope="col">Applicant ID</th>
              <th scope="col">Application Status</th>
              <th scope="col">Date Applied</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {!filterflag?
          (applications.map((application, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{application.offerTitle}</td>
                  <td>{application.internID}</td>
                  <td>{application.applicationStatus}</td>
                  <td>{application.date}</td>

                  <td>
                    <button
                      onClick={() => openInPopup(application)}
                      className="btn btn-primary"
                    >
                      View Application
                      <MdLaunch className="viewicon" />
                    </button>
                  </td>
                </tr>
              );
            })):(
              filterval.map((application, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{application.offerTitle}</td>
                  <td>{application.internID}</td>
                  <td>{application.applicationStatus}</td>
                  <td>{application.date}</td>

                  <td>
                    <button
                      onClick={() => openInPopup(application)}
                      className="btn btn-primary"
                    >
                      View Application
                      <MdLaunch className="viewicon" />
                    </button>
                  </td>
                </tr>
              );
            }))
            }

          </tbody>
        </table>

        <Popup
          // User Name
          title="Jhone Doe"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <Applicationform recordForEdit={recordForEdit} setTimerout={setTimerout} timerout={timerout} setApplications={setApplications} applications={applications} setOpenPopup={setOpenPopup}/>
        </Popup>
      </div>
    </div>
  );
}
