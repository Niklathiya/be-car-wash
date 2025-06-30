import React, { forwardRef } from "react";
import { Images as IMAGE } from "@/shared/Images";
import Image from "next/image";

const CustomerReview = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      className="grid grid-cols-12 items-center justify-between gap-8"
      ref={ref}
    >
      <div className="text-[var(--color-primary)] font-bold text-5xl col-span-3">
        <div className="flex gap-5">
          <h2>1300</h2>
          <Image
            src={IMAGE.BubblePlus}
            alt="Bubble Plus Icon"
            className="w-12 h-12"
          ></Image>
        </div>
        <h2>satisfied customers</h2>
      </div>
      <div
        className="rounded-b-4xl mb-0 col-span-3 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(0deg, #FFFFFF 30%, rgba(255,255,255,0) 70%)",
        }}
      >
        <Image
          src={IMAGE.Customer}
          alt="Customer"
          className="w-80 h-80 object-contain"
        />
      </div>

      <div className="col-span-6 bg-white p-10 rounded-4xl">
        <div className="flex gap-6 mb-14 text-[var(--color-primary)] items-start">
          <Image src={IMAGE.QuoteIcon} alt="Quote Icon"></Image>
          <p>
            I&apos;m genuinely impressed with the service. Everything was smooth,
            professional, and exceeded my expectations. I&apos;d definitely recommend
            it to anyone looking for quality and reliability. The team made me
            feel valued every step of the way, and their attention to detail
            truly stood out. It&apos;s rare to find a company that combines
            efficiency with such genuine care.
          </p>
        </div>
        <h3 className="text-right text-[var(--color-primary)] font-bold text-xl">
          Elisa Smith, 33 years
        </h3>
      </div>
    </section>
  );
});

CustomerReview.displayName = "CustomerReview";

export default CustomerReview;
