import React, { useState } from "react";
import AppointmentByData from "./AppointmentByData/AppointmentByData";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Calendar from "react-calendar";
const Dashboard = () => {
// const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    console.log(date)
    let day = date.toLocaleString('en-US', {day: '2-digit'});
    let month = date.toLocaleString('en-US', {month: 'short'});
    let year = date.getFullYear().toString();
    let mySelectedDate = day + ' ' + month + ' ' + year;
    console.log(mySelectedDate);
    // setSelectedDate(mySelectedDate);
    fetch("http://localhost:5000/appointmentByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({mySelectedDate})
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
   };
  // useState(()=>{
  //   fetch("http://localhost:5000/appointmentByDate", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({selectedDate})
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setAppointments(data));
  // },[selectedDate])

  return (
    <div className="container-fluid dashboard">
      <div className="row">
        <div className="col-md-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-md-4  calendar">
          <Calendar
            className="ms-5"
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-5 appointmentData">
          <AppointmentByData appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
