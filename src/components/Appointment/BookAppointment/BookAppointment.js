import React from "react";
import BookingCard from "../BookingCard/BookingCard";
import './BookAppointment.css'
const bookingData = [
  {
    id: 1,
    subject: "Testing",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpaces: 10,
  },
  {
    id: 2,
    subject: "Guidance and Support",
    visitingHour: "10:05 AM - 11:30 AM",
    totalSpaces: 10,
  },
  {
    id: 3,
    subject: "Vaccination",
    visitingHour: "5:00 PM - 7:00 PM",
    totalSpaces: 10,
  },
  {
    id: 4,
    subject: "Supported Oxygen",
    visitingHour: "8:00 PM - 9:00 PM",
    totalSpaces: 10,
  },
  {
    id: 5,
    subject: "Stress Control",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpaces: 10,
  },
  {
    id: 6,
    subject: "Fever",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpaces: 10,
  },
];
const BookAppointment = ({ date }) => {
 
  return (
    <section className="container-fluid bookAppointment mb-5">
      <h3 className="text-center text-info pt-5 mb-5">
        Available Appointment on {date.toDateString()}{" "}
      </h3>
      <div className="row d-flex justify-content-around">
        {bookingData.map((booking) => (
          <BookingCard booking={booking} date={date} key={booking.id} />
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
