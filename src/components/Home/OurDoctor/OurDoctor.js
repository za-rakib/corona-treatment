import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const OurDoctor = ({ doctor }) => {
  //console.log(doctor);
  return (
    <div className="col-md-4 text-center">
      <img className="img-fluid img-thumbnail mb-3" src={doctor.imageUrl} alt=""/>
      <h4 className="">Dr {doctor.name}</h4>
      <p className='mb-5'>

        <FontAwesomeIcon className="text-primary me-3" icon={faEnvelopeOpenText}/>
        {doctor.email}
      </p>
    </div>

  
  );
};

export default OurDoctor;
