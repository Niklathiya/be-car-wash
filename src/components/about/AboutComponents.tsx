import React from "react";
import Banner from "./banner/Banner";
import AboutOwner from "./aboutOwner/AboutOwner";
import CarProtection from "./carProtection/CarProtection";
import AboutServices from "./aboutServices/AboutServices";

const AboutComponents = () => {
  return (
    <>
      <div className="bg-[var(--color-primary)]">
        <Banner />
        <AboutOwner />
        <CarProtection />
        <AboutServices />
      </div>
    </>
  );
};

export default AboutComponents;
