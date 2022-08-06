import React from 'react'
import "../CSS/replyform.css"
import { RiSendPlaneFill } from 'react-icons/ri';

export default function replyform() {
  return (
    <div className='replypop'>
        <div style={{display:"flex"}}><p className="replydeta">To :</p>JhoneD@gmail.com</div>
        <div style={{display:"flex"}}><p className="replydeta">Title :</p>movitIntern@gmail.com</div>
        <div style={{display:"flex"}}><p className="replydeta">Question :</p>Special request</div>
        
        <p className="replyfromdesc">Your Message</p>
          <p className="replyformdesc2">
          write your reply message below
          </p>
          <textarea
            className="form-control replyforminput"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        
        <button type="button" className="btn btnreplyform  ">
                  Send
                  <RiSendPlaneFill className='btrepnicons'/>                 
        </button>
        

    </div>
  )
}
