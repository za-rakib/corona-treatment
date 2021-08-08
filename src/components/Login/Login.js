import React from "react";
import "./login.css";
import dock from "../../image/doct-svg.svg";
import LoginPart from "./LoginPart";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="img offset-md-1 col-md-4">
            <img src={dock} alt="" />
            {/* <img src={lock} alt="" /> */}
          </div>
          <div className="login-content offset-md-2  d-flex col-md-5">
            <LoginPart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
