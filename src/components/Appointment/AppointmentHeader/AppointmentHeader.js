import React from "react";
import test from "../../../image/appointment2.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AppointmentHeader = ({ handleDateChange }) => {
  // const handleDateChange = (date) => {
  //   console.log(data)
  // }
  return (
    <div>
      <main className="container-fluid">
        <div
          style={{ height: "500px " }}
          className="row d-flex align-items-center mt-5 pt-1"
        >
          <div className="col-md-4 offset-md-1 ">
            <h1 style={{ color: "#3a4256" }}>Appointment </h1>
            <Calendar onChange={handleDateChange} value={new Date()} />
          </div>
          <div className="col-md-6 image">
            <img className="img-fluid" src={test} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentHeader;
