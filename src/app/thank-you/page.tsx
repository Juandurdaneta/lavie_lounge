"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  ArtDecoPattern,
  ArtDecoDivider,
  ArtDecoSunburst,
  GoldShimmerLine,
} from "@/components/decorative/ArtDecoPattern";
import { Check } from "lucide-react";

/**
 * Thank You Page
 * Displayed after successful form submission
 */
export default function ThankYouPage() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after animation
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center py-24">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-navy-dark via-navy to-richBlack -z-10" />
      <ArtDecoPattern variant="sunburst" opacity={0.02} className="fixed -z-10" />

      {/* Animated sunburst */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] -z-5"
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArtDecoSunburst className="w-full h-full" />
      </motion.div>

      {/* Radial glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gold opacity-30 pointer-events-none -z-5" />

      {/* Gold confetti/sparkle animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold"
              style={{
                left: `${Math.random() * 100}%`,
                top: -20,
                rotate: 45,
              }}
              initial={{ y: -20, opacity: 1 }}
              animate={{
                y: window?.innerHeight ? window.innerHeight + 20 : 1000,
                opacity: 0,
                rotate: 45 + Math.random() * 360,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 1.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="section-container relative">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Success icon */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 border-2 border-gold flex items-center justify-center"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Check className="w-10 h-10 text-gold -rotate-45" />
            </motion.div>
          </motion.div>

          {/* Shimmer line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <GoldShimmerLine className="max-w-xs mx-auto" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your Application Has Been Received
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <ArtDecoDivider className="mb-8" />
          </motion.div>

          {/* Body copy */}
          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-lg text-ivory/80 leading-relaxed">
              Thank you for your interest in La Vie Lounge. Our team will review your
              application and reach out within 5 business days if there's alignment.
            </p>

            <p className="font-accent text-xl italic text-gold">
              In the meantime, know that your next chapter may have just begun.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link href="/">
              <Button variant="outline" size="large">
                Return to Home
              </Button>
            </Link>
          </motion.div>

          {/* Decorative bottom element */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-12 h-12 border border-gold/40 rotate-45" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-gold/60 rotate-45" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
