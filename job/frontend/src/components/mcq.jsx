import React, { useState } from "react";
import "../CSS/Mcq.css";
import Header from "../components/header";
import FlagIcon from "@mui/icons-material/Flag";

const symbols = ["A", "B", "C", "D"];

const example = {
  id:1,
  question: "MS-Word is an example of _____",
  options: [
    "An operating system",
    "A processing device",
    "Application software",
    "An input device",
  ],
  answer:3
};

const example1 = {
  question: "is an example of _____",
  options: [
    "An operating system",
    "A processing device",
    "Application software",
    "An input device",
  ],
  answer:3
};

const example2 = {
  question: " of _____",
  options: [
    "An operating system",
    "A processing device",
    "Application software",
    "An input device",
  ],
  answer:3
};

export default function Mcq() {
  const [questions, setquestion] = useState([example,example1,example2]);
  const [answer,setanswer] = useState({});
  const [number,setnumber] = useState(0);


  function back(){
    if (number>=1){
    setnumber(
      number-1
    )
    console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssss",number)
  }
  }

  function front(){
    if (number<questions.length-1){
    setnumber(
      number+1
    )
    console.log("next",number)
    
  }
  }

  return (
    <div>

{console.log("number",number)}

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

        <h4 className="q-number">Question {number+1}</h4>

        <div className="mid-layer">
          <div className="row">
            <div className="leftside col-lg-9">
              {/*sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
              
                  <div className="mcq">
                    <p className="question">{questions[number].question}</p>

                    {questions[number].options.map((option, index) => {
                      return (
                      <div className="choices">
                        <p className="options">{symbols[index]}</p>
                        <div className="answer">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            {option}
                          </label>
                          <br />
                        </div>
                      </div>
                      )
                    })}

                    <button type="button" className="flag_btn">
                      Flag question
                      <span className="btn_gap">
                        <FlagIcon />
                      </span>
                    </button>
                  </div>
                
            
              {/*sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}

              <div className="next_back">
                <button className="navbtns" onClick={back}>Back</button>
                <button className="navbtns" onClick={front}>Next</button>
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
