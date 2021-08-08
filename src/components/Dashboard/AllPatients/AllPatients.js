import React, { useEffect, useState } from "react";
import AppointmentDataTable from "../AppointmentDataTable/AppointmentDataTable";
import './AllPatient.css'
import Sidebar from "../Sidebar/Sidebar";

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div className="container-fluid allPatient">
      <div className="row patients">
      <div className='col-md-3'>
      <Sidebar></Sidebar>
      </div>
        <div className="col-md-9 patient-info-side">
          <h1 className="text-white text-center m-5 ">All Patients</h1>
        {
          appointments.length?
          <AppointmentDataTable appointments={appointments} />:
          <div className="p-5">
          <h2 className=" text-info text-center">There is no patients!! </h2>
        </div>
        }
        </div>
      </div>
    </div>
  );
};

export default AllPatients;
