import React,{useState} from "react";
import Header from "../components/header";
import Dropdown from "react-bootstrap/Dropdown";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../CSS/customersupport.css";

export default function Customersupport() {

    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="customer-outer-main row">
      <Header />
      <div className="customer-main col-6">
        <p className="support-tag">Customer Support</p>
        <hr className="support-tag-hr" />

        <div className="contactemp-form">
          <p className="contactemp-tag">Contact Employer</p>

          <div className="empselector-sup">
            <select className="minimal3 ">
              <option>Pick Empployer</option>
              <option>Jhone Deals</option>
              <option>Saiwar aiyya</option>
              <option>Kukul kade</option>
            </select>
          </div>

            <div className="supportsinputcontainer1 row">
                <div className="supportinput-container col-6">                 
                    <input type="text" id="fname" className="supportinput" autocomplete="off" value="" aria-labelledby="placeholder-fname"/>
                        <label className="placeholder-text" for="fname" id="placeholder-fname">
                            <div className="supporttext">Name</div>
                        </label>
                </div>

                <div className="supportinput-container col-6">                 
                    <input type="text" id="fname" className="supportinput" autocomplete="off" value="" aria-labelledby="placeholder-fname"/>
                        <label className="placeholder-text" for="fname" id="placeholder-fname">
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
            <textarea className="form-control yourquestioninput" id="exampleFormControlTextarea1" rows="3"></textarea>

            <button type="button" className="submitcussupbtn btn btn-primary">Submit</button>
           
        </div>

{/* ----------------------------------------------------------------------------- */}

        <div className="contactemp2 contactemp-form">
          <p className="contactemp-tag">Create Forum</p>

            <div className="supportsinputcontainer2 row">
                <div className="supportinput-container col-6">                 
                    <input type="text" id="fname" className="supportinput" autocomplete="off" value="" aria-labelledby="placeholder-fname"/>
                        <label className="placeholder-text" for="fname" id="placeholder-fname">
                            <div className="supporttext">Name</div>
                        </label>
                </div>

                <div className="supportinput-container col-6">                 
                    <input type="text" id="fname" className="supportinput" autocomplete="off" value="" aria-labelledby="placeholder-fname"/>
                        <label className="placeholder-text" for="fname" id="placeholder-fname">
                            <div className="supporttext">Email</div>
                        </label>
                </div>      
                
                 
            </div>

            
            <div className="row">
                <div className="col-lg-6">
                    <div className="empselector-sup2">
                        <select className="minimal3 ">
                        <option>Type of Issue</option>
                        <option>Texhnical</option>
                        <option>Account</option>
                        <option>Issues</option>
                        </select>
                    </div>
                 </div>
                 <div className="col-lg-6">
                 <label className="dateoccured-tag" htmlFor="datepricker123">Date Occured</label>
                 <DatePicker className="datepricker123" selected={startDate} onChange={(date:Date) => setStartDate(date)} /> 
                    
                 </div>
            </div>
          

            <p className="yourquestion">Description of problem</p>
            <p className="yourwuesitonex">Give a small brief of the encounterd problem</p>
            <textarea className="form-control yourquestioninput" id="exampleFormControlTextarea1" rows="3"></textarea>

            <button type="button" className="submitcussupbtn btn btn-primary">Submit</button>


        </div>



      </div>
    </div>
  );
}
