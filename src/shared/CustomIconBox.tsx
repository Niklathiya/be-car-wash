import Image, { StaticImageData } from "next/image";
import React from "react";

interface CustomIconBoxProps {
  primarySrc: StaticImageData | string;
  secondarySrc: StaticImageData | string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

const CustomIconBox: React.FC<CustomIconBoxProps> = ({
  primarySrc,
  secondarySrc,
  alt,
  className = "",
  wrapperClassName = "",
}) => {
  return (
    <div
      className={`relative group w-30 h-30 border border-[var(--color-border)] rounded-2xl flex items-center justify-center hover:border-[var(--color-secondary)] transition-all duration-300 ${wrapperClassName}`}
    >
      <Image
        src={primarySrc}
        alt={alt}
        className={`absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0 ${className}`}
      />
      <Image
        src={secondarySrc}
        alt={`${alt} Hover`}
        className={`absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${className}`}
      />
    </div>
  );
};

export default CustomIconBox;
