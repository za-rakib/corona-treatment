import React from "react";
import Blog from "../Blog/Blog/Blog";
import Care from "../Care/Care";
import Contact from "../Contact/Contact";
import Footer from "../../Shared/Footer/Footer";
import { Header } from "../Header/Header/Header";
import MakeAppointment from "../MakeAppoinment/MakeAppointment";
import Review from "../Review/Review/Review";
import { Services } from "../Services/Services/Services";
import Navbar from "../../Shared/Navbar/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <Services />
      <Care />
      <MakeAppointment />
      <Review />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};
