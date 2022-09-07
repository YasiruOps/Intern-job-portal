import "./style.css";
import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import RegisterForm from "../../components/login/RegisterForm";
import Header from "../../components/header"

export default function Table() {
  return (
    <div className="profile">
      <Header/>
      <div className="profile_top">
        <div className="profile_container">
          <Cover />
          <ProfielPictureInfos />
        </div>{" "}
        <br />
        <div className="login">
          <div className="profile_body">
            <div className="login">
              <h2 style={{ margin: 10, textDecorationLine: "underline" }}>
                Application sent
              </h2>
              <div style={{ margin: 20 }}>
                <table className="tabel1">
                  <tr className="tr1">
                    <th className="th1">Job title</th>
                    <th className="th1">Employer</th>
                    <th className="th1">Status</th>
                    <th className="th1">Date</th>
                    <th className="th1">Actions</th>
                  </tr>
                  <tr className="tr1">
                    <td className="td1">
                      <label>Juniour Developer</label>
                      <br />
                      <label style={{ fontSize: 10 }}>
                        Kaluthara, Panadura
                      </label>
                    </td>
                    <td className="td1"> Rocket sci.tech</td>
                    <td className="td1">Pending</td>
                    <td className="td1">03/05/2022</td>
                    <td className="td1">
                      <label style={{ backgroundColor: "red", color: "white" }}>
                        Remove
                      </label>
                    </td>
                  </tr>
                  <tr className="tr1">
                    <td className="td1">
                      <label>Juniour Developer</label>
                      <br />
                      <label style={{ fontSize: 10 }}>
                        Kaluthara, Panadura
                      </label>
                    </td>
                    <td className="td1">Rocket sci.tech</td>
                    <td className="td1">Pending</td>
                    <td className="td1">03/05/2022</td>
                    <td className="td1">
                      <label style={{ backgroundColor: "red", color: "white" }}>
                        Remove
                      </label>
                    </td>
                  </tr>

                </table>
              </div>
            </div>
          </div>{" "}
          <br />
        </div>
      </div>
    </div>
  );
}
