import React, { useState, useEffect } from "react";
import "../CSS/quizscore-page.css";
import Header from "./header";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Quizscorepage() {
  
  const navigate = useNavigate();
  const userID = useSelector((state) => state.auth.internID);
  const answer = useSelector((state) => state.mcq.answer);
  const questions = useSelector((state)=> state.mcq.questions);
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [corrans, setCorrans] = useState(0)

  useEffect(() => {
      axios
      .get(`http://localhost:8000/api/users/getProfile/${userID}`)
      .then((res) => {
        setUsername(res?.data?.first_name); 
        setEmail(res?.data?.email);   
        setImage(res?.data?.picture)
      })
      .catch((err) => {
        alert(err);
      });

      let correct = 0;

      questions.forEach((question) => {
        const id = question._id;
        const ans = question.answer;
        if (answer[id] && answer[id] === ans) {
          correct++;
        }
      } );
      setCorrans(correct)
  }, []);

  function submit(){

    

    const score = Math.round((corrans/location.state.amount)*100)



    const payload={
      quiz:location.state.name,
      userID,
      type:location.state.type,
      score,
      email:email,
      userName:username,
      image,
    }
    

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

      <Header />
      <p className="testnametag">{location.state.name}</p>
      <hr className="testtag-hr" />

      <p className="testrestag">Test Results</p>
      <hr className="testres" />

      <div className="scorebord-frame">
        <p className="scoretag">Your Score</p>
        <div className="d-flex justify-content-center">
          <p className="scorelines">{corrans}</p>
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
