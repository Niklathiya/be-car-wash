"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Images as IMAGE } from "@/shared/Images";

const CopyrightFooter = () => {
  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-[#ececec] py-8 bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-500 ease-in-out">
      <div className="custom-component-container flex items-center justify-between">
        <p>
          © 2025{" "}
          <Link
            href="/"
            className="hover:underline hover:text-[var(--color-secondary)]"
          >
            Be car wash
          </Link>{" "}
          | All Rights Reserved |{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="hover:underline hover:text-[var(--color-secondary)]"
          >
            Powered by NextJs
          </Link>
        </p>

        <div
          onClick={handleScrollTop}
          className="relative cursor-pointer group"
        >
          <Image
            src={IMAGE.BackToTop}
            alt="back to top"
            className="w-[60px] h-[60px] object-contain"
          />

          <div
            className="absolute top-[-50%] -translate-y-[-10%] rotate-180
             opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
             transition-all duration-500 ease-in-out"
          >
            <Image src={IMAGE.Headlight} alt="light" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CopyrightFooter;
