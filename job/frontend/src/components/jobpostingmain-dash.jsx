import React, { useState, useEffect } from "react";
import "../CSS/jobpostingmain.css";

import CalCok from "../images/calendar-clock-icon.png";
import TodayIcon from "@mui/icons-material/Today";
import { GoSearch } from "react-icons/go";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Replyform from "./replyform";
import Popup from "./popup";
import Popup2 from "./popup-addnewjob";
import Popup3 from "./popup-editjob";
import Popup4 from "./popup-remove"
import { AiFillEdit } from "react-icons/ai";
import { MdLaunch } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import Addjobform from "./addjobform_popup";
import Editjobform from "./editjobform_popup";
import Jobviewform from "./jobformview_popup";
import Removeform from "./removepopup-job-form";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import moment from "moment";

export default function Jobpostingmain() {
  const [search, setSearch] = useState("");

  const [openPopup, setOpenPopup] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);
  const [openPopup3, setOpenPopup3] = useState(false);
  const [openPopup4, setOpenPopup4] = useState(false);

  const id = useSelector((state) => state.auth.employerid);
  const [jobs, setJobs] = useState([]);

  const [recordForEdit, setRecordForEdit] = useState(null);

  const[filterflag, setFilterflag]=useState(false);
  const [filterval, setFilterval] = useState([])

  const[activity, setActivity] = useState("");

  

  useEffect(()=>{
    if(search.length){
      const data = jobs.filter(item=>{
        let values = item?.title?.toLowerCase().indexOf(search) > -1 || item?.location?.toLowerCase().indexOf(search) > -1
        return values
      })
      setFilterval(data);
      setFilterflag(true);
    }else{
      setFilterflag(false)
    }
  },[search])

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
  }, []);

  const openInPopup = (jobs) => {
    setRecordForEdit(jobs);
    setOpenPopup(true);
  };

  const openEditPopup = (jobs)=>{
    setRecordForEdit(jobs)
    setOpenPopup3(true);
  }

  const openRemovePopup = (jobs) =>{
    setRecordForEdit(jobs);
    setOpenPopup4(true);
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
      const data = jobs.filter(item=>{
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
    <div className="Iqouter-main">
      <div className="Inquestionstop">
        <p className="internq-tag">Job Posting</p>

        <div className="activity-selector">
          <TodayIcon className="activityiq" />
          <p className="activitytag">Activity</p>
          <div className="vertical-line3" />
          <select className="minimal3" value={activity} onChange={(e) => {setActivity(e.target.value);}}>
            <option>All</option>
            <option>Today</option>
            <option>1 week</option>
            <option>2 weeks</option>
            <option>This month</option>           
          </select>
        </div>

        <div className="searchbox-layer">
          <div className="searchbox test657">
            <GoSearch className="searchicon" />
            <input type="text" className="searchin" placeholder="search" 
            onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
          </div>
        </div>
      </div>

      <div className="addjobpostbtn-layer">
        <button type="button" className="btn btn-success addjobpostbtn" onClick={() => setOpenPopup2(true)}>
          <MdLibraryAdd className="addjobpostbtnicon"/>
          Add Offer
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Position</th>
            <th scope="col">Vacancies</th>
            <th scope="col">Contract</th>
            <th scope="col">Location</th>
            <th scope="col">Post Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {!filterflag?
        (jobs?.map((job, i) => {
              return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{job?.title}</td>
                    <td>{job?.vacancies}</td>
                    <td>{job?.contract}</td>
                    <td>{job?.location}</td>
                    <td>{job?.date}</td>

                    <td>
                      <button
                        type="button"
                        onClick={() => openInPopup(job)}
                        class="btn btn-primary"
                      >
                        View Post
                        <MdLaunch className="btniconsiq2" />
                      </button>
                      &nbsp; &nbsp;
                      <button
                        className="btn btn-warning"
                        style={{ color: "white" }}
                        onClick={() => openEditPopup(job)}
                      >
                        Edit
                        <AiFillEdit className="btniconsiq2" />
                      </button>
                      &nbsp; &nbsp;
                      <button className="btn btn-danger" href="/add" onClick={() => openRemovePopup(job)}>
                        Remove               
                        <DeleteOutlineIcon className="btniconsiq2" />
                      </button>
                    </td>
                  </tr>
                  );
                })):(
                  filterval.map((job, i) => {
                    return (
                        <tr>
                          <th scope="row">1</th>
                          <td>{job?.title}</td>
                          <td>{job.vacancies}</td>
                          <td>{job.contract}</td>
                          <td>{job.location}</td>
                          <td>{job.date}</td>
      
                          <td>
                            <button
                              type="button"
                              onClick={() => openInPopup(job)}
                              class="btn btn-primary"
                            >
                              View Post
                              <MdLaunch className="btniconsiq2" />
                            </button>
                            &nbsp; &nbsp;
                            <button
                              className="btn btn-warning"
                              style={{ color: "white" }}
                              onClick={() => openEditPopup(job)}
                            >
                              Edit
                              <AiFillEdit className="btniconsiq2" />
                            </button>
                            &nbsp; &nbsp;
                            <button className="btn btn-danger" href="/add" onClick={() => openRemovePopup(job)}>
                              Remove               
                              <DeleteOutlineIcon className="btniconsiq2" />
                            </button>
                          </td>
                        </tr>
                );
              }))
                }
        </tbody>
      </table>

      <Popup
        title={recordForEdit?.title}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Jobviewform recordForEdit={recordForEdit} />
      </Popup>

      <Popup2      
        title="ADD NEW JOB"
        openPopup={openPopup2}
        setOpenPopup={setOpenPopup2}
      >
        <Addjobform setJobs={setJobs} jobs={jobs} setOpenPopup2={setOpenPopup2}/>
      </Popup2>

      <Popup3     
        title={recordForEdit?.title}
        openPopup={openPopup3}
        setOpenPopup={setOpenPopup3}
      >
        <Editjobform recordForEdit={recordForEdit} setJobs={setJobs} jobs={jobs} setOpenPopup3={setOpenPopup3}/>
      </Popup3>

      <Popup4     
        title={recordForEdit?.title}
        openPopup={openPopup4}
        setOpenPopup={setOpenPopup4}
      >
        <Removeform recordForEdit={recordForEdit?._id} setJobs={setJobs} jobs={jobs} setOpenPopup4={setOpenPopup4}/>
      </Popup4>
    </div>
  );
}
