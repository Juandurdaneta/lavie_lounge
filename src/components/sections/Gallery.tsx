"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArtDecoDivider } from "@/components/decorative/ArtDecoPattern";
import { useScrollAnimation, scrollAnimationVariants } from "@/hooks/useScrollAnimation";

// Gallery images - update paths after adding images to public folder
const galleryImages = [
  {
    src: "/images/gallery-5.jpg",
    alt: "Elegant venue setting",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Exclusive lounge atmosphere",
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "Premium networking environment",
  },
];

/**
 * Gallery Section
 * Showcases the ambiance and atmosphere of La Vie Lounge events
 */
export function Gallery() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-light" />

      <div className="relative section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scrollAnimationVariants.staggerContainer}
        >
          {/* Section heading */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="text-center mb-16"
          >
            <h2
              id="gallery-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory tracking-wide mb-6"
            >
              The Experience
            </h2>
            <ArtDecoDivider />
            <p className="text-ivory/70 mt-6 max-w-2xl mx-auto">
              An intimate setting designed for meaningful connections, strategic conversations,
              and elevated networking experiences.
            </p>
          </motion.div>

          {/* Gallery grid - uniform layout */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.src}
                variants={scrollAnimationVariants.scaleIn}
                className="relative overflow-hidden rounded-sm border border-gold/10 group aspect-[4/3]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
