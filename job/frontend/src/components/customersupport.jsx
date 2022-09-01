import React, { useState } from "react";
import Header from "./header";
import Dropdown from "react-bootstrap/Dropdown";
import DatePicker from "react-datepicker";
import Footer from "./footer";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import "../CSS/customersupport.css";

export default function Customersupport() {
  const [message, setMessage] = useState("");

 
  // 
  // const [type, setType] = useState("");
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [reacts, setReacts] = useState("");

  //selector eka//////////////
 

  const options = [
    {value: '', text: '--Select type--'},
    {value: 'technical', text: 'technical'},
    {value: 'network', text: 'network'},
    {value: 'responsiveness', text: 'responsiveness'},
  ];

  const [type, setType] = useState(options[0].value);

  ////////////////////////////////////////

  function sendData() {
    const newForumQuestion = {
      id: "0",
      type,
      question,
      description,
      date,
      time,
      reacts,
    };
  axios
  .post("http://localhost:8000/forumQuestion/add", newForumQuestion)
  .then(() => {
    window.location.reload(false);
  })
  .catch((err) => {
    alert(err);
  });
};

  const handleSubmit = (e) => {
    sendData();
  };

console.log("tttttttttt",date);

// myDate.getFullYear(), myDate.getMonth(), myDate.getDate())

  return (
    <div className="customer-outer-main">
      <Header />
      <div className="customer-main col-6">
        <p className="support-tag">Customer Support</p>
        <hr className="support-tag-hr" />

        <div className="contactemp-form">
          <p className="contactemp-tag">Contact Employer</p>

          <div className="empselector-sup">
            <select className="minimal3 ">
              <option>Pick Employer</option>
              <option>Jhone Deals</option>
              <option>Saiwar aiyya</option>
              <option>Kukul kade</option>
            </select>
          </div>

          <div className="supportsinputcontainer1 row">
            <div className="supportinput-container col-6">
              <input
                type="text"
                id="fname"
                className="supportinput"
                autocomplete="off"
                value={""}
                aria-labelledby="placeholder-fname"
               
              />
              <label
                className="placeholder-text"
                for="fname"
                id="placeholder-fname"
              >
                <div className="supporttext">Name</div>
              </label>
            </div>

            <div className="supportinput-container col-6">
              <input
                type="text"
                id="fname"
                className="supportinput"
                autocomplete="off"
                value=""
                aria-labelledby="placeholder-fname"
              />
              <label
                className="placeholder-text"
                for="fname"
                id="placeholder-fname"
              >
                <div className="supporttext">Email</div>
              </label>
            </div>
          </div>

          <div className="empselector-sup">
            <select className="minimal3 ">
              <option>Type of question</option>
              <option>Texhnical</option>
              <option>Account</option>
              <option>Issues</option>
            </select>
          </div>

          <p className="yourquestion">Your Question</p>
          <p className="yourwuesitonex">Present your question below</p>
          <textarea
            className="form-control yourquestioninput"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>

          <button type="button" className="submitcussupbtn btn btn-primary">
            Submit
          </button>
        </div>

        {/* ----------------------------------------------------------------------------- */}

        <div className="contactemp2 contactemp-form">
          <p className="contactemp-tag">Create Forum</p>

          <div className="supportsinputcontainer2 row">
            <div className="supportinput-container col-6">
              <input
                type="text"
                id="fname"
                className="supportinput"
                autocomplete="off"
                aria-labelledby="placeholder-fname"
                Value={question} onChange={(e) => {  setQuestion(e.target.value); }} 
              />
              <label
                className="placeholder-text"
                for="fname"
                id="placeholder-fname"
              >
                <div className="supporttext">Question</div>
              </label>
            </div>

            <div className="col-lg-6">
              <div className="empselector-sup2">
                <select className="minimal3 " Value={type} onChange={(e) => {setType(e.target.value); }}>
                {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
                </select>
              </div>
            </div>

          </div>

          <div className="row">
            
            <div className="col-lg-6">
              <label className="dateoccured-tag" htmlFor="datepricker123">
                Date 
              </label>
              <DatePicker
                className="datepricker123"
                selected={date}
                 onChange={                 
                   date => setDate(date)
                 } 
              />
            </div>
          </div>

          <p className="yourquestion">Description of problem</p>
          <p className="yourwuesitonex">
            Give a small brief of the encounterd problem
          </p>
          <textarea
            className="form-control yourquestioninput"
            id="exampleFormControlTextarea1"
            rows="3"
            Value={description} onChange={(e) => {setDescription(e.target.value); }}
          />

          <button type="button" className="submitcussupbtn btn btn-primary" onClick={(e) => { handleSubmit(e);}}>
            Submit
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
