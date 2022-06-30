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

function App() {
  return (
    <div>
      <Router>
        <Routes >       
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
