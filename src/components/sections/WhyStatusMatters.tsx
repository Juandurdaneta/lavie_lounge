"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArtDecoPattern, ArtDecoDivider } from "@/components/decorative/ArtDecoPattern";
import { useScrollAnimation, scrollAnimationVariants } from "@/hooks/useScrollAnimation";

/**
 * Why Status Matters Section
 * Explains the value proposition of La Vie Lounge
 */
export function WhyStatusMatters() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="why"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="why-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light via-navy to-navy-dark" />
      <ArtDecoPattern variant="chevrons" opacity={0.02} />

      <div className="relative section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scrollAnimationVariants.staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Section heading */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="text-center mb-16"
          >
            <h2
              id="why-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory tracking-wide mb-6"
            >
              Why Status Matters
            </h2>
            <ArtDecoDivider />
          </motion.div>

          {/* Main content */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="space-y-8 text-center"
          >
            <p className="text-lg md:text-xl text-ivory/80 leading-relaxed">
              La Vie Lounge is a private business club for six and seven figure professionals
              who treat their time, relationships, and reputation as their most valuable assets.
            </p>

            <p className="text-lg md:text-xl text-ivory/70 leading-relaxed">
              This exclusive, invite-only evening brings together established founders,
              owners, and investors in a curated environment where every guest is vetted,
              every introduction is intentional, and every conversation has room to turn into
              strategy, capital, or collaboration.
            </p>

            {/* Highlighted quote */}
            <motion.div
              variants={scrollAnimationVariants.scaleIn}
              className="py-8 px-6 md:px-12 my-12 border-l-2 border-r-2 border-gold/40"
            >
              <p className="font-accent text-2xl md:text-3xl italic text-gold leading-relaxed">
                It is not about being seen everywhere.
              </p>
            </motion.div>

            <p className="text-lg md:text-xl text-ivory/80 leading-relaxed">
              It is about building a community that knows your name, understands your ambitions,
              and quietly opens the right doors as you grow.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="text-center mt-12"
          >
            <Link href="/apply">
              <Button variant="outline" size="large">
                Request an Invitation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
