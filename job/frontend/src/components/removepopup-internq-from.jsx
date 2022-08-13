import React, { useState, useEffect } from "react";
import "../CSS/removepopup-form.css";

export default function Removepopup_form() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const dataSubmit = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return dataSubmit();
  };

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
      >
        Remove
      </button>
    </div>
  );
}
