import React from 'react'
import "../CSS/internquestionsmain.css"
import CalCok from "../images/calendar-clock-icon.png"
import TodayIcon from '@mui/icons-material/Today';
import { GoSearch } from "react-icons/go";
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from "react"
import Replyform from "./replyform"
import Popup from "./popup"

export default function Internquestionsmain() {

	const [openPopup, setOpenPopup] = useState(false);

  const openInPopup = () => {
    setOpenPopup(true);
  };

  return (
    <div className="Iqouter-main">

    <div className="Inquestionstop">
      <p className="internq-tag">Intern Questions</p>
   
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
  

      <div className="searchbox test657 ">
          <GoSearch className="searchicon" />
          <input type="text" className="searchin" placeholder="search" />
        </div>


    </div>

      <table className="table">
        <thead>
          <tr>  
            <th scope="col">#</th>
            <th scope="col">Q title</th>
            <th scope="col">Q type</th>
            <th scope="col">Desription</th>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
  
            <tr >
              <th scope="row">1</th>
              <td>e2</td>
              <td>22</td>
              <td>employ2</td>
              <td>employ2</td>
              <td>employ2</td>
              
              
              
              <td>
                <button type="button" onClick={() => setOpenPopup(true)} class="btn btn-primary">
                  Reply
                  <ReplyIcon className='btniconsiq'/>                 
                </button>
                &nbsp; &nbsp;
  
                <button
                  className="btn btn-danger"
                  href="/add">
                  Remove
                  <DeleteOutlineIcon className='btniconsiq'/>                 
                </button>
              </td>
            </tr>
  
        </tbody>     
      </table>

      <Popup
        title="Reply Message"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}       
      >
        <Replyform/>
      
      </Popup>

    </div>
  )
}
