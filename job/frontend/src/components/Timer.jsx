import { unstable_composeClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import Countdown,{zeroPad} from "react-countdown";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Timer() {
  const count = useSelector((state) => state.mcq.questions);
 

  const navigate = useNavigate();

  function submit() {
    navigate("/Quiz-score",{state:{amount:count.length,name:count[0].name, type:count[0].type}});
  }

  const renderer = ({ hours, minutes, seconds}) => {
    
      return (

        <span>
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
  };

  return (
    <div className="row">
      <div className="top-layer col-5">
        <div>
          <p className="quiz-name">{count[0]?.name}</p>
          {console.log("count", count.length)}
        </div>
        {/* <Timer data={questions.length}/> */}
      </div>
      <div className="time-box col-2" style={{fontSize:"24px", fontWeight:"bold"}}>
        <div className="row">
          <p className="time-tag">Time Left</p>
        </div>
        <div className="row" style={{backgroundColor:""}}>
          <p className="time">
            <Countdown renderer={renderer} date={Date.now()+ count.length* 2* 60 * 1000 +1000} 
            onComplete={submit}/>
          </p>
        </div>
      </div>
    </div>
  );
}
