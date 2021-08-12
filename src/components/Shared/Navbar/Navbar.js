import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-main  navbar-expand-lg ml-auto text-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse d-flex navbar-collapse" id="navbarSupportedContent">
          <ul>
            <div className="name mt-3">
              <h2><span to="/home">CORONA</span> CARE</h2>
            </div>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link ms-3 active "
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-3 " href="#services " >
               Services
              </a>
            </li>
            {/* <li className="nav-item">
            <a className="nav-link ms-3" href="#review">  Review</a>
             
            </li> */}
            <li className="nav-item">
              <a className="nav-link ms-3" href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-3 " to="/dashboard">
               Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-3" href="#contact">
                Contact 
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link ms-3 " to="/login">
                Login 
              </Link>
            </li> */}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
