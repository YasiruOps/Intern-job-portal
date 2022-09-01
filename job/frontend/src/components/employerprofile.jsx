import React, { useState, useEffect } from "react";
import "../CSS/employerprofile.css"
import Header from "./header"
import Sidebar from './employer-sidebar'
import { BiEdit } from "react-icons/bi";
import { BsSaveFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Employerprofile() {

    const id = useSelector((state) => state.auth.employerid);
    console.log("iddd", id)

    const [isDisabled, setIsDisabled] = useState(true);
    const [checked, setChecked] = useState(false);
    
    const dataSubmit = () => {
      return checked ? setIsDisabled(true) : setIsDisabled(false);
    };
    
    const onCheckboxClick = () => {
      setChecked(!checked);
      return dataSubmit();
    };
    
    const initialState = {
        _id: "",
        email: "",
        displayname: "",
        password: "",
        registrationID: "",
        compname: "",
        contact: "",
        address:"",
      };

     const [profile, setProfile] = useState(initialState);

    useEffect(() => {  
        //Customer Details getter
        axios
          .get(`http://localhost:8000/employerRegister/${id}`)
          .then((response) => {
            console.log("lllllll",response?.data[0]);
            setProfile(response?.data[0]);
          })
          .catch((err) => {
          });
      }, []);

  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className="main-container5">
            <div className="headtop">
                <p className="headerempprof-tag">Employer Profile</p>
                <hr className="headerempprof-hr" />
            </div>

            <div className="Baseinfo">
                <p className="baseinfotag">Basic information</p>
                <hr className="baseinfo-hr"/>

                <div className="row">
                    <div className="col-lg-6">
                        <label for="exampleInputPassword1">Registation ID</label>
                        <input type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" placeholder={profile.address} disabled={isDisabled}></input>
                    </div>
                    <div className="col-lg-6">
                        <label for="exampleInputPassword1">Company Name</label>
                        <input type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" placeholder={[profile.compname]}disabled={isDisabled}/>
                    </div>
                    <div className="col-lg-6">
                        <label for="exampleInputPassword1">Display Name</label>
                        <input type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" placeholder={profile.displayname} disabled={isDisabled}/>
                    </div>
                    <div className="col-lg-6">
                        <label for="exampleInputPassword1">Contact</label>
                        <input type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" placeholder={profile.contact} disabled={isDisabled}/>
                    </div>
                    <div className="col-lg-6" >
                        <label for="exampleInputPassword1">Address</label>
                        <input type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" placeholder={profile.address} disabled={isDisabled}/>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-xl-3">
                                <button type="button" className="btn employerprofbtnset1" style={{backgroundColor:"#FFB800"}} onClick={onCheckboxClick}>
                                    <p className="employerprofbtnset1-text">Edit</p>
                                    <BiEdit className="employerprofbtnset1-icon" />
                                </button>
                            </div>
                            <div className="col-xl-3" >
                                <button type="button" className="btn employerprofbtnset1" style={{backgroundColor:"#0C77F8"}}>
                                    <p className="employerprofbtnset1-text">Save</p>
                                    <BsSaveFill className="employerprofbtnset1-icon" />
                                </button>
                            </div>
                        </div>
                     </div>
                </div>
            </div>

            <div className="authentication-sec">
                <p className="baseinfotag">Authentication</p>
                <hr className="baseinfo-hr"/>

                <div className="row" style={{marginLeft:"0px"}}>
                    <div className="col-lg-6" >
                        <div className="col-12">
                            <label for="exampleInputPassword1">E-mail</label>
                            <input type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" placeholder={profile.email}/>
                        </div>
                        <div className="col-12">
                            <button type="button" className="btn employerprofbtnset2" style={{backgroundColor:"#0C77F8"}}>
                                <p className="employerprofbtnset1-text">Change Email</p>
                                <MdEmail className="employerprofbtnset1-icon" />
                            </button>
                        </div>    
                        <div className="col-12">
                            <button type="button" className="btn employerprofbtnset2" style={{backgroundColor:"#0C77F8"}}>
                                <p className="employerprofbtnset1-text">Change Password</p>
                                <RiLockPasswordFill className="employerprofbtnset1-icon" />
                            </button>
                        </div>        
                    </div>

                    <div className="col-lg-6">
                   
                            <label for="exampleInputPassword1">Previous Password <span style={{color:"red"}}>*</span> </label>
                            <input type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1"/>
                        
                  
                            <label for="exampleInputPassword1">New Password <span style={{color:"red"}}>*</span> </label>
                            <input type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1"/>
                   
                        
                            <label for="exampleInputPassword1">Confirm New Password <span style={{color:"red"}}>*</span> </label>
                            <input type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1"/>
                   
                        
                        <button type="button" className="btn employerprofbtnset1" style={{backgroundColor:"#0C77F8"}}>
                            <p className="employerprofbtnset1-text">Save</p>
                            <BsSaveFill className="employerprofbtnset1-icon" />
                        </button>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
