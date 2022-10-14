import "./style.css";
import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import RegisterForm from "../../components/login/RegisterForm";
import Header from "../../components/header"
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Popup from "../../components/popup";
import RemoveApplciation from "./removeApplcation-popup";
import Footer from "../../components/footer";

export default function Table() {

  const id = useSelector((state) => state.auth.internID);
  const [applications, setApplcations] = useState([])

  const [openPopup, setOpenPopup] = useState(false); 
  const [recordForEdit, setRecordForEdit] = useState(null);

  const openInPopup = (app) => {
    setRecordForEdit(app);
    setOpenPopup(true);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/application/intern/${id}`)
      .then((res) => {
        const data = res.data;
        setApplcations(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div className="profile">
      <Header/>
      <div className="profile_top" >
        <div className="profile_container">
          <Cover />
          <ProfielPictureInfos />
          
        </div>{" "}
        <br />
        <div className="login" style={{marginTop:"40px"}}>
          <div className="profile_body" >
            <div className="login" >
              <h2 style={{ margin: 10, textDecorationLine: "underline" }}>
                Application sent
              </h2>
              <div style={{ margin: 20 }}>
                <table className="tabel1" >
                <thead>
                  <tr className="tr1">
                    <th className="th1">Job title</th>
                    <th className="th1">Employer</th>
                    <th className="th1">Status</th>
                    <th className="th1">Date</th>
                    <th className="th1">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                   {applications?.map((application, i) => {
                    return ( 
                          <tr className="tr1">
                            <td className="td1">
                              <label>{application.offerTitle}</label>
                              {/* <br />
                              <label style={{ fontSize: 10 }}>
                                {Kaluthara, Panadura}
                              </label> */}
                            </td>
                            <td className="td1"> {application.employerID}</td>
                            <td className="td1">{application.applicationStatus}</td>
                            <td className="td1">{application.date}</td>
                            <td className="td1">
                              <button type="button" className="rmvBtn-applications" style={{padding:"10px", borderRadius:"5px", color:"white", backgroundColor:"red", border:"0px"}} onClick={() => openInPopup(application)}>
                                Remove
                              </button>
                            </td>
                          </tr>                        
                          );
                        })}
                    </tbody>
                </table>
              </div>
            </div>
          </div>{" "}
          <br />
        </div>
      </div>
      <Popup
        title={recordForEdit?.offerTitle}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <RemoveApplciation recordForEdit={recordForEdit?._id}/>
      </Popup>
      <Footer/>
    </div>
  );
}
