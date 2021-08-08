import React from 'react';
import './AppointmentShortList.css'

const AppointmentShortList = ({ appointments}) => {
    return (
        <table className="table table-borderless text-white">
        <thead>
            <tr>
            <th className="table-head" >Name</th>
            <th className="table-head" scope="col">Phone</th>
            <th className="table-head" scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
              appointments.map((appointment, index) => 
                    
                <tr>
                    <td>{appointment.name}</td>
                    <td>{appointment.number}</td>
                    <td>{appointment.email}</td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default AppointmentShortList;