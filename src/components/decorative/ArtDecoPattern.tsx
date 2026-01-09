"use client";

import { cn } from "@/lib/utils/cn";

interface ArtDecoPatternProps {
  className?: string;
  variant?: "diamonds" | "sunburst" | "chevrons" | "lines" | "fan";
  opacity?: number;
}

/**
 * Art Deco decorative patterns for backgrounds
 * Inspired by the geometric elegance of the 1920s Gatsby era
 */
export function ArtDecoPattern({
  className,
  variant = "fan",
  opacity = 0.15,
}: ArtDecoPatternProps) {
  // Use the fan pattern image as default
  if (variant === "fan") {
    return (
      <div
        className={cn("absolute inset-0 pointer-events-none", className)}
        style={{
          backgroundImage: `url("/images/PATTERN-1.webp")`,
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
          opacity,
        }}
        aria-hidden="true"
      />
    );
  }

  const patterns = {
    // Diamond/rhombus pattern
    diamonds: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23C5B082' stroke-width='0.5'/%3E%3C/svg%3E")`,

    // Sunburst/radial pattern
    sunburst: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C5B082' stroke-width='0.5'%3E%3Cline x1='50' y1='0' x2='50' y2='100'/%3E%3Cline x1='0' y1='50' x2='100' y2='50'/%3E%3Cline x1='0' y1='0' x2='100' y2='100'/%3E%3Cline x1='100' y1='0' x2='0' y2='100'/%3E%3Cline x1='25' y1='0' x2='75' y2='100'/%3E%3Cline x1='75' y1='0' x2='25' y2='100'/%3E%3Cline x1='0' y1='25' x2='100' y2='75'/%3E%3Cline x1='0' y1='75' x2='100' y2='25'/%3E%3C/g%3E%3C/svg%3E")`,

    // Chevron/arrow pattern
    chevrons: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L20 0 L40 20 M0 40 L20 20 L40 40' fill='none' stroke='%23C5B082' stroke-width='0.5'/%3E%3C/svg%3E")`,

    // Horizontal lines pattern
    lines: `url("data:image/svg+xml,%3Csvg width='40' height='8' viewBox='0 0 40 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='4' x2='40' y2='4' stroke='%23C5B082' stroke-width='0.5'/%3E%3C/svg%3E")`,
  };

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        backgroundImage: patterns[variant],
        backgroundSize: variant === "sunburst" ? "100px 100px" : "60px 60px",
        opacity,
      }}
      aria-hidden="true"
    />
  );
}

/**
 * Decorative Art Deco divider line
 */
export function ArtDecoDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3", className)}
      aria-hidden="true"
    >
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <div className="w-2 h-2 rotate-45 border border-gold/60" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

/**
 * Art Deco frame corners for cards or sections
 */
export function ArtDecoFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/40" />
      {children}
    </div>
  );
}

/**
 * Art Deco compass/sunburst decoration - matches laviefl.com style
 */
export function ArtDecoSunburst({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("text-gold/20", className)}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor">
        {/* Main radial lines - thicker for primary directions */}
        {Array.from({ length: 32 }).map((_, i) => {
          const angle = (i * 11.25 * Math.PI) / 180;
          const isPrimary = i % 8 === 0;
          const isSecondary = i % 4 === 0;
          const innerRadius = isPrimary ? 15 : isSecondary ? 25 : 35;
          const x1 = 100 + innerRadius * Math.cos(angle);
          const y1 = 100 + innerRadius * Math.sin(angle);
          const x2 = 100 + 95 * Math.cos(angle);
          const y2 = 100 + 95 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth={isPrimary ? 0.8 : isSecondary ? 0.5 : 0.3}
            />
          );
        })}
        {/* Center diamond */}
        <path
          d="M100 85 L115 100 L100 115 L85 100 Z"
          strokeWidth="0.8"
        />
        {/* Inner decorative diamond */}
        <path
          d="M100 92 L108 100 L100 108 L92 100 Z"
          strokeWidth="0.5"
        />
        {/* Concentric arcs for compass feel */}
        <circle cx="100" cy="100" r="45" strokeWidth="0.3" />
        <circle cx="100" cy="100" r="70" strokeWidth="0.4" />
        {/* Outer decorative ring */}
        <circle cx="100" cy="100" r="95" strokeWidth="0.3" />
      </g>
    </svg>
  );
}

/**
 * Animated gold shimmer line
 */
export function GoldShimmerLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-px w-full relative overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
        style={{ backgroundSize: "200% 100%" }}
      />
    </div>
  );
}
