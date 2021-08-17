import React from "react";
import test from "../../../image/appointment3.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AppointmentHeader = ({ handleDateChange }) => {
  // const handleDateChange = (date) => {
   //console.log(data)
  // }
  return (
    <div className="" style={{ backgroundColor: "#525b96" ,height:'550px' }}>
      <main className="container-fluid">
        <div className="row d-flex align-items-center  pt-1">
            <div className="col-md-4 offset-md-1 mt-5">
              <h1 className='p-2' style={{ color: "white" }}>Appointment </h1>
              <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
            <div className="col-md-6 image ms-5 ps-5 mt-5">
              <img
                style={{ width: "550px", height: "auto" }}
                className="img-fluid"
                src={test}
                alt=""
              />
            </div>
         
        </div>
      </main>
    </div>
  );
};

export default AppointmentHeader;
