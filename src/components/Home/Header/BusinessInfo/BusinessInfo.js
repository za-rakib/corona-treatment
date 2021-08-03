import React from "react";
import { InfoCard } from "../InfoCard/InfoCard";
import { faClock,faMapMarkerAlt,faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
const infoData = [
  {
    title: "Opening hours",
    description: "We are open 24/7",
    icon: faClock,
    backgroundColor: "primary",
  },
  {
    title: "Visit our location",
    description: "15/A, Dhanmondi Dhaka, Bangladesh",
    icon: faMapMarkerAlt,
    backgroundColor: 'dark',
  },
  {
    title: "Contact us now",
    description: "+8801517037484",
    icon: faPhoneVolume,
    backgroundColor: "primary",
  },
];

export const BusinessInfo = () => {
  return (
    <section className="container-fluid w-75">
      <div  className="row">
        {infoData.map((info) => (
          <InfoCard info={info} />
        ))}
      </div>
    </section>
  );
};
