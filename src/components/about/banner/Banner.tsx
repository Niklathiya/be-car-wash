import React, { useMemo } from "react";
import { Images as IMAGE } from "@/shared/Images";
import Image from "next/image";
import ServiceList from "@/components/home/serviceList/ServiceList";

const Banner = () => {
  const backgroundUrl = useMemo(() => {
    return `${IMAGE.BannerAnimation.src}?t=${Date.now()}`;
  }, []);

  return (
    <div
      className="pt-46 bg-cover bg-no-repeat z-[100] relative w-full h-full pointer-events-none"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="custom-component-container">
        <div className="flex">
          <div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-0.5 bg-[var(--color-secondary)]"></span>
              <p className="text-[var(--color-secondary)] text-[14px] uppercase font-bold">
                about us
              </p>
            </div>
            <h1 className="text-white text-7xl font-bold w-2/3 mt-10">
              We clean your cars for over 20 years
            </h1>
          </div>
          <div>
            <Image src={IMAGE.AboutBanner} alt="banner"></Image>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-6">
            <p className="text-[var(--color-secondary)] uppercase font-bold">
              show me services
            </p>
            <Image src={IMAGE.ShowServiceIcon} alt="services" className="object-contain w-16 h-auto mt-6"></Image>
          </div>
          <ServiceList />
        </div>
      </div>
    </div>
  );
};

export default Banner;
