import React from "react";
import OurDoctor from "./OurDoctor";
import mary from "../../../image/dr-mary.jpg";
import meng from "../../../image/Dr. Li-Meng.jpg";
import jhon from "../../../image/dr-jhon.jpg";
const doctor = [
  {
    name: "Dr. Li-Meng",
    image: meng,
    phon: "577675784",
  },
  {
    name: "Dr. Jhon",
    image: jhon,
    phon: "577658586",
  },
  {
    name: "Dr. Mary",
    image: mary,
    phon: "577675784",
  },
];
const Doctors = () => {
  return (
    <section className="doctors">
      <div className="container">
        <h2 className="text-center text-primary p-5">Our Doctors</h2>
        <div className="row">
          {
              doctor.map(doctor => <OurDoctor doctor={doctor}/>)
          }
        </div>
      </div>
    </section>
  );
};

export default Doctors;
