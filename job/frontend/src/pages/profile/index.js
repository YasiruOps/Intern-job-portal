import "./style.css";
import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import RegisterForm from "../../components/login/RegisterForm";
import Header from "../../components/header"

export default function Profile() {
  return (
    <div className="profile">
      <Header/>
      <div className="profile_top">
        <div className="profile_container">
          <h5>* indicates required</h5> <br />
          <Cover />
          <ProfielPictureInfos />
        </div>
        <div className="login">
          <RegisterForm setVisible={true} />
        </div>
      </div>
    </div>
  );
}
