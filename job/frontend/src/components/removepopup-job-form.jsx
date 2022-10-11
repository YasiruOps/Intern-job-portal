import React, { useState, useEffect } from "react";
import "../CSS/removepopup-form.css";
import axios from "axios";

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

  function DeleteJob(recordForEdit){
    axios
    .delete(`http://localhost:8000/jobs/delete/${recordForEdit}`)
    .then(() => {
      alert("job post removed")
    })
    
    .catch((err) => {
      alert(err);
    });
  }

  return (
    <div className="removepopup-form">
      <p className="removepoints" style={{ marginBottom: "0px" }}>
        <span style={{ color: "red" }}>*</span>All applicants applied to this
        post would be notified
      </p>
      <p className="removepoints">
        <span style={{ color: "red" }}>*</span>Once removed you wornt be able to
        recover this post
      </p>

      <hr
        className="dividerpopup"
        style={{ marginBottom: "20px", width: "100%" }}
      />

      <div className="sureremovecheckboxcontainer">
        <label
          className="form-check-label termsundestandbox-label"
          for="flexCheckDefault"
        >
          Are you sure you want to remove this job posting 
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
        onClick={DeleteJob}
      >
        Remove
      </button>
    </div>
  );
}
