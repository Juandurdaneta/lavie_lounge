"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArtDecoDivider, ArtDecoFrame } from "@/components/decorative/ArtDecoPattern";
import { useScrollAnimation, scrollAnimationVariants } from "@/hooks/useScrollAnimation";
import { UserPlus, Compass, Users } from "lucide-react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

function StepCard({ number, title, description, icon, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      variants={scrollAnimationVariants.staggerItem}
      className="elegant-card p-8 md:p-10"
    >
      <ArtDecoFrame className="h-full">
        <div className="p-4">
          {/* Icon and number */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 flex items-center justify-center border border-gold/40 text-gold">
              {icon}
            </div>
            <span className="font-display text-4xl text-gold/30 font-semibold">
              {String(number).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-semibold text-ivory mb-4 tracking-wide">
            {title}
          </h3>

          {/* Description */}
          <p className="text-ivory/70 leading-relaxed">
            {description}
          </p>
        </div>
      </ArtDecoFrame>
    </motion.div>
  );
}

/**
 * Join. Discover. Connect. Section
 * Three-step process displayed as elegant cards
 */
export function JoinDiscoverConnect() {
  const { ref, isInView } = useScrollAnimation();

  const steps = [
    {
      number: 1,
      title: "Join",
      description:
        "Request an invitation and share who you are and what you are building. If there is alignment, you are invited into a community of entrepreneurs who take their time, reputation, and relationships seriously.",
      icon: <UserPlus className="w-6 h-6" />,
    },
    {
      number: 2,
      title: "Discover",
      description:
        "Your first night at La Vie is not another networker. You step into a private space for visionaries. A space where work, lifestyle, and unique experiences blend into one night that defines the trajectory for your business.",
      icon: <Compass className="w-6 h-6" />,
    },
    {
      number: 3,
      title: "Connect",
      description:
        "Conversations move from small talk to strategy. La Vie becomes the exclusive experience that keeps you informed, inspired, and surrounded by the right people.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy-dark" />

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
              id="process-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory tracking-wide mb-6"
            >
              Join. Discover. Connect.
            </h2>
            <ArtDecoDivider />
          </motion.div>

          {/* Step cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>

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
