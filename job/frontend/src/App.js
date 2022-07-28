import "../src/CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import {
  BrowserRouter as Router,
  Route,
  Routes ,
  Redirect,
} from "react-router-dom";

import Home from "./components/home";
import Rbuilder from "./components/Rbuilder";
import Login from './components/login'
import Mcq from "./components/mcq"
import McqCat from "./components/mcqcat"
import Leaderbord from "./components/leaderbord";
import EmployerLogin from "./components/employerlogin";
import EmployerReg from "./components/empReg/employerReg";
import EmployerReg2 from "./components/empReg/employerReg2";
import EmployerReg3 from "./components/empReg/employerReg3";

function App() {
  return (
    <div>
      <Router>
        <Routes > 
        <Route path="/Employer-Reg3" element={<EmployerReg3/>}/>   
        <Route path="/Employer-Reg2" element={<EmployerReg2/>}/> 
        <Route path="/Employer-Reg" element={<EmployerReg/>}/> 
        <Route path="/EmployerLogin" element={<EmployerLogin/>}/> 
        <Route path="/Leader-bord" element={<Leaderbord/>}/> 
        <Route path="/McqCat" element={<McqCat/>}/>    
        <Route path="/Mcq" element={<Mcq/>}/>
        <Route path="/Rbuilder" element={<Rbuilder />}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        
        </Routes >
      </Router>
    </div>
  );
}

export default App;
