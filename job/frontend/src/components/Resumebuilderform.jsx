import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../CSS/Resumebuilderform.css";
import { useState } from "react";
import RBuilderInterface from "./RBuilderInterface/RBuilderInterface";


import { AiFillEdit } from "react-icons/ai";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoIosArrowDropup } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";

export default function Resumebuilderform() {

  return (
    <div className="row">
      <Header />
      <div className="builder">
      <RBuilderInterface />
    </div>
    <Footer />
       </div>
  );
}
