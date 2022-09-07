import React from "react";
import "../CSS/quizscore-page.css";
import Header from "./header";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Quizscorepage() {
  
  const navigate = useNavigate();
  const userID = useSelector((state) => state.auth.internID);
  const location = useLocation();

  function submit(){

    const score = Math.round((location.state.correct/location.state.amount)*100)

    const payload={
      quiz:location.state.name,
      userID,
      type:location.state.type,
      score,
    }

    console.log("payload eka",payload)

    axios
    .put("http://localhost:8000/userScore/", payload)
    .then(() => {
      alert("sumbitted successfull")
      navigate("/McqCat");
    })
    .catch((err) => {
      alert(err);
    });
  }

  return (
    <div>

      {console.log("type eka",location.state.type)}

      <Header />
      <p className="testnametag">{location.state.name}</p>
      <hr className="testtag-hr" />

      <p className="testrestag">Test Results</p>
      <hr className="testres" />

      <div className="scorebord-frame">
        <p className="scoretag">Your Score</p>
        <div className="d-flex justify-content-center">
          <p className="scorelines">{location.state.correct}</p>
          <p className="scorelines">/</p>
          <p className="scorelines">{location.state.amount}</p>
        </div>

        <div className="centeraligner">
          <button type="button" className="btn btn-primary continuebtnscorep" onClick={submit}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
