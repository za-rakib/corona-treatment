import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ml-auto  bg-secondary">
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
            <div className="name mt-3" href="/home">
              <h2 >CORONA CARE</h2>
            </div>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link ms-3 active text-dark"
                aria-current="page"
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-3 text-dark" href="#coronaServices " id>
                Corona Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-3 text-dark" href="#reviews">
                Review
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-3 text-dark" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-3 text-dark" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-3 text-dark" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
