import { cn } from "@/utils/utils";
import React from "react";

type Variant = "primary" | "secondary" | "outline" | "danger";

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
    bg-gray-100 text-gray-800 border border-gray-300
    hover:bg-gray-200
  `,
  outline: `
    px-7 py-[14px] text-sm font-semibold rounded-lg transition-all
    bg-transparent text-gray-800 border border-gray-400
    hover:bg-gray-100
  `,
  danger: `
    px-7 py-[14px] text-sm font-semibold rounded-lg transition-all
    bg-red-600 text-white border border-transparent
    hover:bg-transparent hover:text-red-600 hover:border-red-600
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
