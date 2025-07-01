import React from "react";
import CopyrightFooter from "./CopyrightFooter";
import CustomButton from "@/shared/CustomButton";
import Image from "next/image";
import { Images as IMAGE } from "@/shared/Images";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F0F4F4] relative">
        <div className=" bg-white rounded-t-4xl py-20">
          <div className="custom-component-container">
            <div className="w-full flex justify-between items-center mb-26">
              <div>
                <h3 className="font-bold text-[var(--color-primary)] text-2xl mb-8 w-2/3">
                  Want to get fast and detailed car washing?
                </h3>
                <h2 className="font-bold text-[#C8AFF5] text-5xl">
                  Book it now!
                </h2>
              </div>
              <div>
                <CustomButton variant="secondary">Start now</CustomButton>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-1/4 h-1/4 top-[-25%] -translate-y-[-50%]">
                <Image src={IMAGE.Footer} alt="footer" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-[var(--color-primary)]">
                <p>Call us if you need any help</p>{" "}
                <h3 className="font-bold text-2xl mt-4">+61 (0) 383 766 284</h3>
              </div>
              <Link href="/">
                <Image src={IMAGE.FooterLogo} alt="logo"></Image>
              </Link>
              <p className="text-[var(--color-primary)] w-1/6 text-justify">
                Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
              </p>
            </div>
          </div>
        </div>
      </footer>
      <CopyrightFooter />
    </>
  );
};

export default Footer;
