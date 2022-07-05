import React from "react";
import "../CSS/Mcq.css";
import Header from "../components/header";
import FlagIcon from "@mui/icons-material/Flag";

export default function mcq() {
  return (
    <div>
      <Header />
      <div className="outer-container">
        <div className="top-layer">
          <div>
            <p className="quiz-name">Name of Quiz</p>
          </div>
          <div className="time-box">
            <div className="row">
              <p className="time-tag">Time Left</p>
            </div>
            <div className="row">
              <p className="time">00:13:22 </p>
            </div>
          </div>
        </div>

        <h4 className="q-number">Question 1</h4>

        <div className="mid-layer">
          <div className="row">
            <div className="leftside col-lg-9">
              <div className="mcq">
                <p className="question">
                  Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, nostrud ipsum consectetur sed do, quis
                  nostrud exercitation{" "}
                </p>
                <div className="choices">
                  <p className="options">A</p>
                  <div className="answer">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      {" "}
                      ipsum dolor sit amet, consectetur adipiscing elit, sed
                      doipsum dolor sit amet, consectetur adipiscing elit, sed
                      doipsum dolor sit amet, consectetur adipiscing elit, sed
                      do{" "}
                    </label>{" "}
                    <br />
                  </div>
                </div>

                <div className="choices">
                  <p className="options">B</p>
                  <div className="answer">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      {" "}
                      ipsum dolor sit amet, consectetur adipiscing elit, sed
                      doipsum dolor sit amet, consectetur adipiscing elit, sed
                      doipsum dolor sit amet, consectetur adipiscing elit, sed
                      do{" "}
                    </label>{" "}
                    <br />
                  </div>
                </div>

                <div className="choices">
                  <p className="options">C</p>
                  <div className="answer">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      {" "}
                      ipsum dolor sit amet, consectetur adipiscing elit, sed
                      doipsum dolor sit amet, consectetur adipiscing elit, sed
                      doipsum dolor sit amet, consectetur adipiscing elit, sed
                      do{" "}
                    </label>{" "}
                    <br />
                  </div>
                </div>

                <div className="choices">
                  <p className="options">D</p>
                  <div className="answer">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      {" "}
                      ipsum dolor sit amet, consectetur adipiscing elit, sed
                      doipsum dolor sit amet, consectetur adipiscing elit, sed
                      doipsum dolor sit amet, consectetur adipiscing elit, sed
                      do{" "}
                    </label>{" "}
                    <br />
                  </div>
                </div>

                <button type="button" className="flag_btn">
                  Flag question
                  <span className="btn_gap">
                    <FlagIcon />
                  </span>
                </button>
              </div>

              <div className="next_back">
                <button className="navbtns">Back</button>
                <button className="navbtns">Next</button>
              </div>
            </div>

            <div className="qnum col-lg-3">
              ---------------------------------
              <p className="quiz-nav">Quiz Navigation</p>
              <div className="qnum-block">
                <span className="q_number">1</span>
                <span className="q_number">1</span>
                <span className="q_number">1</span>
                <span className="q_number">1</span>
                <span className="q_number">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
