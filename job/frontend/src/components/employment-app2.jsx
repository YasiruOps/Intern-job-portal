import React from 'react'
import Header from "./header"
import "../CSS/employment-app2.css"
import Empapp2img from "../images/empapp2.png"
import Aos from 'aos'
import "aos/dist/aos.css"

export default function employment_app2() {
  return (
    <div>
        <Header/>
        <img src={Empapp2img} className="empapp2img img-fluid d-block" alt="Responsive image" />
        <div className="floatheader"  >
            <p className="empappli">Employment Application</p>
            <p className="emplapplowt">Fill the form below accurately indicating your potentials and suitability to job applying for.</p>
        </div>
    </div>
  )
}
