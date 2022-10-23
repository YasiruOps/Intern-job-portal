import React, { useState, useEffect } from "react";
import "../CSS/forum_compage.css";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { GoSearch } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgComment } from "react-icons/cg";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Popup from "./popup";
import Editpop from "./editforumquestion_popup"

import Profpic from "../images/forum_img.png";
import EditIcon from '@mui/icons-material/Edit';

export default function Forum_compage() {
  
  const [openPopup, setOpenPopup] = useState(false);
  const location = useLocation();

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(location?.state?.comments??[]);

  const userID = useSelector((state) => state.auth.internID);
  
  const [username, setUsername] = useState("");
  const [recordForEdit, setRecordForEdit] = useState(null);

  console.log("locstate", location.state)

  const openInPopup = () => {
    setRecordForEdit(location.state);
    setOpenPopup(true);
  };

  useEffect(() => {
    console.log("userID", location.state._id)
    axios
    .get(`http://localhost:8000/auth/intern/${userID}`)
    .then((res) => {
      setUsername(res?.data[0]?.first_name); 
    })
    .catch((err) => {
      alert(err);
    });
    
}, []);



  function sendData() {

    const newCommnet = {
      forumID:location.state._id,
      userID,
      name:username,
      comment,
    };

  axios
  .post("http://localhost:8000/comment", newCommnet)
  .then(() => {
    return axios
          .get(`http://localhost:8000/comment/${location.state._id}`)
          .then((res) => {
            setComments(res.data)
      }) 
  })
  .catch((err) => {
    alert(err);
  });
  };  

  function delteComment(commentID, index){
    axios
    .delete(`http://localhost:8000/comment/delete/${commentID}`)
    .then(() => {
   
      const temp = [...comments]
      temp.splice(index, 1)
     
      setComments(temp);
      alert("comment removed")
    })
    
    .catch((err) => {
      alert(err);
    });
  }

 

  return (
    <div className="">

      <Header />
      <div className="jobsearch col-9" >
        <p className="searchjobtag2">Forum</p>

        <div className="col-12">
          <div className="searchboxjob2">
            <GoSearch className="searchiconjob" />
            <input type="text" className="searchinjob" placeholder="Search"
            />
            <button type="button" class="btn btn-light advancedsearhjob">
              Advanced
            </button>
          </div>
        </div>

        <hr className="jobdetailshr" />

        <div className="sorterbar row">
          <div className="sorterbarcontent col-2">
            <AiOutlineStar className="soterbarnewcat-icon" />
            <p className="soterbarnewcat float-right">New</p>
          </div>

          <div className="sorterbarcontent  col-2">
            <BiTrendingUp className="soterbarnewcat-icon" />
            <p className="soterbarnewcat float-right">Top</p>
          </div>

          <div className="sorterbarcontent col-2">
            <AiOutlineClockCircle className="soterbarnewcat-icon" />
            <p className="soterbarnewcat float-right">Old</p>
          </div>

          <div className="sorterbarcontentend endsetterselect col-6">
            <div className="activity-selector-forumpage">
              <select className="minimal-forumpage ">
                <option>Type</option>
                <option>Best match</option>
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>
            </div>
          </div>
        </div>

        {/*  main center part of page*/}
        <div className="forum-main row">
          <div className="forum-left col-12">
            {/* question card teal*/}
            <div className="qraised row">
              <div
                className="qupvote col-xl-1"
                style={{ backgroundColor: "white" }}
              >
                <div className="qupvotebar" >
                  <BsArrowUpCircle className="countericons hovupvote" />
                  <p className="upcountq">{location.state.reacts}</p>
                  <BsArrowDownCircle className="countericons hovdownvote" />
                </div>
              </div>

              <div className="picarea col-xl-2" >
                <img src={Profpic} className="profilepic" />
              </div>
              <div className="qmid col-xl-9" >
                <div className="row">
                  <p className="qmidtitle">{location.state.question}</p>
                  <p className="qmidq">{location.state.description}</p>
                  <p className="qmiddate">
                    {location.state.time} <span>{location.state.date}</span>
                  </p>
                </div>
                {console.log("lol",location.state.ownerID,"userid", userID)}
                {location.state.ownerID == userID?
                <div type="button" className="editbtnsfx" onClick={openInPopup}>
                  Edit 
                  <EditIcon style={{fontSize:"18px", marginTop:"-5px", marginLeft:"5px"}}/>
                </div>
               
                :<div/>
                }

                <div className="row qintractsect">
                  <div className="col-5 qintractsect-c1">
                    <CgComment className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">
                      <span>{comments?.length??0} </span>comments
                    </p>
                  </div>
                  <div className="col-3  qintractsect-c1">
                    <BsBookmark className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">Save</p>
                  </div>
                  <div className="col-4 qintractsect-c1">
                    <FiShare2 className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">Share</p>
                  </div>
                </div>
              </div>
             

              <div className="commentinputarea col-10">
                <textarea
                  className="form-control commmentinput"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Type your comment here"
                  value={comment} onChange={(e)=>setComment(e.target.value)}
                />

                <button type="button" class="btn btn-primary addcomtbtn"
                onClick={sendData}>
                  Add comment
                </button>
              </div>

              <div className="commentsarea col-10">
                <p className="commentstag">Comments</p>
                <hr className="commentstaghr" />

        
                {comments.map((comments,i) => {
                  return (
                        <div className="commentbox row" style={{marginBottom:"5px", padding:"5px"}}>
                          <div className="commmentbox-left d-none d-xxl-block col-1">
                            <img
                              src={Profpic}
                              alt="image here"
                              className="commenterprofpic"
                            />
                          </div>
                          <div className="commentboxmid col-10 ">
                            <p className="commentatornametag">{comments.name}</p>
                            <p className="comment">
                              {comments.comment}
                            </p>
                          
                          </div>
                        
                          {comments?.userID == userID?
                          <div className="commnetboxrgt col-1">
                            <AiFillDelete className="deleteicon" onClick={()=>
                              delteComment(comments._id, i)
                            }/>
                          </div>:<div/>
                          }
                          
                        </div>
                  )}
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup
        title={location?.state?.question}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
         <Editpop recordForEdit={recordForEdit}/> 
      </Popup>
    </div>
  );
}
