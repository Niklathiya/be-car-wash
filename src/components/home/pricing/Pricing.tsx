import React from "react";
import { Images as IMAGE } from "@/shared/Images";
import { SquareMinus, SquarePlus } from "lucide-react";
import CustomButton from "@/shared/CustomButton";
import pricingData from "@/data/pricing.json";

const Pricing = () => {
  return (
    <section
      className="w-full h-full py-26 bg-no-repeat bg-cover bg-[#F0F4F4] bg-center"
      style={{ backgroundImage: `url(${IMAGE.PricingBg.src})` }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((plan, id) => (
            <div
              key={plan.plan}
              className={`rounded-4xl p-6 text-center flex flex-col justify-between ${
                id === 3
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-white text-[var(--color-primary)]"
              }`}
            >
              <div className="mb-16">
                <h3 className="text-xl font-semibold mb-10">{plan.plan}</h3>
                <p className="text-4xl font-bold mb-10">${plan.price}</p>

                <ul className="space-y-4 mb-6 text-left">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-2 relative pb-4 ${
                        feature.active
                          ? id === 3
                            ? "text-white"
                            : "text-[var(--color-primary)]"
                          : "text-[#B7B7B7]"
                      }`}
                    >
                      {feature.active ? (
                        <SquarePlus className="w-5 h-5 text-[var(--color-secondary)]" />
                      ) : (
                        <SquareMinus className="w-5 h-5 text-gray-300" />
                      )}
                      {feature.name}

                      {index !== plan.features.length - 1 && (
                        <div
                          className={`absolute bottom-0 left-0 h-px ${
                            id === 3
                              ? "bg-[var(--color-border)]"
                              : "bg-[var(--color-text)]"
                          } w-[40%]`}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {id === 3 ? (
                <CustomButton variant="whiteTransparent">
                  Order now
                </CustomButton>
              ) : (
                <CustomButton variant="white">Order now</CustomButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
