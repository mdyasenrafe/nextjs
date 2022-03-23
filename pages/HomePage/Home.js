import React from "react";
import Banner from "./Banner";
import ContactSection from "./ContactSection";
import CruisSection from "./CruisSection";
import SkipSection from "./SkipSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <SkipSection />
      <CruisSection />
      <ContactSection />
    </div>
  );
};

export default Home;
