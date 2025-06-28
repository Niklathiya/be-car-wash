import Image from "next/image";
import React, { forwardRef } from "react";
import { Images as IMAGE } from "../../../shared/Images";
import CustomIconBox from "@/shared/CustomIconBox";

const OurStrength = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="custom-component-container">
      <p className="text-[var(--color-secondary)] text-[12px] uppercase font-bold text-center mb-6">
        becarwash
      </p>
      <h2 className="font-bold text-center text-5xl w-1/2 text-white mx-auto">
        Our strength is that we focus on the details
      </h2>
      <p className="text-center text-[var(--color-text)] w-2/5 mx-auto mt-10 mb-12 text-sm">
        We combine precision and care in every step. From advanced techniques to
        thoughtful service, we ensure your vehicle gets the detailed attention
        it deserves.
      </p>

      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-white font-semibold whitespace-nowrap mb-8">
              <span className="text-[var(--color-secondary)]">01</span>
              <span className="w-26 h-0.5 bg-[var(--color-secondary)]"></span>
            </div>
            <CustomIconBox
              primarySrc={IMAGE.CleaningIcon}
              secondarySrc={IMAGE.CleaningIconSecondary}
              alt="Cleaning Icon"
            />
            <h4 className="text-white font-bold text-2xl mt-6">Cleaning</h4>
            <p className="text-[var(--color-text)] mt-2">
              Thorough interior and exterior cleaning that restores your car
              &apos;s freshness and shine.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-white font-semibold whitespace-nowrap mb-8">
              <span className="text-[var(--color-secondary)]">03</span>
              <span className="w-26 h-0.5 bg-[var(--color-secondary)]"></span>
            </div>
            <CustomIconBox
              primarySrc={IMAGE.WashingIcon}
              secondarySrc={IMAGE.WashingIconSecondary}
              alt="Washing Icon"
            />
            <h4 className="text-white font-bold text-2xl mt-6">Washing</h4>
            <p className="text-[var(--color-text)] mt-2">
              Advanced washing techniques that ensure a spotless, scratch-free
              surface every time.
            </p>
          </div>
        </div>

        <div className="col-span-3 animate-spin-slow custom-before-image relative">
          <Image
            src={IMAGE.OurStrength}
            alt="our strength"
            className="w-[70%] h-auto mx-auto animate-spin-slow"
          />
        </div>

        <div className="col-span-1">
          <div className="mb-12 flex flex-col items-end">
            <div className="flex items-center gap-2 text-white font-semibold whitespace-nowrap mb-8">
              <span className="w-26 h-0.5 bg-[var(--color-secondary)]"></span>
              <span className="text-[var(--color-secondary)]">02</span>
            </div>
            <CustomIconBox
              primarySrc={IMAGE.PolishingIcon}
              secondarySrc={IMAGE.PolishingIconSecondary}
              alt="Polishing Icon"
            />
            <h4 className="text-white font-bold text-2xl mt-6">Polishing</h4>
            <p className="text-[var(--color-text)] mt-2 text-end">
              Precision polishing to remove surface imperfections and reveal a
              brilliant, glossy finish.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 text-white font-semibold whitespace-nowrap mb-8">
              <span className="w-26 h-0.5 bg-[var(--color-secondary)]"></span>
              <span className="text-[var(--color-secondary)]">04</span>
            </div>
            <CustomIconBox
              primarySrc={IMAGE.CoatingIcon}
              secondarySrc={IMAGE.CoatingIconSecondary}
              alt="Coating Icon"
            />
            <h4 className="text-white font-bold text-2xl mt-6">Coating</h4>
            <p className="text-[var(--color-text)] mt-2 text-end">
              Durable protective coatings that guard against weather, grime, and
              daily wear.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
            transform-origin: center;
          }
          100% {
            transform: rotate(360deg);
            transform-origin: center;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </section>
  );
});

OurStrength.displayName = "OurStrength";

export default OurStrength;
