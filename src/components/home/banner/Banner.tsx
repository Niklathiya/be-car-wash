"use client";
import React from "react";
import CarwashImage from "../../../assets/carwash-animation.svg";
import BannerDrops from "../../../assets/banner-drops.webp";
import { Images as IMAGES } from "./../../../shared/Images";
import Image from "next/image";
import CustomButton from "@/shared/CustomButton";

const Banner = () => {
  return (
    <section className="pt-32 pb-56 overflow-hidden">
      <div className="custom-container">
        <div
          className="h-full w-full bg-no-repeat bg-bottom bg-contain"
          style={{
            backgroundImage: `url(${CarwashImage.src})`,
          }}
        >
          <div className="px-14 relative custom-inner-container">
            <div className="flex items-center gap-4">
              <span className="w-8 h-0.5 bg-[var(--color-secondary)]"></span>
              <p className="text-[var(--color-secondary)] text-[12px] uppercase font-bold">
                becarwash
              </p>
            </div>
            <div>
              <h1 className="text-white text-6xl font-bold my-10">
                We help keep <br /> your car clean <br />{" "}
                <span className="text-[var(--color-secondary)]">Carwash</span>
              </h1>
              <CustomButton>Read more</CustomButton>
            </div>
            <div className="banner-image-wrapper absolute w-full animate-slide-in-right top-96 -translate-y-1/2 right-[-100%] z-50 pointer-events-none">
              <Image src={IMAGES.Banner} alt="Banner" />
            </div>

            <div className="absolute bg-[var(--color-primary)] p-8 right-1/12 top-0 rounded-3xl shadow-xl flex gap-4 border border-[var(--color-border)]">
              <div className="text-right flex flex-col justify-center gap-1">
                <p className="text-white text-xl font-bold">
                  Call and book an appointment
                </p>
                <p className="text-[var(--color-secondary)] text-2xl font-bold">
                  +61 (0) 383 766 284
                </p>
                <p className="text-[var(--color-text)] font-bold">
                  Monday - Friday: 8am - 5pm
                </p>
              </div>
              <div>
                <Image
                  src={IMAGES.Owner}
                  alt="owner"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .banner-image-wrapper::before {
          content: "";
          position: absolute;
          bottom: 70px;
          left: 150px;
          width: 400px;
          height: 200px;
          background-image: url(${BannerDrops.src});
          background-size: contain;
          background-repeat: no-repeat;
        }

        @keyframes slideInRight {
          0% {
            right: -100%;
            opacity: 0;
          }
          100% {
            right: 0;
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Banner;
