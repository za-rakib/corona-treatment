import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt, faCog,faCalendarCheck,faUserFriends,faFilePrescription, faUserShield  } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div id="mySidenav" className="sidenav">
        <p className="logo">
          <span>CORONA</span>-CARE
        </p>
      
        <Link to="/dashboard" className="icon-a">
          <i className="fa fa-dashboard icons"></i> <FontAwesomeIcon icon={faArrowsAlt} />&nbsp;&nbsp; Dashboard
        </Link>
        <Link to="/" className="icon-a">
          <i className="fa fa-users icons"></i><FontAwesomeIcon icon={faCalendarCheck} />  &nbsp;&nbsp;Appointment
        </Link>
        <Link to="/patients" className="icon-a">
          <i className="fa fa-list icons"></i> <FontAwesomeIcon icon={faUserFriends} /> &nbsp;&nbsp;Patients
        </Link>
        <Link to="/" className="icon-a">
          <i className="fa fa-shopping-bag icons"></i><FontAwesomeIcon icon={faFilePrescription} /> &nbsp;&nbsp;Prescription
        </Link>
        <Link to="/" className="icon-a">
          <i className="fa fa-tasks icons"></i><FontAwesomeIcon icon={faUserShield} /> &nbsp;&nbsp;
          Make Admin
        </Link>
        
        <Link to="/" className="icon-a">
          <i className="fa fa-user icons"></i><FontAwesomeIcon icon={faCog} /> &nbsp;&nbsp;
          Setting
        </Link>
        <Link to="/" className="icon-a">
          <i className="fa fa-list-alt icons"></i> &nbsp;&nbsp;
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
