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
  id:2,
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
  id:3,
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

function navigation(index){
  setnumber(index);

}


  function submit(){

    let correct=0;

    questions.forEach(question=>{
      const id=question.id
      const ans = question.answer
      if (answer[id] && answer[id]===ans){
        correct++
      } 
    })
    console.log("correct",correct)
  }

function select(ans){
  setanswer({...answer,...ans})
}

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

{console.log("number",number,answer)}

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
                            name={number}
                        
                            autocomplete="off"
                            onClick={()=>select({
                              [questions[number].id]:index+1
                            })}
                          />
                          <label>
                            {option}
                          </label>
                          <br/>
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
                {number!=questions.length-1?<button className="navbtns" onClick={front}>Next</button>:<button className="navbtns" onClick={submit}>Submit</button>}
               { console.log("number adn question",number,questions.length-1)}
              </div>
            </div>

            <div className="qnum col-lg-3">
              ---------------------------------
              <p className="quiz-nav">Quiz Navigation</p>

              <div className="qnum-block">
                {questions.map((item,index)=>{
                  return(<span className="q_number" onClick={()=>navigation(index)}>{index+1}</span>)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
