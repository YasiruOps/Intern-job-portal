import React, { useState, useEffect } from "react";
import "../CSS/applicationmain.css";
import TodayIcon from "@mui/icons-material/Today";
import { GoSearch } from "react-icons/go";
import ReplyIcon from "@mui/icons-material/Reply";
import { MdLaunch } from "react-icons/md";
import Applicationform from "./application_popup";
import { useSelector, useDispatch } from "react-redux";
import Popup from "./popup";

import axios from "axios";

export default function Applicationsmain_dash() {
  const [applications, setApplications] = useState([]);
  const [flag, setFlag] = useState(false);

  const id = useSelector((state) => state.auth.employerid);

  const [intern, setIntern] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/application/${id}`)
      .then((res) => {
        const data = res.data;
        setApplications(res.data);
        setFlag(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

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

          <div className="searchbox test657">
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
            {applications.map((applications, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{applications.offerTitle}</td>
                  <td>Jhone Doe</td>
                  <td>{applications.applicationStatus}</td>
                  <td>{applications.date}</td>

                  <td>
                    <button
                      onClick={() => setOpenPopup(true)}
                      className="btn btn-primary"
                    >
                      View Application
                      <MdLaunch className="viewicon" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Popup
          // User Name
          title="Jhone Doe"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <Applicationform />
        </Popup>
      </div>
    </div>
  );
}
