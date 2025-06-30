import React from "react";
import { Images as IMAGE } from "@/shared/Images";
import CustomButton from "@/shared/CustomButton";
import ReactCompareImage from "react-compare-image";

const OurWork = () => {
  return (
    <section className="custom-component-container grid grid-cols-12" style={{ marginBottom: "-120px" }}>
      <div className="bg-white col-span-4 rounded-tl-4xl rounded-bl-4xl overflow-hidden">
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-bottom"
          style={{ backgroundImage: `url(${IMAGE.OurWork.src})` }}
        >
          <div className="py-20 px-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-0.5 bg-[var(--color-primary)]"></span>
              <p className="text-[var(--color-primary)] text-sm uppercase font-bold">
                becarwash
              </p>
            </div>
            <h2 className="text-[var(--color-primary)] text-6xl font-bold mb-12">
              See what we can do for You
            </h2>
            <CustomButton variant="white">Our Works</CustomButton>
          </div>
        </div>
      </div>
      <div className="col-span-8 rounded-tr-4xl rounded-br-4xl overflow-hidden">
        <ReactCompareImage
          leftImage={IMAGE.OurWorkBefore.src}
          rightImage={IMAGE.OurWorkAfter.src}
        />
      </div>
    </section>
  );
};

export default OurWork;
