"use client";
import React, { useRef } from "react";
import Banner from "./banner/Banner";
import ServiceList from "./serviceList/ServiceList";
import CarProtection from "./carProtection/CarProtection";
import OurStrength from "./ourStrength/OurStrength";

const HomeComponents = () => {
  const ourStrengthRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToStrength = () => {
    ourStrengthRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[var(--color-primary)]">
      <Banner />
      <ServiceList />
      <CarProtection onAboutClick={handleScrollToStrength} />
      <OurStrength ref={ourStrengthRef} />
    </div>
  );
};

export default HomeComponents;
