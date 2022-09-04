import "./style.css";
import { useState } from "react";
import Experience from "../../components/experience/Experience";
import PopUp from "../../components/Popup/index";
import Header from "../../components/header"

export default function Job() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="profile">
      <Header/>
      {visible && <PopUp setVisible={setVisible} />}
      <div className="profile_top">
        <div className="profile_container">
          <h5>* indicates required</h5> <br />
          <div className="login">
            <h1>Experience</h1>
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}
