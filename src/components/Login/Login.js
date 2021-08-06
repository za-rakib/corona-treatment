import React from "react";
import "./login.css";
import phon from "../../image/phon-2.svg";
import lock from "../../image/lock.svg";
import LoginPart from "./LoginPart";

const Login = () => {
  return (
    <div className="container-fluid  mt-5">
      <div className="row">
        <div className="img col-md-6">
          <img src={phon} alt="" />
          {/* <img src={lock} alt="" /> */}
        </div>
        <div className="login-content d-flex col-md-6">
          <LoginPart />
        </div>
      </div>
    </div>
  );
};

export default Login;
