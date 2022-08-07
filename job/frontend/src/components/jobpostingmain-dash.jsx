import React from "react";
import "../CSS/jobpostingmain.css";

import CalCok from "../images/calendar-clock-icon.png";
import TodayIcon from "@mui/icons-material/Today";
import { GoSearch } from "react-icons/go";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import Replyform from "./replyform";
import Popup from "./popup";
import Popup2 from "./popup2";
import { AiFillEdit } from "react-icons/ai";
import { MdLaunch } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import Addjobform from "./addjobform_popup"

export default function Jobpostingmain() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);

  const openInPopup = () => {
    setOpenPopup(true);
  };

  const openInPopup2 = () => {
    setOpenPopup2(true);
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
            <input type="text" className="searchin" placeholder="search" />
          </div>
        </div>
      </div>

      <div className="addjobpostbtn-layer">
        <button type="button" className="btn btn-success addjobpostbtn" onClick={() => openInPopup2(true)}>
          <MdLibraryAdd className="addjobpostbtnicon"/>
          Add Offer
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Application Count</th>
            <th scope="col">Offer Status</th>
            <th scope="col">Post Date</th>
            <th scope="col">Expiration Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Juniour Developer</td>
            <td>7</td>
            <td>open</td>
            <td>03/05/2022</td>
            <td>03/05/2022</td>

            <td>
              <button
                type="button"
                onClick={() => openInPopup()}
                class="btn btn-primary"
              >
                View Post
                <MdLaunch className="btniconsiq2" />
              </button>
              &nbsp; &nbsp;
              <button
                className="btn btn-warning"
                
                style={{ color: "white" }}
              >
                Edit
                <AiFillEdit className="btniconsiq2" />
              </button>
              &nbsp; &nbsp;
              <button className="btn btn-danger" href="/add">
                Remove
                <DeleteOutlineIcon className="btniconsiq2" />
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
        <Replyform />
      </Popup>

      <Popup2
       
        title="ADD NEW JOB"
        openPopup={openPopup2}
        setOpenPopup={setOpenPopup2}
      >
        <Addjobform />
      </Popup2>
    </div>
  );
}
