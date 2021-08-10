import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// style={{ width:"300px",height:"200px"}}
const OurDoctor = ({ doctor }) => {
  return (
    <div className="col-md-4 text-center">
      <img className="img-fluid img-thumbnail mb-3" src={doctor.image} alt=""/>
      <h4 className="">{doctor.name}</h4>
      <p className='mb-5'>
        <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />
        {doctor.phon}
      </p>
    </div>
  );
};

export default OurDoctor;
