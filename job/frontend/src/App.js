import "../src/CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes ,
  Navigate,
  Outlet,
} from "react-router-dom";

import {  useSelector } from 'react-redux';

import Home from "./components/home";
import Rbuilder from "./components/Rbuilder";
import Login from './components/login';
import Mcq from "./components/mcq";
import McqCat from "./components/mcqcat";
import Leaderbord from "./components/leaderbord";
import EmployerLogin from "./components/employerlogin";
import EmployerReg from "./components/empReg/employerReg";
import EmployerReg2 from "./components/empReg/employerReg2";
import EmployerReg3 from "./components/empReg/employerReg3";
import EmployerDash from "./components/employerdash";
import Cussupport from "./components/customersupport";
import Internquestions from "./components/internquestions-dash";
import Jobposting from "./components/jobposting-dash";
import Applications_dash from "./components/applications-dash";
import Jobdetails from "./components/jobdetails";
import ResumeBuilderForm from "./components/Resumebuilderform"
import Jobsearchpage from "./components/jobsearchpage"
import ResumeForm from "./components/Resumebuilderform"
import EmpApp1 from "./components/employement-app1";
import EmpApp2 from "./components/employment-app2";
import Forum from "./components/forumpage"
import ForumComm from "./components/forum_compage"
import Quizscore from "./components/quizscore-page";
import Employerprofile from "./components/employerprofile";


//dilaxy
import Profile from "./pages/profile";
import Job from "./pages/job";
import Education from "./pages/education";
import User from "./pages/user";
import Application from "./pages/application";
import Table from "./pages/tabel";



function App() {

  const  employerID  = useSelector(state => state.auth.employerid)
  const  userID  = useSelector(state => state.auth.internID)
  return (
    <div>
      <Router>
        <Routes >

        {/* dilaxy */}
        <Route path="/Profile" element={<Profile />} exact />
        <Route path="/job" element={<Job />} exact />
        <Route path="/edu" element={<Education />} exact />
        <Route path="/user" element={<User />} exact />
        <Route path="/app" element={<Application />} exact />
        <Route path="/tab" element={<Table />} exact />

        {/* <Route path="/user" element = {userID? <Outlet /> : <Navigate to="/Login" />}>
           <Route exact path='/user' element={<User/>}/>
        </Route>  */}

        <Route path="/Employer-profile" element={<Employerprofile/>}/>  
        <Route path="/Quiz-score" element={<Quizscore/>}/>  
        <Route path="/Forum-comment" element={<ForumComm/>}/>      
        <Route path="/Forum" element={<Forum/>}/>      
        <Route path="/EmpApp2" element={<EmpApp2/>}/> 
        {/* <Route path="/app" element={<EmpApp1/>}/>  */}
        <Route path="/ResumeForm" element={<ResumeForm/>}/> 
        <Route path="/Job-Search" element={<Jobsearchpage/>}/> 
        <Route path="/ResumeBuilderForm" element={<ResumeBuilderForm/>}/> 
        <Route path="/Job-details" element={<Jobdetails/>}/> 
        <Route path="/ApplicationsDash" element={<Applications_dash/>}/>  
        <Route path="/Jobposting" element={<Jobposting/>}/>  
        <Route path="/Iquestions" element={<Internquestions/>}/>  
        <Route path="/Cus-sup" element={<Cussupport/>}/>   
        <Route path="/Employer-Dash" element={<EmployerDash/>}/>   
        <Route path="/Employer-Reg3" element={<EmployerReg3/>}/>   
        <Route path="/Employer-Reg2" element={<EmployerReg2/>}/> 
        <Route path="/Employer-Reg" element={<EmployerReg/>}/> 
        <Route path="/EmployerLogin" element={<EmployerLogin/>}/> 
        <Route path="/Leader-bord" element={<Leaderbord/>}/> 
        <Route path="/McqCat" element={<McqCat/>}/>    
        <Route path="/Mcq" element={<Mcq/>}/>
        <Route path="/Rbuilder" element={<Rbuilder />}/>

        <Route path="/Login" element = {!userID? <Outlet /> : <Navigate to="/user" />}>
           <Route exact path='/Login' element={<Login/>}/>
        </Route> 

        <Route path="/" element={<Home/>}/>
        
        </Routes >
      </Router>
    </div>
  );
}

export default App;
