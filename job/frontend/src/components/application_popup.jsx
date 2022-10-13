import React from "react";
import "../CSS/application_popup.css";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Application_popup(props) {
  
  const { recordForEdit } = props;

  const [user, setUser] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:8000/auth/intern/${recordForEdit.internID}`)
      .then((res) => {
        const data = res.data;
        setUser(res?.data[0]);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  function setStatus(stat){
    axios
    .put(`http://localhost:8000/application/updatestatus/${props.recordForEdit._id}`,{applicationStatus:stat})
    .then(() => {
        alert("sucussfully updated")     
    })
    .catch((err) => {
    });
  }


  return (
    <div className="application_popup_outerframe">
      <a href={`http://localhost:8000/static/${props.recordForEdit.pdfID}.pdf`}>
        <button className="btn btn-primary btnviewresume" >
          View Resume
          <BsFillFileEarmarkTextFill className="viewbtniconresume" />
        </button>
      </a>
      <p className="personaldetailsviepopup">Personal Details</p>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops">First Name</p>
          <p className="answerl2">{user?.fName}</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops">Last Name</p>
          <p className="answerl2">{user?.lName}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops">Date of birth</p>
          <p className="answerl2">{user?.dob}</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops">Phone</p>
          <p className="answerl2">{user?.phone}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops">E-mail </p>
          <p className="answerl2">{user?.Email}</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops">Address </p>
          <p className="answerl2">{user?.address}</p>
        </div>
      </div>

      <p className="titlestagpops">Skills & Experience</p>
      <p className="answerl2 lineheightoff">
       {recordForEdit.experience}
      </p>

      <hr className="popupseparator" />

      <p className="personaldetailsviepopup">Refree Details</p>
      <div className="row">
        <div className="col-6">
          <p className="titlestagpops">Name </p>
          <p className="answerl2">{recordForEdit.refname}</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops">Phone </p>
          <p className="answerl2">{recordForEdit.refPhone}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops">Address</p>
          <p className="answerl2">
            {recordForEdit.refAddress}
          </p>
        </div>
        <div className="col-6">
          <p className="titlestagpops">E-mail </p>
          <p className="answerl2">{recordForEdit.refEmail}</p>
        </div>
      </div>

      <hr className="popupseparator" />

      <div className="applicaitonbtnsetviewpopup">
        <Mailto email={user?.Email} subject={recordForEdit.offerTitle} body="Dear Intern,">
          <button className="btn btn-success">
            Contact <RiSendPlaneFill className="btnapplicationpopupview" />
          </button>
        </Mailto>  
        <button className="btn btn-warning" style={{ color: "#FFFFFF" }} onClick={()=>setStatus("Accepted")}>
          Accept <CheckCircleIcon className="btnapplicationpopupview" />
        </button>
        <button className="btn btn-danger"  onClick={()=>setStatus("Rejected")}>
          Reject <CancelIcon className="btnapplicationpopupview" />
        </button>
      </div>
    </div>
  );
}
