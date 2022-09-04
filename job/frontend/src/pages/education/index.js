import "./style.css";
import { useState } from "react";
import Educations from "../../components/education/Education";
import PopUp from "../../components/Popup/index";
import Header from "../../components/header"

export default function Education() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="profile">
      <Header/>
      {visible && <PopUp setVisible={setVisible} edu={true} />}
      <div className="profile_top">
        <div className="profile_container">
          <h5>* indicates required</h5> <br />
          <div className="login">
            <h1>Education</h1>
            <Educations />
          </div>
        </div>
      </div>
    </div>
  );
}
