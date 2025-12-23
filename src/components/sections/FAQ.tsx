"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ArtDecoPattern, ArtDecoDivider } from "@/components/decorative/ArtDecoPattern";
import { useScrollAnimation, scrollAnimationVariants } from "@/hooks/useScrollAnimation";

const faqItems = [
  {
    question: "What is La Vie Lounge?",
    answer:
      "La Vie is a private business club in Miramar for six and seven figure entrepreneurs. Members meet in an intimate, hosted setting to talk strategy, share opportunities, and build real relationships.",
  },
  {
    question: "Where and how often do you meet?",
    answer:
      "We host members-only gatherings, running from afternoon into the evening so you can join around your schedule. Exact times and dates are shared with approved members and qualified applicants.",
  },
  {
    question: "Who are the members?",
    answer:
      "Founders, owners, investors, and leaders across South Florida generating at least six figures in annual revenue and value thoughtful conversation over casual pitching.",
  },
  {
    question: "How many members do you accept?",
    answer:
      "Founding membership is capped at 60 entrepreneurs. We keep the community intentionally small so trust can compound.",
  },
  {
    question: "Can I bring guests?",
    answer:
      "You receive one guest pass each month, and any additional guest access is available at an extra cost.",
  },
  {
    question: "What is the investment?",
    answer:
      "Membership is a yearly fee designed to be a clear business decision, not a vanity expense. Current founding member rates are shared during the application process.",
  },
  {
    question: "Is there any guarantee?",
    answer:
      "Yes. If you do not make at least one valuable business connection in your first 60 days, we refund your membership fee. We want every member to feel the return on being in the room.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "Our team reviews your answers, looks at your business and goals, and follows up if there is a likely fit. If aligned, you receive an invitation to join the community and attend your first La Vie experience.",
  },
];

/**
 * FAQ Section
 * Accordion-style frequently asked questions
 */
export function FAQ() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy-dark" />
      <ArtDecoPattern variant="diamonds" opacity={0.02} />

      <div className="relative section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scrollAnimationVariants.staggerContainer}
          className="max-w-3xl mx-auto"
        >
          {/* Section heading */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="text-center mb-16"
          >
            <h2
              id="faq-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory tracking-wide mb-6"
            >
              Frequently Asked Questions
            </h2>
            <ArtDecoDivider />
          </motion.div>

          {/* Accordion */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="mb-12"
          >
            <Accordion items={faqItems} />
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={scrollAnimationVariants.fadeInUp}
            className="text-center"
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
