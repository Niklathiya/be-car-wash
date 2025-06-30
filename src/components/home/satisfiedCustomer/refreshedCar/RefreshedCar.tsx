import React from "react";
import { Images as IMAGE } from "@/shared/Images";
import CustomButton from "@/shared/CustomButton";

const RefreshedCar = () => {
  return (
    <section className="py-20">
      <div
        className="w-full h-full bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${IMAGE.RefreshedCar.src})` }}
      >
        <div className="py-22 flex flex-col items-center justify-center text-center gap-6">
          <h2 className="font-bold text-5xl text-[var(--color-primary)]">
            Over <span className="text-[#1ACBAA]">5000</span> <br /> refreshed
            car
          </h2>
          <p className="text-[var(--color-primary)] mb-6">20 daily car</p>
          <CustomButton variant="secondary">View gallery</CustomButton>
        </div>
      </div>
    </section>
  );
};

export default RefreshedCar;
