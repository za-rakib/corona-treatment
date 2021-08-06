import React, { useState } from "react";
import avatar from "../../image/avatar-2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./LoginPart.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const LoginPart = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
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

  //google authentication
  const handleGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSigned: true,
          success: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        // console.log(displayName, email, photoURL);
        var credential = result.credential;
        var token = credential.accessToken;
      })
      .catch((error) => {
        const signedInUser = [...user];
        signedInUser.success = false;
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
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

  //facebook authentication
  const handleFacebook = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        var credential = result.credential;
        var user = result.user;
        var accessToken = credential.accessToken;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  //email and password authentication
  const onSubmit = (event) => {
    // event.preventDefault();
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          let newUserInfo = { ...user };
          newUserInfo = {
            isSigned: true,
            email: res.email,
            password: res.password,
            success: true,
            error: res.error,
          };
          setUser(newUserInfo);
          console.log(res);
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
    let isFormValid = true;
    if (event.target.name === "email") {
      isFormValid =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          event.target.value
        );
    }
    // if (event.target.name === "password") {
    //   const isValidPassword = event.target.value > 6;
    //    const passwordHasNumber = /\d{1}/.test(event.target.value);
    //   isFormValid = isValidPassword;
    // }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  return (
    <div className="d-flex flex-column">
      <div className="ms-5 loginForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img src={avatar} alt="" />
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
                type=""
                placeholder="Password"
                name="password"
                onBlur={handleInput}
                className="input"
                // value={user.password}
              />
            </div>
          </div>
          <a href="#">Forgot Password?</a>
          {/* <input type="submit" className="btn" value="Login" required></input> */}
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
      <div className="social d-flex justify-content-around ms-5 ps-2">
        <i href="#" onClick={handleFacebook}>
          <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
        </i>
        <i href="#" onClick={handleGoogle}>
          <FontAwesomeIcon className="icon" icon={faGoogle} />
        </i>
        <i href="#">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </i>
      </div>
    </div>
  );
};

export default LoginPart;
