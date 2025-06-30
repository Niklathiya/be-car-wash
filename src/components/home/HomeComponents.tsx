"use client";
import React, { useRef } from "react";
import Banner from "./banner/Banner";
import ServiceList from "./serviceList/ServiceList";
import CarProtection from "./carProtection/CarProtection";
import OurStrength from "./ourStrength/OurStrength";
import OurWork from "./ourWork/OurWork";
import SatisfiedCustomer from "./satisfiedCustomer/SatisfiedCustomer";
import Pricing from "./pricing/Pricing";

const HomeComponents = () => {
  const ourReviewRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToStrength = () => {
    ourReviewRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <>
      <div className="bg-[var(--color-primary)]">
        <Banner />
        <ServiceList />
        <CarProtection onAboutClick={handleScrollToStrength} />
        <OurStrength />
        <OurWork />
        <SatisfiedCustomer ref={ourReviewRef} />
      </div>
      <Pricing />
    </>
  );
};

export default HomeComponents;
