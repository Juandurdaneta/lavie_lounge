"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useScrollAnimation, scrollAnimationVariants } from "@/hooks/useScrollAnimation";

/**
 * Meet The Team Section
 * Showcases the team behind La Vie Lounge - styled like laviefl.com
 */
export function MeetTheTeam() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="team"
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="team-heading"
    >
      {/* Pattern Background - full section, zoomed in */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("/images/PATTERN-1.webp")`,
          backgroundSize: "450px 450px",
          backgroundRepeat: "repeat",
          backgroundColor: "#1a2a3a",
        }}
      />

      <div className="relative section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scrollAnimationVariants.staggerContainer}
        >
          {/* Two-column layout: Photo + Content Card */}
          <div className="flex flex-col lg:flex-row items-stretch gap-0">
            {/* Team photo - left side */}
            <motion.div
              variants={scrollAnimationVariants.fadeInUp}
              className="relative w-full lg:w-3/5 aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
            >
              <Image
                src="/images/team.jpg"
                alt="La Vie Lounge Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={false}
              />
            </motion.div>

            {/* Content card - right side, overlapping */}
            <motion.div
              variants={scrollAnimationVariants.fadeInUp}
              className="relative lg:-ml-20 lg:mt-16 lg:mb-16 bg-navy p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            >
              <h2
                id="team-heading"
                className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-gold tracking-wide mb-6"
              >
                Meet The Team
              </h2>

              <p className="text-ivory/80 leading-relaxed mb-8 max-w-md">
                Behind La Vie Lounge is a team of seasoned professionals dedicated to curating
                exceptional experiences and meaningful connections for our members.
              </p>

              <div>
                <Link href="/apply">
                  <Button variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
