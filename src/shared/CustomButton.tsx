import { cn } from "@/utils/utils";
import React from "react";

type Variant = "primary" | "secondary";

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
