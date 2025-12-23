"use client";

import { cn } from "@/lib/utils/cn";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart" | "style"> {
  variant?: "primary" | "outline";
  size?: "default" | "large";
  isLoading?: boolean;
  children: React.ReactNode;
}

/**
 * Elegant Button component with Art Deco styling
 * Primary: Gold background with dark text
 * Outline: Transparent with gold border, fills on hover
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "outline",
      size = "default",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "relative inline-flex items-center justify-center",
      "font-sans font-medium uppercase tracking-extra-wide",
      "transition-all duration-500 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "overflow-hidden group"
    );

    const variantStyles = {
      primary: cn(
        "bg-gold text-navy hover:bg-gold-light",
        "shadow-sm hover:shadow-gold"
      ),
      outline: cn(
        "bg-transparent text-gold border border-gold/60",
        "hover:bg-gold/10 hover:border-gold"
      ),
    };

    const sizeStyles = {
      default: "px-6 py-3 text-sm",
      large: "px-8 py-4 text-base",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        {...(props as HTMLMotionProps<"button">)}
      >
        {/* Shimmer effect on hover */}
        <span
          className={cn(
            "absolute inset-0 -translate-x-full group-hover:translate-x-full",
            "bg-gradient-to-r from-transparent via-white/10 to-transparent",
            "transition-transform duration-1000 ease-out"
          )}
          aria-hidden="true"
        />

        {/* Button content */}
        <span className="relative flex items-center gap-2">
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Processing...</span>
            </>
          ) : (
            children
          )}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
