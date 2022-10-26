import React, { useState, useEffect } from "react";
import "../CSS/leaderbord.css";
import Header from "../components/header";
import DropdownExampleInlineTwo from "./dropdown";
import Place1 from "../images/Place1.png";
import Place2 from "../images/Place2.png";
import Place3 from "../images/Place3.png";
import Profile88 from "../images/sample_profile.png";
import Footer from "./footer";
import axios from "axios";

import { BiMailSend } from "react-icons/bi";
import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CgUserList } from "react-icons/cg";

export default function Leaderbord() {
  const employerID = useSelector((state) => state.auth.employerid);

  const navigate = useNavigate();

  const options = [
    { value: "it", text: "it" },
    { value: "cs", text: "cs" },
    { value: "science", text: "science" },
  ];

  const [type, setType] = useState("it");
  const [leaderboard, setLeaderboard] = useState([]);
  const place = [Place1, Place2, Place3];
  const colors = ["#FFB800", "#CCD2E3", "#BD5D05"];


  const Mailto = ({ email= "", subject = "Subject here", body = "Hello intern,", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;  
    return <a  id="kicker" href={`mailto:${email}${params}`}>{children}</a>;   
  };
  


  function UserProfView(id) {
    navigate(`/search/${id}`);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/userScore/${type}`)
      .then((res) => {
        console.log("resdata",res)
        setLeaderboard(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [type]);

  return (
    <div className="Lout">
      <Header />
      <div className="maincontainer2 row">
        <div className="topbar2 ">
          <div className="topbar2-left">
            <p className="header3">Leaderboard</p>
            <hr className="header-hr" />
          </div>
          <div className="topbar2-rgt">
            {/* <div className="score2-cat">
              <TrendingUpIcon className="activityimg" />
              <div className="vertical-line2" />
              <select className="minimal2 ">
                <option>Today</option>
                <option>1 week</option>
                <option>2 weeks</option>
                <option>This month</option>
              </select>
            </div> */}
          </div>
        </div>

        <div className="centermain2 row">
          <div className="leftside2 col-6">
            <div className="score-cat">
              <select
                className="minimal minimal2"
                Value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="rightside2 col-6">
            <div className="season-box">
              <p className="season">May/June</p>
              <p className="season-tag">Season</p>
            </div>
          </div>
          <hr className="topcenter-hr" />

          <div className="scorebord row">
            <div className="scorebord-left col-xl-8">
              <div className="Lscroll">
                {leaderboard.map((item, i) => {
                  {
             
                  }
                  return (
                    <div className="scoreform">
                      <p
                        style={{ color: colors[i] ?? "black" }}
                        className="user_place"
                      >
                        {i + 1}
                      </p>
                      {i < 3 && (
                        <img src={place[i]} alt="" className="userplace_img" />
                      )}
                      <div className="vertical-line" />
                      {console.log("item", item)}
                      <img src={item.image} alt="failed to load" className="userpic" style={{borderRadius:"100%"}}/>
                      <p className="username">{item.userName}</p>
                      <p className="userscore">{item.sum}</p>
                      <p className="userscore_tag">total points</p>                      
                     
                      {employerID?
                     
                      <div className="flexy_wrapper">
                        <div className="vertical-line" />
                      
                        <div class="img__wrap">                     
                          <Mailto email={item.email}>
                            <BiMailSend
                              style={{ fontSize: 38 }}
                              className="burger_icon"                             
                            />
                            <p class="img__description">Contact intern</p>
                          </Mailto>
                        </div>
                        <div class="img__wrap">
                          <CgUserList
                            style={{ fontSize: 38 }}
                            className="burger_icon"
                            onClick={() => UserProfView(item.userID)}
                          />
                          <p class="img__description">View user Profile</p>
                        </div>
                      </div>:<div/>
                      }
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="scorebord-rgt col-xl-4 d-none d-xl-block">
              <div className="Lpoints">
                <StarIcon className="Lstar" />
                <p>Play games to be placed on the leaderboards</p>
              </div>
              <div className="Lpoints">
                <StarIcon className="Lstar" />
                <p>Scores are reset every season top 3 players earn badges</p>
              </div>
              <div className="Lpoints">
                <StarIcon className="Lstar" />
                <p>New season every month</p>
              </div>
              <div className="Lpoints">
                <StarIcon className="Lstar" />
                <p>Earned badges would be kept even after the a season ends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
