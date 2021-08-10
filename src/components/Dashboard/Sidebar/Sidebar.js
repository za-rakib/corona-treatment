import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt, faCog,faCalendarCheck,faUserFriends,faFilePrescription, faUserShield, faHouseUser, faUserMd  } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div id="mySidenav" className="sidenav">
        <p className="logo">
          <span>CORONA</span>-CARE
        </p>
      
        <Link to="/dashboard" className="icon-a">
          <FontAwesomeIcon icon={faArrowsAlt} />&nbsp;&nbsp; Dashboard
        </Link>
        <Link to="/" className="icon-a">
          <FontAwesomeIcon icon={faCalendarCheck} />  &nbsp;&nbsp;Appointment
        </Link>
        <Link to="/patients" className="icon-a">
          <FontAwesomeIcon icon={faUserFriends} /> &nbsp;&nbsp;Patients
        </Link>
        <Link to="/" className="icon-a">
          <FontAwesomeIcon icon={faFilePrescription} /> &nbsp;&nbsp;Prescription
        </Link>
        <Link to="/" className="icon-a">
          <FontAwesomeIcon icon={faUserShield} /> &nbsp;&nbsp;
          Make Admin
        </Link>
        <Link to="/addDoctor" className="icon-a">
        <FontAwesomeIcon icon={faUserMd} /> &nbsp;&nbsp;
          Add Doctor
        </Link>
        <Link to="/home" className="icon-a">
        <FontAwesomeIcon icon={faHouseUser} /> &nbsp;&nbsp;
          Home
        </Link>
       
        <Link to="/" className="icon-a">
          <FontAwesomeIcon icon={faCog} /> &nbsp;&nbsp;
          Setting
        </Link>
     
      </div>
    </div>
  );
};

export default Sidebar;
