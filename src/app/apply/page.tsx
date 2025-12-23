import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { ArtDecoPattern, ArtDecoDivider } from "@/components/decorative/ArtDecoPattern";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply for Membership",
  description:
    "Request an invitation to join La Vie Lounge, South Florida's exclusive private business club for six and seven figure entrepreneurs.",
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Application Page
 * Membership application form with elegant styling
 */
export default function ApplyPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-16">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-navy-dark via-navy to-richBlack -z-10" />
      <ArtDecoPattern variant="diamonds" opacity={0.02} className="fixed -z-10" />

      <div className="section-container">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold/70 hover:text-gold transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-wide">Back to Home</span>
        </Link>

        {/* Page header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory tracking-wide mb-6">
            Request Your Invitation
          </h1>

          <ArtDecoDivider className="mb-8" />

          <p className="text-lg text-ivory/70 leading-relaxed">
            Tell us about yourself and what you're building. Our team will review your
            application and reach out if there's alignment.
          </p>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
}
