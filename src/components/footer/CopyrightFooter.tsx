'use client'
import Link from "next/link";
import React from "react";
import { ChevronUp } from "lucide-react";

const CopyrightFooter = () => {
  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-[#ececec] py-8 bg-white">
      <div className="custom-component-container flex items-center justify-between">
        <p className="text-[var(--color-primary)]">
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

        <button
          onClick={handleScrollTop}
          className="border border-gray-400 rounded-md p-2 hover:bg-gray-100 transition cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </footer>
  );
};

export default CopyrightFooter;
