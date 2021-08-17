import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import AllPatients from "./components/Dashboard/AllPatients/AllPatients";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import Blog from "./components/Home/Blog/Blog/Blog";
import SignUp from "./components/Login/SignUp/SignUp";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/addDoctor">
            <AddDoctor/>
          </Route>
          <Route path="/patients">
            <AllPatients/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
