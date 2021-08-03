import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";
export const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 text-white info-card ">
      <div
        className={`d-flex  info-container align-items-center info-${info.backgroundColor}`}
      >
        <div className="me-2">
          <FontAwesomeIcon className="font-icon" icon={info.icon} />
        </div>

        <div className="info-text">
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};
