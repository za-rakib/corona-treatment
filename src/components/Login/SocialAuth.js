import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory, useLocation } from 'react-router-dom';

const SocialAuth = ({ setLoggedInUser, user, setUser }) => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //google authentication
  const handleGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result);
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSigned: true,
          success: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser)
        history.replace(from);
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

  //facebook authentication
  const handleFacebook = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
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
    return (
        <div>
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

export default SocialAuth;