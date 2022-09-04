import React, { useState, useEffect } from "react";
import "../CSS/Mcq.css";
import Header from "../components/header";
import FlagIcon from "@mui/icons-material/Flag";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const symbols = ["A", "B", "C", "D"];

export default function Mcq() {



  const navigate = useNavigate();

  const [questions, setquestion] = useState([]);
  const [answer, setanswer] = useState({});
  const [number, setnumber] = useState(0);
  const [time, setTime] = useState(120);
  const location = useLocation();

function countdown(){
  console.log("hello")  
  //  setMytime((prevTime) => prevTime + 1);
}

  console.log("tttttt",time)
  useEffect(() => {
    console.log("lllllllllllllllll")
    axios
      .get(
        `http://localhost:8000/mcq?type=${location.state.selectType}&name=${location.state.name}`
      )
      .then((res) => {
        setquestion(res.data);
        // const myInterval = setInterval(countdown,5000);
        // // clear out the interval using the id when unmounting the component
        // return () => clearInterval(myInterval);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function navigation(index) {
    setnumber(index);
  }

  function submit() {
    let correct = 0;

    questions.forEach((question) => {
      const id = question._id;
      const ans = question.answer;
      if (answer[id] && answer[id] === ans) {
        correct++;
      }
    });

    navigate("/Quiz-score",{state:{correct,amount:questions.length,name:location.state.name, type:location.state.selectType}});
    console.log("correct", correct);
  }

  function select(ans) {
    setanswer({ ...answer, ...ans });
  }

  function back() {
    if (number >= 1) {
      setnumber(number - 1);
    }
  }

  function front() {
    if (number < questions.length - 1) {
      setnumber(number + 1);
    }
  }

  return (
    <div>
      {console.log("number", number, answer)}
      {console.log("kkkkkkkkk")}  
      <Header />
      <div className="outer-container">
        <div className="top-layer">
          <div>
            <p className="quiz-name">{location.state.name}</p>
          </div>
          <div className="time-box">
            <div className="row">
              <p className="time-tag">Time Left</p>
            </div>
            <div className="row">
              <p className="time">ss</p>
            </div>
          </div>
        </div>

        {questions.length > 0 ? (
          <div>
            <h4 className="q-number">Question {number + 1}</h4>

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
                            <input className="form-check-input" type="radio" name={number} autocomplete="off" onClick={() =>select({[questions[number]._id]: index + 1,})}/>
                            <label className="label-set">{option}</label>
                            <br />
                          </div>
                        </div>
                      );
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
                    <button className="navbtns" onClick={back}>
                      Back
                    </button>
                    {number != questions.length - 1 ? (
                      <button className="navbtns" onClick={front}>
                        Next
                      </button>
                    ) : (
                      <button className="navbtns" onClick={submit}>
                        Submit
                      </button>
                    )}
                    {console.log(
                      "number adn question",
                      number,
                      questions.length - 1
                    )}
                  </div>
                </div>

                <div className="qnum col-lg-3">
                  ---------------------------------
                  <p className="quiz-nav">Quiz Navigation</p>
                  <div className="qnum-block">
                    {questions.map((item, index) => {
                      return (
                        <span
                          className="q_number"
                          onClick={() => navigation(index)}
                        >
                          {index + 1}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Sorry empty quiz</h1>
          </div>
        )}
      </div>
    </div>
  );
}
