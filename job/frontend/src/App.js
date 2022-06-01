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

function App() {
  return (
    <div>
      <Router>
        <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/Rbuilder" element={<Rbuilder />}/>
        </Routes >
      </Router>
    </div>
  );
}

export default App;
