import React from "react";
import Timer from "./Timer";
import Mcq from "./mcq";
import "../CSS/Mcq.css";
import Header from "../components/header";

export default function McqTimerPage() {
  return (
    <div>
      <Header />
      <Timer />
      <Mcq />
    </div>
  );
}
