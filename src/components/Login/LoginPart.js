import React, { useContext, useState } from "react";
import avatar from "../../image/avatar-2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "./LoginPart.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import SocialAuth from "./SocialAuth";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const LoginPart = () => {

  const [loggedInUser, setLoggedInUser] =useContext(UserContext)
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        const signedOutUser = {
          isSigned: false,
          name: "",
          email: "",
          photo: "",
          password: "",
        };
        setUser(signedOutUser);
      })
      .catch((error) => {});
  };

  //email and password authentication
  const onSubmit = (event) => {
    // event.preventDefault();
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log(res);
          const {email,error } = res.user;
         let newUserInfo = {...user};
         console.log(newUserInfo);
          newUserInfo = {
            isSigned: true,
            email: email,
            success: true,
            error: error,
          };
          console.log(newUserInfo);
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    // event.target.reset();
  };

  //manage input
  const handleInput = (event) => {
    console.log(event.target.name,event.target.value);
    let isFormValid = true;
    if (event.target.name === "email") {
      isFormValid =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          event.target.value
        );
    }
    if (event.target.name === "password") {
      const isValidPassword = event.target.value.length>6;
      console.log(isValidPassword);
        const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isValidPassword && passwordHasNumber ;
    }
    if (isFormValid) {
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
       setUser(newUserInfo);
    }
  };

  return (
    <div className="d-flex flex-column">
      <div className="ms-5 loginForm  text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img className=" text-center" src={avatar} alt="" />
          <h2 className="title">Welcome</h2>
          <div className="input-div one">
            <div className="i">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
            </div>
            <div className="div">
              <input
                type="text"
                name="email"
                placeholder="Email"
                onBlur={handleInput}
                className="input"
              />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <i className="fas fa-lock">
                <FontAwesomeIcon icon={faLock} />
              </i>
            </div>
            <div className="div">
              {/* <h5>Password</h5> */}
              <input
                type="password"
                placeholder="Password"
                name="password"
                onBlur={handleInput}
                className="input"
                // value={user.password}
              />
            </div>
          </div>
          <div className="forget">
            <a href="#">
              Forgot Password?
            </a>
          </div>
          {user.isSigned ? (
            <button
              style={{ backgroundColor: "#b44444" }}
              onClick={signOut}
              className="btn"
            >
              Logout
            </button>
          ) : (
            <button type="submit" className="btn" required>
              Login
            </button>
          )}
        </form>
        <small>
          <p style={{ color: "red" }}>{user.error}</p>
        </small>
        {user.success && (
          <p style={{ color: "green" }}>User login successfully</p>
        )}
      </div>
      {/* social icon  */}
      <SocialAuth setLoggedInUser={setLoggedInUser} user={user} setUser={setUser}></SocialAuth>
    </div>
  );
};

export default LoginPart;
