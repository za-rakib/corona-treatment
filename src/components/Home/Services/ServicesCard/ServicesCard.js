import React from "react";
import "./ServicesCard.css";
export const ServicesCard = ({ service }) => {
  return (
    <div className="col-md-4 text-center service-card">
      <img className="service-img" src={service.image} alt="" />
      <h5>{service.title}</h5>
      <p> {service.description}</p> 
    </div>
  );
};
