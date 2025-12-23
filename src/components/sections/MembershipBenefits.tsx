"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { ArtDecoPattern, ArtDecoDivider } from "@/components/decorative/ArtDecoPattern";
import { useScrollAnimation, scrollAnimationVariants } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const benefits = [
  "Members-only evenings in Miramar with an intimate community of 60 highly ambitious entrepreneurs.",
  "Intentional introductions, guided conversations, and unstructured time to let ideas come to life.",
  "A group of six and seven figure entrepreneurs you see often enough for trust, context, and collaboration to compound.",
  "Space to talk markets, deals, and elevating your life through specially curated nights.",
];

/**
 * Membership Benefits Section
 * Displays what members can expect from La Vie
 */
export function MembershipBenefits() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="membership"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="membership-heading"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-light" />
      <ArtDecoPattern variant="lines" opacity={0.03} />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border-t border-l border-gold/10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-b border-r border-gold/10" />

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
              id="membership-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory tracking-wide mb-6"
            >
              What Your La Vie Membership Includes
            </h2>
            <ArtDecoDivider className="mb-8" />
            <p className="text-lg text-ivory/70">
              La Vie is a single membership that gives you curated experiences with people
              operating at your level.
            </p>
          </motion.div>

          {/* Benefits introduction */}
          <motion.p
            variants={scrollAnimationVariants.fadeInUp}
            className="text-gold font-medium text-lg mb-8 text-center"
          >
            As a member, you can expect:
          </motion.p>

          {/* Benefits list */}
          <motion.ul
            variants={scrollAnimationVariants.staggerContainer}
            className="space-y-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                variants={scrollAnimationVariants.staggerItem}
                className="flex items-start gap-4 group"
              >
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gold/50 text-gold mt-0.5 group-hover:bg-gold/10 transition-colors">
                  <Check className="w-4 h-4" />
                </span>
                <p className="text-ivory/80 text-lg leading-relaxed">
                  {benefit}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Closing statement */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="text-center py-8 px-6 md:px-12 border-t border-b border-gold/20"
          >
            <p className="font-accent text-xl md:text-2xl italic text-ivory/90 leading-relaxed">
              Membership is built so that one decision upgrades how you spend your evenings,
              who you grow with, and where your next chapter quietly begins.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
