import React, { useState, useEffect } from "react";
import "../CSS/Mcq.css";

import FlagIcon from "@mui/icons-material/Flag";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setmcqstatus, setmcqanswer, restmcqs, setmcq} from "../actions/mcqActions";
// import Timer from "./Timer"

const symbols = ["A", "B", "C", "D"];

export default function Mcq() {

  const answer = useSelector((state) => state.mcq.answer);
  const qstate = useSelector((state) => state.mcq.qstate);

  const dispatch = useDispatch();
  

  const navigate = useNavigate();

  const [questions, setquestion] = useState([]);
  // const [answer, setanswer] = useState({});
  const [number, setnumber] = useState(0);

  const location = useLocation();

  // const [qstate, setQstate] = useState({})

function countdown(){
  //  setMytime((prevTime) => prevTime + 1);
}

  useEffect(() => {
  
    axios
      .get(
        `http://localhost:8000/mcq?type=${location.state.selectType}&name=${location.state.name}`
      )
      .then((res) => {
        setquestion(res.data);
        dispatch(setmcq(res.data))
        // const myInterval = setInterval(countdown,5000);
        // // clear out the interval using the id when unmounting the component
        // return () => clearInterval(myInterval);
      })
      .catch((err) => {
        alert(err.message);
      });
      return()=>{
        dispatch(restmcqs())
      }
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
  }

  function flagQuestion(){
    const state = {...qstate}
    // setQstate({...qstate, [number]: "flag"})
    if(qstate[number]=="flag"){
      delete state[number]
      dispatch(setmcqstatus(state));
    }else{
      dispatch(setmcqstatus({...qstate, [number]: "flag"}));
    }
    
  }

  function select(ans) {
    // setanswer({ ...answer, ...ans });
    // setQstate({...qstate, [number]: "select"})
    dispatch(setmcqstatus({...qstate, [number]: "select"}));
    dispatch(setmcqanswer({ ...answer, ...ans }));
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
     
      <div className="outer-container">

        {questions.length > 0 ? (
          <div>
            <h4 className="q-number">Question {number + 1}</h4>

            <div className="mid-layer">
              <div className="row">
                <div className="leftside col-lg-9">
               

                  <div className="mcq">
                    <p className="question">{questions[number].question}</p>
                    
                      {questions[number].options.map((option, index) => {
                        const temp = answer[questions[number]._id] == (index+1)
                        
                        return (
                          <div className="choices">
                            <p className="options">{symbols[index]}</p>
                            <div className="answer">
                              <input checked={temp} className="form-check-input" type="radio" name={number} autocomplete="off" onClick={() =>select({[questions[number]._id]: index + 1,})}/>
                              <label className="label-set">{option}</label>
                              <br />
                            </div>
                          </div>
                        );
                      })}
                    
                    <button type="button" className="flag_btn" onClick={flagQuestion}>
                      Flag question
                      <span className="btn_gap">
                        <FlagIcon />
                      </span>
                    </button>
                  </div>

                 

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
                   
                  </div>
                </div>

                <div className="qnum col-lg-3">
                  ---------------------------------
                  <p className="quiz-nav">Quiz Navigation</p>
                  <div className="qnum-block">
                    {questions.map((item, index) => {    
                      let status = null;        
                      if(qstate[index]=="select"){
                        status={backgroundColor:"green", color:"white"}
                      }
                      else if(qstate[index]=="flag")
                      {
                        status={backgroundColor:"red", color:"white"}
                      }
                      return (
                        <span className="q_number qstatus" 
                        onClick={() => navigation(index)}                         
                        style={status}
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
