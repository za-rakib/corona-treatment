import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../image/doctors (1).png'
import Button from '../../UI/Button/Button';
const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="opacity">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-none d-md-block">
                            <img src={doctor} alt=""/>
                        </div>
                        <div className="col-md-7 text-white py-5">
                            <h5 className="text-primary text-uppercase ">Appointment</h5>
                            <h1 className="my-4">Make an Appointment <br/> Today</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                            <Button className="btn btn-primary">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;