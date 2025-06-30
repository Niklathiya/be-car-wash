import React, { forwardRef } from "react";
import CustomerReview from "./customerReview/CustomerReview";
import { Images as IMAGE } from "@/shared/Images";
import RefreshedCar from "./refreshedCar/RefreshedCar";

const SatisfiedCustomer = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="bg-[#F0F4F4]">
      <div
        className="w-full h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGE.SatisfiedCustomerBg.src})` }}
      >
        <div className="custom-component-container pt-56">
            <CustomerReview ref={ref} />
            <RefreshedCar />
        </div>
      </div>
    </div>
  );
});

SatisfiedCustomer.displayName = "SatisfiedCustomer";

export default SatisfiedCustomer;