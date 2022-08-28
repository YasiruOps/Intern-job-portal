import React from "react";
import "../CSS/quizscore-page.css";
import Header from "./header";

export default function Quizscorepage() {
  return (
    <div>
      <Header />
      <p className="testnametag">Test Name</p>
      <hr className="testtag-hr" />

      <p className="testrestag">Test Results</p>
      <hr className="testres" />

      <div className="scorebord-frame">
        <p className="scoretag">Your Score</p>
        <div className="d-flex justify-content-center">
          <p className="scorelines">6</p>
          <p className="scorelines">/</p>
          <p className="scorelines">10</p>
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
