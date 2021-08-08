import React from 'react';
import './AppointmentDataTable.css'

const AppointmentDataTable = ({ appointments}) => {
    return (
        <table className="table patient-info table-borderless">
            <thead>
                <tr>
                <th className=" text-left" scope="col">Sr No</th>
                <th className="" scope="col">Name</th>
                <th className="" scope="col">Service</th>
                <th className="" scope="col">Age</th>
                <th className="" scope="col">Phone</th>
                <th className="" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.service}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.number}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentDataTable;