import React from "react";
import stay from "../../../image/stay-home.png"
import Button from "../../UI/Button/Button";
import './Care.css'

const Care = () => {
  return (
    <section className="container-fluid container-care">
      <div className="row full-care d-flex align-items-center">
        <div className="col-md-4 care-img ">
            <img src={stay} alt="" />
        </div>
        <div className="col-md-6 care-text">
          <h1>Caring For Someone <br /> Sick at Home</h1>
          <p>If you are caring for someone with COVID-19 at home or in a non-healthcare setting, follow this advice to protect yourself and others. Learn what to do when someone has symptoms of COVID-19 or when someone has been diagnosed with the virus.This information also should be followed when caring for people who have tested positive but are not showing symptoms.
          If you are caring for someone with COVID-19 at home or in a non-healthcare setting, follow this advice to protect yourself and others. Learn what to do when someone has symptoms of COVID-19 or when someone has been diagnosed with the virus.This information also should be followed when caring for people who have tested positive but are not showing symptoms.</p>
          <Button className="btn mt-3">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Care;
