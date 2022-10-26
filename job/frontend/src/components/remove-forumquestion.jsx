import axios from "axios";
import React, { useState, useEffect } from "react";
import "../CSS/removepopup-form.css";
import { useNavigate } from 'react-router-dom';

export default function Removepopup_form(props) {

  const { recordForEdit } = props;

  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const dataSubmit = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return dataSubmit();
  };

  const navigate = useNavigate();

  function removeQuestion(id){
    axios
    .delete(`http://localhost:8000/employerContact/${id}`)
    .then(() => {
      const updated = props?.iquestion?.filter((item)=>{
        console.log("reced", item)
        if (item?._id != props?.recordForEdit){
          return item;
        }           
      })
      props.setIquestion(updated)
      props.setOpenPopup2(false)
     
    })

    .catch((err) => {
      alert(err);
    });
  }

  return (
    <div className="removepopup-form">

      <div className="sureremovecheckboxcontainer">
        <label
          className="form-check-label termsundestandbox-label"
          for="flexCheckDefault"
        >
          Are you sure you want to remove this
        </label>
        <input
          onClick={onCheckboxClick}
          className="form-check-input checkbocremove-pop"
          type="checkbox"
        />
      </div>

      <button
        disabled={isDisabled}
        type="button"
        className="btn btn-danger removepopup-btn"
        onClick={() => removeQuestion(recordForEdit)}
      >
        Remove
      </button>
    </div>
  );
}
