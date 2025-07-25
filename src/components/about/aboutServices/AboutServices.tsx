"use client";

import React from "react";
import Image from "next/image";
import { Images as IMAGE } from "@/shared/Images";
import AnimatedCounter from "./AnimatedCounter";

interface StatItem {
  value: string;
  label: string;
  description: string;
  video: string;
}

const stats: StatItem[] = [
  {
    value: "1300",
    label: "search for Polishing",
    description:
      "Enhance your car's appearance by removing light scratches and swirl marks, leaving a smooth, mirror-like finish that turns heads.",
    video: "./../../../assets/car-polishing.mp4",
  },
  {
    value: "889",
    label: "search for Coating",
    description:
      "Apply a durable ceramic or nano coating that protects your vehicle's paint from UV rays, dirt, and water - for a lasting showroom shine.",
    video: "./../../../assets/car-coating.mp4",
  },
  {
    value: "30K",
    label: "search for Cleaning",
    description:
      "A detailed cleaning service that covers every corner, inside and out. We eliminate dirt, dust, and grime for a fresher, cleaner drive.",
    video: "./../../../assets/car-cleaning.mp4",
  },
  {
    value: "5M",
    label: "search for Washing",
    description:
      "Experience a premium car wash that uses advanced equipment and gentle products to leave your vehicle spotless and shining.",
    video: "./../../../assets/car-washing.mp4",
  },
];

const AboutServices: React.FC = () => {
  return (
    <section className="custom-component-container py-16">
      <div className="grid grid-cols-12 gap-8">
        {stats.map((item: StatItem, index: number) => (
          <div
            key={index}
            className="relative col-span-3 h-[400px] perspective-[1000px] group"
          >
            <div
              className="w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute w-full h-full text-center backface-hidden bg-[var(--color-primary)] text-white rounded-4xl p-8 shadow-[30px_30px_60px_#0E2989]">
                <div className="flex justify-center mb-8">
                  <Image
                    src={IMAGE.AboutServicesIcon}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </div>
                <AnimatedCounter targetValue={item.value} duration={2000} />
                <p className="font-semibold mt-2 mb-6 w-1/2 mx-auto">
                  {item.label}
                </p>
                <p className="text-[var(--color-text)] text-justify">
                  {item.description}
                </p>
              </div>

              <div
                className="absolute w-full h-full rounded-4xl overflow-hidden"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <video
                  className="w-full h-full object-cover"
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutServices;
