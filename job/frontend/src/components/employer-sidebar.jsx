//import useState hook to create menu collapse state
import React, { useState } from "react";
import "../CSS/employer-sidebar.css"
import "../SCSS/employer-sidebar.sass"
import { logout } from "../actions/authActions";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,  
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import {RiQuestionMark} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";

const Header = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function Logout(){
    dispatch(logout());
    navigate('/');
  }
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)


    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "OlA" : "MENU"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <AiOutlineMenu/>
              ) : (
                <AiOutlineMenu/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">            
              <MenuItem className="fa grow" icon={<FiHome />}><Link style={{color:"white", opacity:"100%"}} to="/Employer-Dash">Home </Link></MenuItem>             
              <MenuItem className="fa grow" icon={<AiOutlineFileProtect />}><Link style={{color:"white", opacity:"100%"}} to="/Jobposting">Job Posting</Link></MenuItem>
              <MenuItem  className="fa grow" icon={<AiOutlineFileText />}><Link style={{color:"white", opacity:"100%"}} to="/ApplicationsDash">Applications</Link></MenuItem>         
              <MenuItem className="fa grow" icon={<RiQuestionMark />}><Link style={{color:"white", opacity:"100%"}} to="/Iquestions">Inter Q's</Link></MenuItem>       
              <MenuItem className="fa grow" icon={<FiUser />}><Link style={{color:"white", opacity:"100%"}} to="/Employer-profile">Profile</Link></MenuItem>       
              <MenuItem className="fa grow" icon={<BiCog />}>Settings</MenuItem>             
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={Logout}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>

     
      </div>
    </>
  );
};

export default Header;
