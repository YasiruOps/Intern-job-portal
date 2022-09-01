import React from "react";
import "../CSS/quizscore-page.css";
import Header from "./header";
import { useLocation } from "react-router-dom";

export default function Quizscorepage() {

  const location = useLocation();

  return (
    <div>
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
          <button type="button" className="btn btn-primary continuebtnscorep">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
