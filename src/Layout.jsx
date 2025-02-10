import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AdvancedFeature from "./components/AdvancedFeature/AdvancedFeature";
import OurTeam from "./components/OurTeam/OurTeam";
import ContactUs from "./components/ContactUs/ContactUs";

const teamData = [
  { name: "Ahmed Hassan", role: "Back End", img: "/img/member1.svg" },
  { name: "Ahmed Hassan", role: "Back End", img: "/img/member1.svg" },
  { name: "Ahmed Hassan", role: "Back End", img: "/img/member1.svg" },
  { name: "Ahmed Hassan", role: "Back End", img: "/img/member1.svg" },
  { name: "Ahmed Hassan", role: "Back End", img: "/img/member1.svg" },
  { name: "Ahmed Hassan", role: "Back End", img: "/img/member1.svg" },
  { name: "Ahmed Hassan", role: "Back End", img: "/img/member1.svg" },
  { name: "Ahmed Hassan", role: "Back End", img: "/img/member1.svg" },
];

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Nav />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="features">
        <AdvancedFeature />
      </div>
      <div id="team">
        <OurTeam members={teamData} />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
