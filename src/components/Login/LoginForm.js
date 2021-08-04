import React from 'react';
import avatar from "../../image/avatar-2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import './LoginForm.css'
const LoginForm = () => {
    return (
        <div className='ms-5' >
        <form action="index.html">
          <img src={avatar} alt="" />
          <h2 className="title">Welcome</h2>
          <div className="input-div one">
            <div className="i">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
            </div>
            <div className="div">
              <h5>Username</h5>
              <input type="text" className="input"></input>
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <i className="fas fa-lock">
                <FontAwesomeIcon icon={faLock} />
              </i>
            </div>
            <div className="div">
              <h5>Password</h5>
              <input type="password" className="input"></input>
            </div>
          </div>
          <a href="#">Forgot Password?</a>
          <input type="submit" className="btn" value="Login"></input>
        </form>
      </div>
    );
};

export default LoginForm;