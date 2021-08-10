import React from "react";
import "./Services.css";
import vaccine from "../../../../image/vaccine.jpg";
import sanitizer from "../../../../image/sanitizer.jpg";
import mask from "../../../../image/mask.jpg";
import { ServicesCard } from "../ServicesCard/ServicesCard";
const serviceData = [
  {
    image: vaccine,
    title: "Vaccine",
    description: "Since the latter half of June, the number of new infections of COVID-19 in Bangladesh has been sharply increasing, but the inoculation rate of COVID-19 vaccine stays low at about 6.7 percent of the population. Under such situation, the administration of vaccines is an urgent issue for the Bangladesh government."
  },
  {
    image: sanitizer,
    title: "Hand Sanitizer",
    description: 'CDC recommends washing hands with soap and water whenever possible because handwashing reduces the amounts of all types of germs and chemicals on hands. But if soap and water are not available, using a hand sanitizer with at least 60% alcohol can help you avoid getting sick and spreading germs to others.'
  },
  {
    image: mask,
    title: "Mask",
    description:"Masks are a key measure to suppress transmission and save lives. Masks should be used as part of a comprehensive ‘Do it all!’ approach including physical distancing, avoiding crowded, closed and close-contact settings, good ventilation, cleaning hands, covering sneezes and coughs, and more."
  },
];
export const Services = () => {
  return (
    <section id="services" className="services-container container-fluid">
      <div className="text-center services">
        <h5>OUR SERVICES</h5>
        <h2 className="mt-4">Services We Provide</h2>
      </div>

      <div className="container-fluid service-card w-75 mt-5">
        <div className="row pt-5">
          {serviceData.map((service) => (
            <ServicesCard service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
