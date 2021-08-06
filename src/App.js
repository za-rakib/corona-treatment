import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import  Login  from "./components/Login/Login";
// import Navbar from "./components/Shared/Navbar/Navbar";
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/home">
          <Home />
        </Route>
        <Route  path="/appointment">
         <Appointment/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/login">
         <Login/>
        </Route>
        <Route path="/dashboard"></Route>
      </Switch>
    </Router>
  );
}

export default App;
