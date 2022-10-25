import React, { useState, useEffect } from "react";
import Header from "./header";
import "../CSS/employment-app2.css";
import Empapp2img from "../images/empapp2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Employment_app2() {
  const location = useLocation();

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [job, setjob] = useState(location?.state);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const internID = useSelector((state) => state.auth.internID);
  const employerID = useSelector((state) => state.job?.selectjob?.empID);
  const offerTitle = useSelector((state) => state.job?.selectjob?.title);
  const jobID = useSelector((state) => state.job?.selectjob?._id);

  const applicationStatus = "pending";

  const [experience, setExperience] = useState("");
  const [refname, setRefname] = useState("");
  const [refname1, setRefname1] = useState("");
  const [refBday, setRefBday] = useState("");
  const [refbday1, setRefBday1] = useState("");
  const [refbday2, setRefBday2] = useState("");
  const [refPhone, setRefPhone] = useState("");
  const [refPhone1, setRefPhone1] = useState("");
  const [refEmail, setRefEmail] = useState("");
  const [refAddress, setRefAddress] = useState("");
  const [refAddress1, setRefAddress1] = useState("");
  const [refAddress2, setRefAddress2] = useState("");
  const [refAddress3, setRefAddress3] = useState("");
  const [refAddress4, setRefAddress4] = useState("");
  const [date, setDate] = useState("");

  function getCurrentDate(separator = "/") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  const [valierror, setValierror] = useState({
    refPhone1,
    refbday1,
    refbday2,
    refBday,
    refEmail,
  });

  function sendApplication() {
    handleSubmit(submitPDF)();

    const payload = {
      // fname,
      jobID: job._id,
      offerTitle,
      internID,
      employerID,
      applicationStatus,
      pdfID: `${internID}-${jobID}`,

      experience,
      refname: refname + " " + refname1,
      refBday: refbday2 + "/" + refbday1 + "/" + refbday2,
      refPhone: refPhone + " " + refPhone1,
      refAddress:
        refAddress +
        " " +
        refAddress1 +
        " " +
        refAddress2 +
        " " +
        refAddress3 +
        " " +
        refAddress4,
      refEmail,
      date: getCurrentDate(),
    };
    let sucess = true;

    if (
      !refEmail?.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
      )
    ) {
      setValierror((prev)=>({ ...prev, refEmail: "Enter valid Email" }))
      sucess = false;
    }
    if (!refPhone1?.match(/[0-9]{1,10}/)) {
      setValierror((prev)=>({ ...prev, refPhone1: "Entern valid Phone number" }))
   
      sucess = false;
    }
    if (!refbday1?.match(/[1-9][0-9]/)) {
      setValierror((prev)=>({ ...prev, refbday2: "Entern valid Date" }))
  
      sucess = false;
    }
    if (!refbday2?.match(/[1-9][0-9]/)) {
      setValierror((prev)=>({ ...prev, refbday2: "Entern valid Date" }));
      
      sucess = false;
    }
    if (!refbday2?.match(/^[0-9]*$/)) {
      setValierror((prev)=>({ ...prev, refbday2: "Entern valid Date" }));

      sucess = false;
    }
    setTimeout(() => {
      setValierror({
        email: "",
        phone: "",
        password: "",
      });
    }, 3000);

    if (sucess) {
      axios
        .post("http://localhost:8000/application/", payload)
        .then(() => {
          alert("application sent succesfully");
          navigate("/Job-Search");
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  const submitPDF = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0], `${internID}-${jobID}.pdf`);

    const res = await fetch("http://localhost:8000/uploadpdf/", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    // alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  return (
    <div className="empapp2outer">
      <Header />
      <div className="empapp2imgbox">
        <img
          src={Empapp2img}
          className="empapp2img img-fluid d-block"
          alt="Responsive image"
        />
      </div>
      <div className="floatheader" data-aos="fade-right">
        <p className="empappli">Employment Application</p>
        <p className="emplapplowt">
          Fill the form below accurately indicating your potentials and
          suitability to job applying for.
        </p>
      </div>

      <div className="empapp2formfill col-6">

        <div className="row empapp2gapper" style={{ marginTop: "30px" }}>
          <div className="col-xl-2 labeltagempformheader">Upload Resume</div>
          <div className="col-xl-12">
            <input type="file" {...register("file")} />
          </div>
        
        </div>

        <div className="row empapp2gapper">
          <p className="labeltagempformheader">Jobs skills & Training</p>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <textarea
              className="form-control empapp2input"
              id="exampleFormControlTextarea1"
              rows="3"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
        </div>

        <div className="row empapp2gapper">
          <p className="labeltagempformheader">
            References Please list one (1) references that are familiar with
            your work life.
          </p>
        </div>

        <div className="row empapp2gapper">
          <div className="col-xl-2">
            <p className="labeltagempform">
              <span style={{ color: "red" }}>*</span>Name
            </p>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="First Name"
              value={refname}
              onChange={(e) => setRefname(e.target.value)}
            />
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Last Name"
              value={refname1}
              onChange={(e) => setRefname1(e.target.value)}
            />
          </div>
        </div>
        <div className="row empapp2gapper">
          <div className="col-xl-2">
            <p className="labeltagempform">
              <span style={{ color: "red" }}>*</span>Birth Day
            </p>
          </div>
          <div className="col-xl-3">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Month"
              value={refbday1}
              onChange={(e) => setRefBday1(e.target.value)}
            />
            <p style={{ textAlign: "center", color: "red", fontSize: "20px" }}>
              {valierror.refbday1}
            </p>
            
          </div>
          <div className="col-xl-3">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Day"
              value={refBday}
              onChange={(e) => setRefBday(e.target.value)}
            />
            <p style={{ textAlign: "center", color: "red", fontSize: "20px" }}>
              {valierror.refBday}
            </p>
            
          </div>
          <div className="col-xl-4">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Year"
              value={refbday2}
              onChange={(e) => setRefBday2(e.target.value)}
            />
          </div>
        </div>
        <div className="row empapp2gapper">
          <div className="col-xl-2">
            <p className="labeltagempform">
              <span style={{ color: "red" }}>*</span>Phone Number
            </p>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Area Code"
              value={refPhone}
              onChange={(e) => setRefPhone(e.target.value)}
            />
            <p style={{ textAlign: "center", color: "red", fontSize: "18px", marginRight:"100px" }}>
              {valierror.refPhone1}
            </p>
            
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Number"
              value={refPhone1}
              onChange={(e) => setRefPhone1(e.target.value)}
            />
          </div>
        </div>
        <div className="row empapp2gapper">
          <div className="col-xl-2">
            <p className="labeltagempform">
              <span style={{ color: "red" }}>*</span>E-mail Address
            </p>
          </div>
          <div className="col-xl-10">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder=""
              value={refEmail}
              onChange={(e) => setRefEmail(e.target.value)}
            />
          </div>
          <p style={{ textAlign: "center", color: "red", fontSize: "18px", marginTop:"-10px" }}>
            {valierror.refEmail}
          </p>
        </div>
        <div className="row empapp2gapper">
          <div className="col-xl-2">
            <p className="labeltagempform">
              <span style={{ color: "red" }}>*</span>Address
            </p>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Street Address 1"
              value={refAddress}
              onChange={(e) => setRefAddress(e.target.value)}
            />
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Street Address 2"
              value={refAddress1}
              onChange={(e) => setRefAddress1(e.target.value)}
            />
          </div>
        </div>
        <div className="row empapp2gapper">
          <div className="col-xl-2"></div>
          <div className="col-xl-4">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="City"
              value={refAddress2}
              onChange={(e) => setRefAddress2(e.target.value)}
            />
          </div>
          <div className="col-xl-4">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="State/Province"
              value={refAddress3}
              onChange={(e) => setRefAddress3(e.target.value)}
            />
          </div>
          <div className="col-xl-2">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Postal code"
              value={refAddress4}
              onChange={(e) => setRefAddress4(e.target.value)}
            />
          </div>
          <div></div>
        </div>

        <div className="row">
          <button
            type="button"
            className="btn empapp2savetbn"
            onClick={sendApplication}
          >
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
