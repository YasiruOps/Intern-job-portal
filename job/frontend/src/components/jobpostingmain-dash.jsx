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

  useEffect(()=>{
    if(search.length){
      const data = jobs.filter(item=>{
        let values = item?.title?.toLowerCase().indexOf(search) > -1 || item?.location?.toLowerCase().indexOf(search) > -1
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
      .get(`http://localhost:8000/jobs/${id}`)
      .then((res) => {
        const data = res.data;
        setJobs(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [jobs]);

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

  return (
    <div className="Iqouter-main">
      <div className="Inquestionstop">
        <p className="internq-tag">Job Posting</p>

        <div className="activity-selector">
          <TodayIcon className="activityiq" />
          <p className="activitytag">Activity</p>
          <div className="vertical-line3" />
          <select className="minimal3 ">
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
        (jobs.map((job, i) => {
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
        <Jobviewform recordForEdit={recordForEdit}/>
      </Popup>

      <Popup2      
        title="ADD NEW JOB"
        openPopup={openPopup2}
        setOpenPopup={setOpenPopup2}
      >
        <Addjobform />
      </Popup2>

      <Popup3     
        title={recordForEdit?.title}
        openPopup={openPopup3}
        setOpenPopup={setOpenPopup3}
      >
        <Editjobform recordForEdit={recordForEdit}/>
      </Popup3>

      <Popup4     
        title={recordForEdit?.title}
        openPopup={openPopup4}
        setOpenPopup={setOpenPopup4}
      >
        <Removeform recordForEdit={recordForEdit?._id}/>
      </Popup4>
    </div>
  );
}
