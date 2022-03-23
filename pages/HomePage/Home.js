import React from "react";
import Banner from "./Banner";
import CruisSection from "./CruisSection";
import SkipSection from "./SkipSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <SkipSection />
      <CruisSection />
    </div>
  );
};

export default Home;
