import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./BookingCard.css";

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div
      className="card booking-card border-none text-center col-md-4 ms-2 mb-3 "
      style={{ maxWidth: "24rem" }}
    >
      <div className="card-body ">
        <h4 className="mb-3">{booking.subject}</h4>
        <h6>{booking.visitingHour}</h6>
        <p>{booking.totalSpaces} SPACES AVAILABLE</p>
      </div>
      <div>
        <Button className="btn mb-4" onClick={openModal}>
          <small>BOOK APPOINTMENT</small>
        </Button>
        <AppointmentForm
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          subject={booking.subject}
          date={date}
        />
      </div>
    </div>
  );
};

export default BookingCard;
