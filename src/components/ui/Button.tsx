import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "white";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-green text-white shadow-[0_6px_18px_rgba(16,179,75,0.28)] hover:bg-green-deep hover:shadow-[0_12px_26px_rgba(16,179,75,0.34)]",
  ghost:
    "bg-white text-ink border border-line hover:border-[#CFDCE8] hover:shadow-card-sm",
  white: "bg-white text-ink hover:shadow-[0_12px_26px_rgba(0,0,0,0.18)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-[22px] py-[13px] text-[15px]",
  lg: "px-7 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  external = true,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  external?: boolean;
}) {
  const classes = `inline-flex items-center gap-[9px] font-display font-semibold rounded-full border border-transparent transition-all duration-200 ease-out whitespace-nowrap hover:-translate-y-0.5 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
