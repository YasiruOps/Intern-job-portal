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

    const [isDisabled, setIsDisabled] = useState(true);
    const [checked, setChecked] = useState(false);
    
    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        setIsActive(current => !current);
      };

    const dataSubmit = () => {
      return checked ? setIsDisabled(true) : setIsDisabled(false);
    };
    
    const onCheckboxClick = () => {
      setChecked(!checked);
      return dataSubmit();
    };
    
    const initialState = {
        email: "",
        displayname: "",
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
       
            setProfile(response?.data[0]);
          })
          .catch((err) => {
          });
      }, []);

      function ChangeValue(key,value){
        setProfile({...profile,[key]:value})
      }

      function EditSubmit(){
      
        axios
        .put(`http://localhost:8000/employerRegister/update/${id}`,profile)
        .then(() => {
            setIsDisabled(true);
            alert("sucussfully updated")
           
        })
        .catch((err) => {
        });
      };
    
    //   Value={empname} onChange={(e) => {setEmpname(e.target.value);

//password
const [password, setPassword] = useState("")

const [newpassword, setnewPassword] = useState("")
const [newpassword2, setnewPassword2] = useState("")

function changePassword(){
    if(newpassword!=newpassword2){
        alert("password missmatch")
        return;
    }
    axios
    .put(`http://localhost:8000/employerRegister/updatepassword/${id}`,{prevpassword:password, password:newpassword})
    .then(() => {
        alert("sucussfully updated")     
    })
    .catch((err) => {
    });

}

function ChangeValue(key,value){
    setProfile({...profile,[key]:value})
  }

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
                        <input name="registrationID" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" onChange={(e)=>ChangeValue(e.target.name, e.target.value)} value={profile.registrationID} disabled={isDisabled}></input>
                    </div>
                    <div className="col-lg-6">
                        <label for="exampleInputPassword1">Company Name</label>
                        <input name="compname" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" onChange={(e)=>ChangeValue(e.target.name, e.target.value)} value={[profile.compname]}disabled={isDisabled}/>
                    </div>
                    <div className="col-lg-6">
                        <label for="exampleInputPassword1">Display Name</label>
                        <input name="displayname" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" onChange={(e)=>ChangeValue(e.target.name, e.target.value)} value={profile.displayname} disabled={isDisabled}/>
                    </div>
                    <div className="col-lg-6">
                        <label for="exampleInputPassword1">Contact</label>
                        <input name="contact" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" onChange={(e)=>ChangeValue(e.target.name, e.target.value)} value={profile.contact} disabled={isDisabled}/>
                    </div>
                    <div className="col-lg-6" >
                        <label for="exampleInputPassword1">Address</label>
                        <input name="address" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" onChange={(e)=>ChangeValue(e.target.name, e.target.value)} value={profile.address} disabled={isDisabled}/>
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
                                <button type="button" className="btn employerprofbtnset1" onClick={EditSubmit} style={{backgroundColor:"#0C77F8"}}>
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
                            <input name="email" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1" disabled={true} value={profile.email}/>
                        </div> 
                        <div className="col-12">    
                            <button type="button" className="btn employerprofbtnset2" style={{backgroundColor:"#0C77F8"}} onClick={handleClick}>
                                <p className="employerprofbtnset1-text">Change Password</p>
                                <RiLockPasswordFill className="employerprofbtnset1-icon" />
                            </button>
                        </div>        
                    </div>

                    <div className="col-lg-6" style={{display: isActive ? "none" : ''}}>
                   
                    

                            <label for="exampleInputPassword1">Previous Password <span style={{color:"red"}}>*</span> </label>
                            <input Value={password} onChange={(e) => {setPassword(e.target.value);}} type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1"/>
                        
                  
                            <label for="exampleInputPassword1">New Password <span style={{color:"red"}}>*</span> </label>
                            <input Value={newpassword} onChange={(e) => {setnewPassword(e.target.value);}} type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1"/>
                   
                        
                            <label for="exampleInputPassword1">Confirm New Password <span style={{color:"red"}}>*</span> </label>
                            <input Value={newpassword2} onChange={(e) => {setnewPassword2(e.target.value);}} type="password" className="form-control empprofbaseinfoinputs" id="exampleInputPassword1"/>
                   
                        
                        <button onClick={changePassword} type="button" className="btn employerprofbtnset1" style={{backgroundColor:"#0C77F8"}}>
                            <p className="employerprofbtnset1-text" >Save</p>
                            <BsSaveFill className="employerprofbtnset1-icon" />
                        </button>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
