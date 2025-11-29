import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-white hover:bg-primaryDark focus-visible:outline-primary",
  secondary:
    "bg-surface text-primary border border-border hover:border-primary focus-visible:outline-primary",
  ghost:
    "bg-transparent text-text hover:text-primary focus-visible:outline-primary",
};

export const Button = ({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
