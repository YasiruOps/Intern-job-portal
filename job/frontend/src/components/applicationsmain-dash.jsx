import React from 'react'
import "../CSS/applicationmain.css"

import TodayIcon from '@mui/icons-material/Today';
import { GoSearch } from "react-icons/go";
import ReplyIcon from '@mui/icons-material/Reply';

import { MdLaunch } from 'react-icons/md';
import { useState } from "react"
import Applicationform from "./application_popup"
import Popup from "./popup"



export default function Applicationsmain_dash() {

	const [openPopup, setOpenPopup] = useState(false);

  const openInPopup = () => {
    setOpenPopup(true);
  };


  return (
    <div>
        
        
    <div className="Iqouter-main">

<div className="Inquestionstop">
  <p className="internq-tag">Applications</p>

    <div className="activity-selector">
          <TodayIcon className='activityiq'/>
          <p className="activitytag">Activity</p>
          <div className="vertical-line3" />
          <select className="minimal3 ">
            <option>Today</option>
            <option>1 week</option>
            <option>2 weeks</option>
            <option>This month</option>
          </select>
        </div>


  <div className="searchbox ">
      <GoSearch className="searchicon" />
      <input type="text" className="searchin" placeholder="search" />
    </div>


</div>

  <table className="table">
    <thead>
      <tr>  
        <th scope="col">#</th>
        <th scope="col">Job Title</th>
        <th scope="col">Applicant</th>
        <th scope="col">Application Status</th>
        <th scope="col">Date Applied</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>

        <tr >
          <th scope="row">1</th>
          <td>Juniour Developer</td>
          <td>Jhone Doe</td>
          <td>Under review</td>
          <td>03/05/2022</td>
          
          
          
          <td>
            <button
              onClick={() => setOpenPopup(true)}
              className="btn btn-primary">
              View Application
              <MdLaunch className='viewicon'/>                 
            </button>
          </td>
        </tr>

    </tbody>     
  </table>

  <Popup
  // User Name
    title="Jhone Doe"
    openPopup={openPopup}
    setOpenPopup={setOpenPopup}       
  >
    <Applicationform/>
  
  </Popup>
</div>
    </div>
  )
}
