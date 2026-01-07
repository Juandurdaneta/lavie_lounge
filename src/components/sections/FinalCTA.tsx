"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArtDecoSunburst, GoldShimmerLine } from "@/components/decorative/ArtDecoPattern";
import { useScrollAnimation, scrollAnimationVariants } from "@/hooks/useScrollAnimation";

/**
 * Final CTA Section - "Join The Community"
 * The crescendo of the landing page with maximum visual impact
 */
export function FinalCTA() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Dramatic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-dark to-richBlack" />


      {/* Animated sunburst */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] md:w-[1400px] md:h-[1400px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ArtDecoSunburst className="w-full h-full" />
      </motion.div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-gold opacity-50 pointer-events-none" />

      <div className="relative section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scrollAnimationVariants.staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative top line */}
          <motion.div
            variants={scrollAnimationVariants.scaleIn}
            className="mb-12"
          >
            <GoldShimmerLine className="max-w-md mx-auto" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="cta-heading"
            variants={scrollAnimationVariants.fadeInUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory tracking-wide mb-8"
          >
            Join The Community
          </motion.h2>

          {/* Body copy */}
          <motion.p
            variants={scrollAnimationVariants.fadeInUp}
            className="text-lg md:text-xl text-ivory/80 leading-relaxed mb-8"
          >
            If you know your next chapter depends on the room you are in, choose a private
            community of founders, owners, and investors committed to building serious companies
            and leading meaningful lives in South Florida.
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={scrollAnimationVariants.fadeInUp}
            className="font-accent text-2xl md:text-3xl italic text-gold mb-12"
          >
            Choose La Vie
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={scrollAnimationVariants.scaleIn}>
            <Link href="/apply">
              <Button variant="primary" size="large">
                Request an Invitation
              </Button>
            </Link>
          </motion.div>

          {/* Decorative bottom element */}
          <motion.div
            variants={scrollAnimationVariants.fadeIn}
            className="mt-16 flex justify-center"
          >
            <div className="relative">
              <div className="w-16 h-16 border border-gold/40 rotate-45" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-gold/60 rotate-45" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
