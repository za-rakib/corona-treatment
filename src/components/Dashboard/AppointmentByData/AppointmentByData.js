import React from "react";
import "./AppointmentByData.css";
import AppointmentShortList from "../AppointmentShortList/AppointmentShortList";

const AppointmentByData = ({ appointments }) => {
  //console.log(appointments);
  return (
    <div className='appointmentByDate'>
      <h2 className="text-brand text-center pt-4">Appointments</h2>
      {appointments.length ? 
        <AppointmentShortList appointments={appointments} />
       : 
        <div className="p-5">
          <h4 className=" lead-text text-center">No Appointments for this Date</h4>
        </div>
      }
    </div>
  );
};

export default AppointmentByData;
