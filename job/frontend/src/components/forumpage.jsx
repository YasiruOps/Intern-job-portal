import React from "react";
import "../CSS/forumpage.css";
import Header from "./header";
import { useNavigate } from "react-router-dom";

import { GoSearch } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgComment } from "react-icons/cg";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";

import Profpic from "../images/forum_img.png";

export default function Forumpage() {
  const navigate = useNavigate();

  const Redirect = () => {
    navigate("/Forum-comment");
  };

  return (
    <div>
      <Header />
      <div className="jobsearch col-9">
        <p className="searchjobtag2">Forum</p>

        <div className="col-12">
          <div className="searchboxjob2">
            <GoSearch className="searchiconjob" />
            <input type="text" className="searchinjob" placeholder="Search" />
            <button type="button" class="btn btn-light advancedsearhjob">
              Advanced
            </button>
          </div>
        </div>

        <hr className="jobdetailshr" />

        <div className="sorterbar row">
          <div className="sorterbarcontent col-2">
            <AiOutlineStar className="soterbarnewcat-icon" />
            <p className="soterbarnewcat float-right">New</p>
          </div>

          <div className="sorterbarcontent  col-2">
            <BiTrendingUp className="soterbarnewcat-icon" />
            <p className="soterbarnewcat float-right">Top</p>
          </div>

          <div className="sorterbarcontent col-2">
            <AiOutlineClockCircle className="soterbarnewcat-icon" />
            <p className="soterbarnewcat float-right">Old</p>
          </div>

          <div className="sorterbarcontentend endsetterselect col-6">
            <div className="activity-selector-forumpage">
              <select className="minimal-forumpage ">
                <option>Type</option>
                <option>Best match</option>
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>
            </div>
          </div>
        </div>

        {/*  main center part of page*/}
        <div className="forum-main row">
          <div className="forum-left col-xxl-9">
            {/* question card teal*/}
            <div className="qraised row">
              <div className="qupvote col-xl-1">
                <div className="qupvotebar">
                  <BsArrowUpCircle className="countericons hovupvote" />
                  <p className="upcountq">12</p>
                  <BsArrowDownCircle className="countericons hovdownvote" />
                </div>
              </div>

              <div className="picarea col-xl-2">
                <img src={Profpic} className="profilepic" />
              </div>
              <div className="qmid col-xl-9">
                <div className="row">
                  <p className="qmidtitle">Tips for Jumbo.tec interviews </p>
                  <p className="qmidq">All help would be appreciated</p>
                  <p className="qmiddate">
                    12:09pm <span>8/05/2022</span>
                  </p>
                </div>

                <div className="row qintractsect">
                  <div className="col-5 qintractsect-c1" onClick={Redirect}>
                    <CgComment className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">
                      <span>2 </span>comments
                    </p>
                  </div>
                  <div className="col-3  qintractsect-c1">
                    <BsBookmark className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">Save</p>
                  </div>
                  <div className="col-4 qintractsect-c1">
                    <FiShare2 className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">Share</p>
                  </div>
                </div>
              </div>
              </div>

              <div className="qraised row">
              <div className="qupvote col-xl-1">
                <div className="qupvotebar">
                  <BsArrowUpCircle className="countericons hovupvote" />
                  <p className="upcountq">12</p>
                  <BsArrowDownCircle className="countericons hovdownvote" />
                </div>
              </div>

              <div className="picarea col-xl-2">
                <img src={Profpic} className="profilepic" />
              </div>
              <div className="qmid col-xl-9">
                <div className="row">
                  <p className="qmidtitle">Tips for Jumbo.tec interviews </p>
                  <p className="qmidq">All help would be appreciated</p>
                  <p className="qmiddate">
                    12:09pm <span>8/05/2022</span>
                  </p>
                </div>

                <div className="row qintractsect">
                  <div className="col-5 qintractsect-c1">
                    <CgComment className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">
                      <span>2 </span>comments
                    </p>
                  </div>
                  <div className="col-3  qintractsect-c1">
                    <BsBookmark className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">Save</p>
                  </div>
                  <div className="col-4 qintractsect-c1">
                    <FiShare2 className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">Share</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* right side */}
          <div className="forum-right col-xxl-3 d-none d-xxl-block">
            <p className="toqhead">Top questions</p>
            <hr className="dotlinehr" />
            <div className="toppers">
              <div className="lefttoppers">
                <p className="titlelftop">Tips for Jumbo.tec interviews</p>
                <p className="countans">
                  <span>3 </span>answers
                </p>
              </div>
              <div className="rgttoppers">
                <p className="vcount">10</p>
                <p className="vtag">votes</p>
              </div>
            </div>

            <hr className="dotlinehr" />
            <div className="toppers">
              <div className="lefttoppers">
                <p className="titlelftop">Tips for Jumbo.tec interviews</p>
                <p className="countans">
                  <span>3 </span>answers
                </p>
              </div>
              <div className="rgttoppers">
                <p className="vcount">10</p>
                <p className="vtag">votes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
