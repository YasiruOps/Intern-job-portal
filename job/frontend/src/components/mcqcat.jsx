import "../CSS/mcqcat.css";
import Header from "../components/header";
import "../JS/mcqcat";
import $ from "jquery";
import Quiz_img from "../images/quiz_option1.png";
import "@fontsource/poppins";
import Trophypic from "../images/trophy.jpg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  const startQuiz = (name) => {
    console.log("kkkkkkkkk", selectType,name)
    navigate("/Mcq",{state:{selectType,name}});
  };

  const [type, setType] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [selectType, setSelectType] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/category/type")
      .then((res) => {
        setType(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  useEffect(() => {
    if (selectType) {
      axios
        .get(`http://localhost:8000/category/${selectType}/quiz`)
        .then((res) => {
          setQuiz(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [selectType]);

  return (
    <div>
      <Header />
      <div className="outer-main row">
        <div className="mainleft col-lg-8">
          <div className="headbox">
            <p className="quizhead">Skills Quiz</p>
            <p className="tag1">
              Test your skill by answering 15 MCQ question from any of the
              category you wish to attempt .Get more than 35% to earn badges.
            </p>
          </div>

          <div className="catbox row">
            <p>Select a category area where you'r are skilled at</p>
            <div className="category-selector row">
              <select
                onClick={(e) => setSelectType(e.target.value)}
                className="minimal "
              >
                <option value={""}>Select Category</option>
                {type.map((type) => (
                  <option value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="quiz-cards">
            {quiz.map((quiz) => (
              <div className="card mcq_card">
                <div className="row no-gutters">
                  <div className="card-left">
                    <img
                      src={Quiz_img}
                      className="quiz_img"
                      alt="Responsive image"
                    />
                  </div>

                  <div className="col">
                    <div className="card-body">
                      <h5 className="card-title">{quiz.name}</h5>
                      <p className="card-text">{quiz.description}</p>
                      <div
                        onClick={()=>startQuiz(quiz.name)}
                        className="start-quiz-btn btn-primary"
                      >
                        Start Game
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-1"></div>

        {/* right side */}
        
      </div>
    </div>
  );
}
