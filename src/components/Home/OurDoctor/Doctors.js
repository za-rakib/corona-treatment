import React, { useEffect, useState } from "react";
import OurDoctor from "./OurDoctor";
import mary from "../../../image/dr-mary.jpg";
import meng from "../../../image/Dr. Li-Meng.jpg";
import jhon from "../../../image/dr-jhon.jpg";
// const doctor = [
//   {
//     name: "Dr. Li-Meng",
//     phon: "577675784",
//   },
//   {
//     name: "Dr. Jhon",
//     phon: "577658586",
//   },
//   {
//     name: "Dr. Mary",
//     phon: "577675784",
//   },
// ];

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://glacial-everglades-10374.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <section className="doctors">
      <div className="container">
        <h2 className="text-center text-primary p-5">Our Doctors</h2>
        <div className="row">
          {doctors.map((doctor) => (
            <OurDoctor key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
