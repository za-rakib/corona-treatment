import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../image/doctors (1).png";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="opacity">
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-none d-md-block">
              <img src={doctor} alt="" />
            </div>
            <div className="col-md-7 text-white py-5">
              <h5 className="text-primary text-uppercase ">Appointment</h5>
              <h1 className="my-4">
                Make an Appointment <br /> Today
              </h1>
              <p>
              Your appointment will be confirmed through return e-mail or telephonic communication. Please be informed that this submission of “Request for Appointment” will only be workable after confirmation by our Appointment Centre. Confirmation of an appointment depends upon the availability of doctors at your preferred date and time.
              </p>
              <Link to="/appointment">
                <Button className="btn btn-primary">GET APPOINTMENT</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
