"use client";

import { useInView, UseInViewOptions } from "framer-motion";
import { useRef, RefObject } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  margin?: string;
}

/**
 * Custom hook for scroll-triggered animations
 * Returns a ref and inView state for Framer Motion animations
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
): { ref: RefObject<T>; isInView: boolean } {
  const { threshold = 0.1, once = true, margin = "-100px 0px" } = options;

  const ref = useRef<T>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
    margin: margin as UseInViewOptions["margin"],
  });

  return { ref: ref as RefObject<T>, isInView };
}

/**
 * Common animation variants for scroll reveals
 */
export const scrollAnimationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
};
