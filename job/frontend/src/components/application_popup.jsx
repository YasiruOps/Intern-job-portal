import React from "react";
import "../CSS/application_popup.css";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function application_popup() {
  return (
    <div className="application_popup_outerframe">
      <button className="btn btn-primary btnviewresume">
        View Resume
        <BsFillFileEarmarkTextFill className="viewbtniconresume" />
      </button>

      <p className="personaldetailsviepopup">Personal Details</p>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops">First Name</p>
          <p className="answerl2">Jhone</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops">Last Name</p>
          <p className="answerl2">Doe</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops">Date of birth</p>
          <p className="answerl2">1997/05/26</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops">Phone</p>
          <p className="answerl2">614-873-3801</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops">E-mail </p>
          <p className="answerl2">JhoneD@gmail.com</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops">Address </p>
          <p className="answerl2">7039 Rockland St.Piedmont, SC 29673</p>
        </div>
      </div>

      <p className="titlestagpops">Skills & Experience</p>
      <p className="answerl2 lineheightoff">
        Is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </p>

      <hr className="popupseparator" />

      <p className="personaldetailsviepopup">Refree Details</p>
      <div className="row">
        <div className="col-6">
          <p className="titlestagpops">Name </p>
          <p className="answerl2">Jhons Brown</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops">Phone </p>
          <p className="answerl2">214-703-8582</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops">Address</p>
          <p className="answerl2">
            1820 Greenspring Cir Garland, Texas(TX), 75044
          </p>
        </div>
        <div className="col-6">
          <p className="titlestagpops">E-mail </p>
          <p className="answerl2">Jhones@gmail.com</p>
        </div>
      </div>

      <hr className="popupseparator" />

      <div className="applicaitonbtnsetviewpopup">
        <button className="btn btn-success">
          Contact <RiSendPlaneFill className="btnapplicationpopupview" />
        </button>
        <button className="btn btn-warning" style={{ color: "#FFFFFF" }}>
          Accept <CheckCircleIcon className="btnapplicationpopupview" />
        </button>
        <button className="btn btn-danger">
          Reject <CancelIcon className="btnapplicationpopupview" />
        </button>
      </div>
    </div>
  );
}
