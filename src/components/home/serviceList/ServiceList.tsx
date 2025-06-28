import React from "react";

const ServiceList = () => {
  const services = [
    { name: "Cleaning" },
    { name: "Washing" },
    { name: "Polishing" },
    { name: "Coating" },
  ];

  return (
    <section className="bg-[var(--color-primary)] custom-inner-container">
      <div className="flex items-center justify-center pt-5 pb-24 gap-10">
        {services.map((service, index) => (
          <div key={index} className="flex items-center w-72 justify-center">
            <div className="flex-1 h-px bg-[var(--color-border)] mx-4" />

            <div className="flex items-center gap-2 text-white font-semibold whitespace-nowrap">
              <span className="text-[var(--color-secondary)]">
                0{index + 1}
              </span>
              <span>{service.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
