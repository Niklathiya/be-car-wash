import { cn } from "@/utils/utils";
import React from "react";

type Variant = "primary" | "secondary" | "white" | "whiteTransparent";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
}

const variantClasses: Record<Variant, string> = {
  primary: `
    px-7 py-[14px] text-sm font-semibold rounded-lg transition-all
    bg-[var(--color-secondary)] text-[var(--color-primary)] border border-transparent cursor-pointer
    hover:bg-transparent hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)]
  `,
  secondary: `
    px-7 py-[14px] text-sm font-semibold rounded-lg transition-all
    bg-[var(--color-secondary)] text-[var(--color-primary)] border border-transparent cursor-pointer
    hover:bg-[#A5FDD4]
  `,
  white: `
    px-7 py-[14px] text-sm font-semibold rounded-lg transition-all
    bg-white text-[var(--color-primary)] border border-[var(--color-secondary)] cursor-pointer
    hover:bg-[var(--color-secondary)]
  `,
  whiteTransparent: `
    px-7 py-[14px] text-sm font-semibold rounded-lg transition-all
    bg-transparent text-white border border-[var(--color-secondary)] cursor-pointer
    hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)]
  `,
};

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "primary",
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(variantClasses[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
