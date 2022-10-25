import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/editjobform_popup.css";
import { useNavigate } from 'react-router-dom';

export default function Editjobform_popup(props) {

    const navigate = useNavigate();

  const {recordForEdit} = props;

  

  const initialState = {
    question: recordForEdit.question,
    description: recordForEdit.description
  };

  const [fQuestion, setfQuestion] = useState(initialState);

  function ChangeValue(key,value){
    setfQuestion({...fQuestion,[key]:value})
  }

  function EditSubmit(){
    axios
    .put(`http://localhost:8000/ForumQuestionFetch/update/${recordForEdit._id}`,fQuestion)
    .then(() => {
        alert("sucussfully updated");  
        navigate('/Forum');
    })
    .catch((err) => {
    });
  };



  return (
    <div className="addjobform-comp">
      <p className="personaldetailsviepopup">Edit Question </p>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Question</p>
          <input
            type="text"
            name="question"
            onChange={(e)=>ChangeValue(e.target.name, e.target.value)} 
            value={fQuestion.question}
            className="form-control addformtextinput"
          />
        </div>
      </div>

      <p className="replyfromdesc">Description</p>
      <textarea
        className="form-control addjobforminput "
        style={{ backgroundColor: "#F2F8FE", border: "none" }}
        id="exampleFormControlTextarea1"
        rows="3"
        name="description"
        onChange={(e)=>ChangeValue(e.target.name, e.target.value)}
        value={fQuestion.description}
      />

      <div className="addfrormpopupbtn-box">
        <button
          type="button"
          className="btn btn-warning "
          style={{ color: "white", width: "150px", marginTop:"20px" }}
          onClick={EditSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
