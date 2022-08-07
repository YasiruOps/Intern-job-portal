import React from "react";
import Header from "./header";
import "../CSS/jobdetails.css";
import { GoSearch } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

import { MdLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCalendar2Check } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineGift } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

export default function jobdetails() {
  return (
    <div className="">
      <Header />

      <div className="jobdetailmain col-8">
        <div className="topsector">
          <p className="searchjobtag">Search jobs</p>

          <div className="col-12">
            <div className="searchboxjob">
              <GoSearch className="searchiconjob" />
              <input type="text" className="searchinjob" placeholder="Search" />
              <button type="button" class="btn btn-light advancedsearhjob">
                Advanced
              </button>
            </div>
          </div>
          <hr className="jobdetailshr" />
        </div>

        <div className="midsectorjob">
          <div className="jobtitle-line">
            <p className="jobtitle">Junior Software developer</p>
            <MdVerified className="verifiedsign" />
          </div>

          <div className="jobtitle-line2">
            <p className="postedon">Posted on</p>
            <p className="postdate">May 1, 2022</p>
            <p className="postedon">by</p>
            <p className="company">Rocket science .tec</p>
            <AiOutlineLink className="linkicon" />
          </div>
        </div>

        <div className="jobinfobox">
          <div className="jobdetailssimp">
            <p>Job Details</p>
          </div>

          <div className="row gapsetter">
            <div className="jobinfoboxinterior col-lg-4">
              <div className="detailitem">
                <MdLocationOn className="detailicon" />
                <p className="detaillevel">Malabe</p>
              </div>
            </div>

            <div className="jobinfoboxinterior col-lg-4">
              <div className="detailitem">
                <AiOutlineClockCircle className="detailicon" />
                <p className="detaillevel">9am to 4pm</p>
              </div>
            </div>

            <div className="jobinfoboxinterior col-lg-4">
              <div className="detailitem">
                <MdPeopleAlt className="detailicon" />
                <p className="detaillevel">7 vacancies</p>
              </div>
            </div>
          </div>

          <div className="row gapsetter">
            <div className="jobinfoboxinterior col-lg-4">
              <div className="detailitem">
                <BsCurrencyDollar className="detailicon" />
                <p className="detaillevel">Negotiable</p>
              </div>
            </div>

            <div className="jobinfoboxinterior col-lg-4">
              <div className="detailitem">
                <BsCalendar2Check className="detailicon" />
                <p className="detaillevel">Start as soon as possible</p>
              </div>
            </div>

            <div className="jobinfoboxinterior col-lg-4">
              <div className="detailitem">
                <BsCheckCircle className="detailicon" />
                <p className="detaillevel">verified</p>
              </div>
            </div>
          </div>

          <div className="row gapsetter">
            <div className="jobinfoboxinterior col-lg-4">
              <div className="detailitem">
                <AiOutlineFileText className="detailicon" />
                <p className="detaillevel">Full time or part time</p>
              </div>
            </div>

            <div className="jobinfoboxinterior col-lg-4">
              <div className="detailitem">
                <AiOutlineGift className="detailicon" />
                <p className="detaillevel">Benefits available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="requirments">
          <div className="row">
            <div className="col-xl-8">
              <p className="jobreqtag">Job Requirements</p>

              <div className="detadetails">
                <p className="headerlightjob">Education</p>
                <p className="reqdetails">
                  Secondary (high) school graduation certificate or equivalent
                  experience
                </p>
              </div>

              <div className="detadetails">
                <p className="headerlightjob">Experience</p>
                <p className="reqdetails">5 years or more</p>
              </div>

              <div className="detadetails">
                <p className="headerlightjob">
                  Business Equipment and Computer Applications
                </p>
                <p className="reqdetails">MS Excel; MS Word</p>
              </div>

              <div className="detadetails">
                <p className="headerlightjob">Additional Skills</p>
                <p className="reqdetails">
                  Clean and maintain work space; Record production information
                </p>
              </div>

              <div className="detadetails">
                <p className="headerlightjob">Experience</p>
                <p className="reqdetails">5 years or more</p>
              </div>

              <div className="detadetails">
                <p className="headerlightjob2">Benefits</p>
                <p className="headerlightjob">Health benefits</p>
                <p className="reqdetails">Health care plan; Dental plan</p>
              </div>

              <div className="detadetails">
                <p className="headerlightjob">Financial benefits</p>
                <p className="reqdetails">Bonus</p>
              </div>

              <div className="detadetails">
                <p className="headerlightjob2">Other</p>
                <p className="headerlightjob">Work Setting</p>
                <p className="reqdetails">
                  Paints and varnish processing plant
                </p>
              </div>

              <div className="butnspace">
                <button type="button" class="jobdetailsbtns4 btn btn-primary">
                  Learn More
                </button>
                <button type="button" class="jobdetailsbtns4 btn btn-success">
                  Apply
                </button>
              </div>
            </div>

            <div className="col-xl-4 d-none d-xl-block">
              <div className="righydiv">
                <div className="rightsidejob row">
                  <p className="smalltag123 col-8">Add to wishlist</p>
                  <AiFillHeart className="righydivcions1 col-4" />
                </div>
                <hr className="righydivhr" />
                <div className="rightsidejob row">
                  <p className="smalltag123 col-8">E-mail</p>
                  <MdEmail className="righydivcions2 col-4" />
                </div>
                <hr className="righydivhr" />
                <div className="rightsidejob row">
                  <p className="smalltag123 col-8">Mark applied</p>
                  <FiCheckCircle className="righydivcions3 col-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
