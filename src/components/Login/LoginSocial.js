import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import './LoginSocial.css'
const LoginSocial = () => {
    return (
        <div className="social d-flex justify-content-around ms-5 ps-2">
        <a href="https://www.facebook.com/za.rakib2/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faGoogle} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
      </div>
    );
};

export default LoginSocial;