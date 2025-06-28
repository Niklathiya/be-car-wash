import CustomButton from "@/shared/CustomButton";
import React from "react";
import { Images as IMAGE } from "@/shared/Images";
import Image from "next/image";

type CarProtectionProps = {
  onAboutClick?: () => void;
};

const CarProtection: React.FC<CarProtectionProps> = ({ onAboutClick }) => {
  return (
    <section className="custom-component-container flex gap-6 pb-32">
      <div className="w-[70%] bg-[#2D4CB8] rounded-4xl p-12">
        <div className="flex items-center gap-4">
          <span className="w-8 h-0.5 bg-[var(--color-secondary)]"></span>
          <p className="text-[var(--color-secondary)] text-[12px] uppercase font-bold">
            becarwash
          </p>
        </div>
        <h2 className="text-white text-5xl font-bold w-1/2 mt-6">
          For over 20 years we have been taking care of your cars
        </h2>
        <h3 className="text-white text-2xl font-bold mt-16 w-3/4">
          Delivering Expert Care, Premium Protection, and Lasting Shine for
          Every Drive
        </h3>
        <p className="text-[var(--color-text)] mt-5 w-3/4">
          From basic cleaning to advanced protection services, we provide expert
          care tailored to your vehicle’s needs. Trusted by thousands, we
          combine experience, precision, and premium products to keep your car
          looking and performing its best.
        </p>

        <div className="mt-20 flex gap-16">
          <CustomButton variant="secondary">About us</CustomButton>
          <div
            className="flex items-center gap-8 text-white font-bold cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={onAboutClick}
          >
            <Image src={IMAGE.DownArrow} alt="Down Arrow" />
            <p>
              Check feedback <br />
              from satisfied customers
            </p>
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-white rounded-4xl overflow-hidden">
        <div
          className="w-full h-full bg-cover"
          style={{ backgroundImage: `url(${IMAGE.CarProtection.src})` }}
        >
          <div className="p-12 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#5575E7] rounded-full flex items-center justify-center mb-16">
              <Image
                src={IMAGE.CarProtectionIcon}
                alt="surety"
                className="w-8 h-8"
              />
            </div>
            <Image src={IMAGE.CarProtectionSymbol} alt="car-protection" className="mb-16"/>
            <p className="font-bold text-5xl text-[var(--color-primary)]">100%</p>
            <p className="font-bold text-lg text-[var(--color-primary)]">Car Protection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarProtection;
