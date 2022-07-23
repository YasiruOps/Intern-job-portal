import React from "react";
import "../CSS/mcqcat.css";
import Header from "../components/header";
import "../JS/mcqcat";
import $ from "jquery";
import Quiz_img from "../images/quiz_option1.png";
import "@fontsource/poppins";

export default function () {
  return (
    <div>
      <Header />
      <div className="outer-main row">
        <div className="mainleft col-lg-6">
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
              <select className="minimal ">
                <option>Select Category</option>
                <option>Computer science fundamentals</option>
                <option>Netwoking</option>
                <option>Cyber Security</option>
                <option>Cyber Security</option>
                <option>Cyber Security</option>
                <option>Cyber Security</option>
                <option>Cyber Security</option>
              </select>
            </div>
          </div>

          <div className="quiz-cards">

          <div className="card">
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
                    <h5 className="card-title">Quiz Name</h5>
                    <p className="card-text">
                        This Quiz consist of 10 questions. Timer starts as soon as you start quiz and you have 10minutes to complete this quiz.
                    </p>
                    <a href="#" className="start-quiz-btn btn-primary">
                      Start Game
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
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
                    <h5 className="card-title">Quiz Name</h5>
                    <p className="card-text">
                        This Quiz consist of 10 questions. Timer starts as soon as you start quiz and you have 10minutes to complete this quiz.
                    </p>
                    <a href="#" className="start-quiz-btn btn-primary">
                      Start Game
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <div className="col-lg-1"></div>

        {/* right side */}
        <div className="mainrgt col-lg-4">nice</div>
      </div>
    </div>
  );
}
