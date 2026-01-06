"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArtDecoPattern, ArtDecoDivider } from "@/components/decorative/ArtDecoPattern";
import { useScrollAnimation, scrollAnimationVariants } from "@/hooks/useScrollAnimation";

/**
 * Meet The Team Section
 * Showcases the team behind La Vie Lounge
 */
export function MeetTheTeam() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="team"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="team-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
      <ArtDecoPattern variant="sunburst" opacity={0.02} />

      <div className="relative section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scrollAnimationVariants.staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Section heading */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="text-center mb-16"
          >
            <h2
              id="team-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory tracking-wide mb-6"
            >
              Meet The Team
            </h2>
            <ArtDecoDivider />
          </motion.div>

          {/* Team photo */}
          <motion.div
            variants={scrollAnimationVariants.scaleIn}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-gold/20"
          >
            <Image
              src="/images/team.jpg"
              alt="La Vie Lounge Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              priority={false}
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </motion.div>

          {/* Team description */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-lg md:text-xl text-ivory/80 leading-relaxed max-w-3xl mx-auto">
              Behind La Vie Lounge is a team of seasoned professionals dedicated to curating
              exceptional experiences and meaningful connections for our members.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
