"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArtDecoSunburst } from "@/components/decorative/ArtDecoPattern";

/**
 * Hero Section - Full viewport with dramatic Art Deco styling
 * "Your Network Is Your Net Worth. This Is Where You Build Both."
 */
export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-light" />


      {/* Animated sunburst decoration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px]"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArtDecoSunburst className="w-full h-full animate-slow-pulse" />
      </motion.div>

      {/* Radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gold pointer-events-none" />

      {/* Content */}
      <div className="relative text-center py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full mx-auto"
        >
          {/* Pre-headline */}
          <motion.p
            className="text-gold/80 font-sans text-sm uppercase tracking-ultra-wide mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            La Vie Lounge
          </motion.p>

          {/* Main headline */}
          <h1
            id="hero-heading"
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-ivory leading-tight tracking-wide uppercase max-w-6xl mx-auto px-4"
          >
            <span className="block whitespace-nowrap">Your Network Is Your Net Worth.</span>
            <span className="block pt-2 text-gold-gradient whitespace-nowrap">
              This Is Where You Build Both.
            </span>
          </h1>

          {/* Decorative divider */}
          <motion.div
            className="flex items-center justify-center gap-4 my-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-3 h-3 rotate-45 border border-gold" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/60" />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-ivory/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            A private, social business club where entrepreneurs connect, share strategy,
            and stem opportunities in an intimate, curated setting.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="/apply">
              <Button variant="primary" size="large">
                Request an Invitation
              </Button>
            </Link>

            <p className="text-ivory/50 text-sm tracking-wide">
              Capped at 60 members.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border border-gold/40 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 bg-gold/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
