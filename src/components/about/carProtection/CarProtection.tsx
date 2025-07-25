import React from "react";
import { Images as IMAGE } from "@/shared/Images";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const features = [
  {
    title: "Thorough & Gentle Cleaning:",
    description:
      "We treat every vehicle with care using advanced tools and safe, eco-friendly products.",
  },
  {
    title: "Professional, Trained Staff:",
    description:
      "Our expert team ensures spotless results and consistent quality every time.",
  },
  {
    title: "Fast, Affordable, Reliable:",
    description:
      "Enjoy quick service without compromising on the quality your car deserves.",
  },
];

const FeatureItem = ({
  title,
  description,
  showBorder = true,
}: {
  title: string;
  description: string;
  showBorder?: boolean;
}) => (
  <li className="flex items-start gap-2">
    <div className="w-4 h-4 rounded-full bg-[#DEA6FF] flex items-center justify-center mt-1">
      <ChevronRight size="16px" color="white" />
    </div>
    <div className="w-full">
      <p className="text-[var(--color-primary)]">
        <b>{title}</b> {description}
      </p>
      {showBorder && (
        <div className="absolute border-b border-[#00000014] left-6 w-[20%] mt-3" />
      )}
    </div>
  </li>
);

const CarProtection = () => {
  return (
    <section
      className="w-full h-full bg-contain bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${IMAGE.AboutProtectionBg.src})` }}
    >
      <div className="custom-component-container flex items-center justify-between gap-10 text-white">
        <div className="flex flex-col items-center">
          <div
            className="text-center w-50 pt-10 pb-5 rounded-full"
            style={{
              boxShadow: "30px 30px 60px 0px #0E2989",
              backgroundImage: "linear-gradient(0deg, #1C3AA4 0%, #2F4EB8 78%)",
            }}
          >
            <Image
              src={IMAGE.AboutProtectionIcon}
              alt="shield"
              className="mx-auto mb-12 w-20 h-auto"
            />
            <div className="mb-10 mx-auto">
              <p className="text-4xl font-bold text-white">100%</p>
              <p className="text-white">Car Protection</p>
            </div>
          </div>
        </div>

        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-4 leading-snug">
            Dedicated to Quality, Committed to Shine
          </h2>
          <p className="text-[var(--color-text)] mb-6">
            At our car wash, we believe every vehicle deserves premium care.
            With cutting-edge technology, eco-friendly products, and a team of
            passionate professionals, we ensure your car gets the best treatment
            possible. Our goal? A spotless finish and your complete
            satisfaction.
          </p>
          <p className="text-[var(--color-text)] mb-6">
            We are committed to excellence—every wash, every time. From exterior
            detailing to interior vacuuming, we go the extra mile to protect and
            enhance your vehicle’s appearance. Experience the shine that speaks
            quality.
          </p>
          <p className="text-[var(--color-text)]">
            Join the community of car owners who trust us for their vehicle
            care. Discover what 100% dedication looks like, and let your car
            shine with confidence.
          </p>
        </div>

        <div className="bg-white text-[var(--color-primary)] rounded-3xl px-10 pt-10 pb-46 max-w-sm shadow-lg relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Car Wash?</h3>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
                showBorder={index < features.length - 1}
              />
            ))}
          </ul>

          <div className="absolute bottom-0">
            <Image src={IMAGE.AboutProtectionPoint} alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarProtection;
