import React from "react";
import "../CSS/leaderbord.css";
import Header from "../components/header";
import DropdownExampleInlineTwo from "./dropdown";
import Place1 from "../images/Place1.png";
import Place2 from "../images/Place2.png";
import Place3 from "../images/Place3.png";
import Profile88 from "../images/sample_profile.png";
import Footer from "./footer";

import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function leaderbord() {
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


            <div className="score2-cat">
              <TrendingUpIcon className="activityimg"/>
              <div className="vertical-line2"/>
              <select className="minimal2 ">
                <option>Today</option>
                <option>1 week</option>
                <option>2 weeks</option>
                <option>This month</option>
              </select>
            </div>


          </div>
        </div>

        <div className="centermain2 row">
          <div className="leftside2 col-6">
            <div className="score-cat">
              <select className="minimal minimal2">
                <option>Select Category</option>
                <option>CS</option>
                <option>IT</option>
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
                <div className="scoreform">
                  <p style={{ color: "#FFB800" }} className="user_place">
                    01
                  </p>
                  <img src={Place1} alt="" className="userplace_img" />
                  <div className="vertical-line" />
                  <img src={Profile88} alt="" className="userpic" />
                  <p className="username">Areeba Vang</p>
                  <p className="userscore">200</p>
                  <p className="userscore_tag">total points</p>
                  <div className="vertical-line" />
                  <MenuIcon style={{ fontSize: 38 }} className="burger_icon" />
                </div>

                <div className="scoreform">
                  <p style={{ color: "#CCD2E3" }} className="user_place">
                    02
                  </p>
                  <img src={Place2} alt="" className="userplace_img" />
                  <div className="vertical-line" />
                  <img src={Profile88} alt="" className="userpic" />
                  <p className="username">Areeba Vang</p>
                  <p className="userscore">180</p>
                  <p className="userscore_tag">total points</p>
                  <div className="vertical-line" />
                  <MenuIcon style={{ fontSize: 38 }} className="burger_icon" />
                </div>

                <div className="scoreform">
                  <p style={{ color: "#BD5D05" }} className="user_place">
                    03
                  </p>
                  <img src={Place3} alt="" className="userplace_img" />
                  <div className="vertical-line" />
                  <img src={Profile88} alt="" className="userpic" />
                  <p className="username">Areeba Vang</p>
                  <p className="userscore">170</p>
                  <p className="userscore_tag">total points</p>
                  <div className="vertical-line" />
                  <MenuIcon style={{ fontSize: 38 }} className="burger_icon" />
                </div>

                <div className="scoreform">
                  <p className="user_place3">04</p>
                  <div className="vertical-line" />
                  <img src={Profile88} alt="" className="userpic" />
                  <p className="username">Areeba Vang</p>
                  <p className="userscore">170</p>
                  <p className="userscore_tag">total points</p>
                  <div className="vertical-line" />
                  <MenuIcon style={{ fontSize: 38 }} className="burger_icon" />
                </div>

                <div className="scoreform">
                  <p className="user_place3">05</p>
                  <div className="vertical-line" />
                  <img src={Profile88} alt="" className="userpic" />
                  <p className="username">Areeba Vang</p>
                  <p className="userscore">170</p>
                  <p className="userscore_tag">total points</p>
                  <div className="vertical-line" />
                  <MenuIcon style={{ fontSize: 38 }} className="burger_icon" />
                </div>
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
                <p>New season in 21 days</p>
              </div>
              <div className="Lpoints">
                <StarIcon className="Lstar" />
                <p>Earned badges would be kept even after the a season ends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
