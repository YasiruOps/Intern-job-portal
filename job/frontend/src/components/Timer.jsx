import { unstable_composeClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Timer() {
  const count = useSelector((state) => state.mcq.questions);
 

  const navigate = useNavigate();

  function submit() {
    navigate("/Quiz-score",{state:{amount:count.length,name:count[0].name, type:count[0].type}});
  }

  return (
    <div>
      <div className="top-layer">
        <div>
          <p className="quiz-name">{count[0]?.name}</p>
        </div>
        {/* <Timer data={questions.length}/> */}
      </div>
      <div className="time-box">
        <div className="row">
          <p className="time-tag">Time Left</p>
        </div>
        <div className="row">
          <p className="time">
            <Countdown date={Date.now() + 10000} 
            onComplete={submit}/>
          </p>
        </div>
      </div>
    </div>
  );
}
