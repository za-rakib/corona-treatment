import React from "react";
import { Link } from "react-router-dom";
import test from "../../../../image/disease-test-2.jpg";
import Button from "../../../UI/Button/Button";
import './HeaderMain.css'

export const HeaderMain = () => {
  return (
    <main className="container-fluid">
      <div
        style={{ height: "500px ", marginTop:"200px" }}
        className="row d-flex align-items-center mt-5 pt-5"
      >
        <div className="col-md-4 offset-md-1  ">
          <h1 style={{ color: "#3a4256" }}>Treatments</h1>
          <p className="text-secondary">
            The British Columbia COVID-19 Therapeutics Committee provides
            guidance on the most current research on the use of therapies in the
            management of COVID-19.
          </p>
          <Link to="/appointment">
            <Button className="btn btn-primary"> GET APPOINTMENT</Button>
          </Link>
        </div>
        <div className="col-md-6 image">
          <img className="img-fluid" src={test} alt="" />
        </div>
      </div>
    </main>
  );
};
