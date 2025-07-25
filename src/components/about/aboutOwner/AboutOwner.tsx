import React from "react";
import { Images as IMAGE } from "@/shared/Images";
import Image from "next/image";

const AboutOwner = () => {
  return (
    <section className="custom-component-container grid grid-cols-12 gap-10 py-20">
      <div className="col-span-3">
        <Image src={IMAGE.Owner} alt="about" className="rounded-full"></Image>
      </div>
      <div className="col-span-9">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-0.5 bg-[var(--color-secondary)]"></span>
          <p className="text-[var(--color-secondary)] text-[14px] uppercase font-bold">
            becarwahs
          </p>
        </div>
        <h3 className="font-bold text-3xl text-[#6C86E3]">
          At BECARWASH, we believe a clean car reflects a clear mindset. With
          years of dedication to top-tier service, we’ve redefined what a
          premium car wash experience should be.{" "}
          <span className="text-white">
            Our commitment goes beyond just washing vehicles - we focus on detail,
            care, and customer satisfaction every step of the way.
          </span>{" "}
          Whether it’s a quick rinse or a full detailing service, we ensure your
          car leaves looking its absolute best. Because at BECARWASH, it’s not
          just about the shine—it’s about trust, quality, and pride in every
          finish.
        </h3>
      </div>
    </section>
  );
};

export default AboutOwner;
