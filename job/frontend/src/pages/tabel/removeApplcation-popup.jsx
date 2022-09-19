import React, { useState, useEffect } from "react";
import "./Cssfor_popup.css"
import axios from "axios";

import { IoWarningOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function RemoveApplcation_popup(props) {

    const applicationID = props.recordForEdit;

    const navigate = useNavigate();

    const [isDisabled, setIsDisabled] = useState(true);
    const [checked, setChecked] = useState(false);
  
    const dataSubmit = () => {
      return checked ? setIsDisabled(true) : setIsDisabled(false);
    };
  
    const onCheckboxClick = () => {
      setChecked(!checked);
      return dataSubmit();
    };


    function deleteApp(id){
      axios
      .delete(`http://localhost:8000/application/${id}`)
      .then(() => {
        alert("application removed successfully")
        window.location.reload()
      })
      
      .catch((err) => {
        alert(err);
      });
    }
    

  return (
    <div className='poppy-frame'>
        <div className="row">
          <IoWarningOutline className='warning-icon'/>
        </div>
        <div className="poppy-mid row">

        <hr className="red" />
            <div className="checker col-12">
                    <label className="form-check-label termsundestandbox-label col-10" for="flexCheckDefault">
                    Are you sure you want to remove this application
                    </label>
                    <input
                    onClick={onCheckboxClick}
                    className="form-check-input checkbocremove-pop col-2"
                    type="checkbox"
                    />
            </div>
        <button
            disabled={isDisabled}
            type="button"
            className="btn btn-danger removepopup-btn"
            style={{marginTop:"50px"}}
            onClick={() => deleteApp(applicationID)}
        >
            Remove
        </button>
      </div>
    </div>
  )
}
