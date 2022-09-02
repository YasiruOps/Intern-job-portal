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

//  employee contact

const[name, setName] =useState("")
const[email, setEmail] =useState("")
const[desc, setDesc] =useState("")
const[date2, setDate2] =useState("")

const options2 =[
  {value: '', text: '--Select Employer--'},
  {value: 'awemonk', text: 'Awe monk'},
  {value: 'teenhug', text: 'Teens Hugs'},
  {value: 'epiclift', text: 'Epic Lift'},
];

const[empname, setEmpname] =useState(options2[0].value)

  // forum ekeee part eka
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

  const[qtype, setQtype] =useState(options[0].value)
  ////////////////////////////////////////

   function getCurrentDate(separator="/"){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    function getCurrentTime(separator=":"){

      let newDate = new Date()
      let hours = newDate.getHours();
      let minutes = newDate.getMinutes();
      let seconds = newDate.getSeconds();
      
      return `${hours}${separator}${minutes}${separator}${seconds}`
      }

      function getSelectedDate(ddate){

        let day = ddate.getDate();
        let month = ddate.getMonth()+1;
        let year = ddate.getFullYear();
        
        return `${day}${"/"}${month<10?`0${month}`:`${month}`}${"/"}${year}`
        }

    console.log("dateee",getSelectedDate(date));
     console.log("real date",date);

//Employee Question yawana eka
function sendData2() {
  const newEmpQuestion = {
    id: "0",
    empname,
    name,
    email,
    qtype,
    desc,
    date2:getCurrentDate(),
  };
axios
.post("http://localhost:8000/employerContact/add", newEmpQuestion)
.then(() => {
  window.location.reload(false);
})
.catch((err) => {
  alert(err);
});
};  

  //Forum Question yawana eka
  function sendData() {
    const newForumQuestion = {
      ownerID:"",
      type,
      question,
      description,
      date:getSelectedDate(date),
      time:getCurrentTime(),
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

  const handleEmpQuesitionSub = (e) => {
    sendData2();
  };

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
            <select className="minimal3" Value={empname} onChange={(e) => {setEmpname(e.target.value);}}>
                {options2.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
            </select>
          </div>

           {/* <select className="minimal3 " Value={type} onChange={(e) => {setType(e.target.value); }}>
                 {options.map(option => (
               <option key={option.value} value={option.value}>
               {option.text}
               </option>
               ))}
                </select> */}


          <div className="supportsinputcontainer1 row">
            <div className="supportinput-container col-6">
              <input
                type="text"
                id="fname"
                className="supportinput"
                autocomplete="off"
                Value={name} onChange={(e) => {  setName(e.target.value); }} 
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
                Value={email} onChange={(e) => {  setEmail(e.target.value); }} 
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
          <select className="minimal3 " Value={qtype} onChange={(e) => {setQtype(e.target.value); }}>
                {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
                </select>
          </div>   

          <p className="yourquestion">Your Question</p>
          <p className="yourwuesitonex">Present your question below</p>
          <textarea
            className="form-control yourquestioninput"
            id="exampleFormControlTextarea1"
            rows="3"
            Value={desc} onChange={(e) => {  setDesc(e.target.value); }} 
          />

          <button type="button" className="submitcussupbtn btn btn-primary" onClick={handleEmpQuesitionSub}>
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
                  //  date => setDate(getSelectedDate(date))
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
