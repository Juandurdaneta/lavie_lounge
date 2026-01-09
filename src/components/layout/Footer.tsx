"use client";

import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { ArtDecoDivider } from "@/components/decorative/ArtDecoPattern";

/**
 * Elegant Footer component with Art Deco styling
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-gold/10">
      <div className="section-container py-12">
        {/* Decorative divider */}
        <ArtDecoDivider className="mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-semibold tracking-wide text-gold hover:text-gold-light transition-colors"
          >
            La Vie Lounge
          </Link>

          {/* Location */}
          <p className="text-ivory/50 text-sm">
            Miramar, Florida
          </p>

          {/* Copyright */}
          <p className="text-ivory/40 text-sm">
            &copy; {currentYear} La Vie Lounge. All rights reserved.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          <Link
            href="/apply"
            className="text-gold/60 hover:text-gold transition-colors"
          >
            Apply for Membership
          </Link>
          <span className="text-gold/30 hidden sm:inline" aria-hidden="true">|</span>
          <a
            href="mailto:info@laviefl.com"
            className="text-ivory/50 hover:text-gold transition-colors"
          >
            info@laviefl.com
          </a>
        </div>

        {/* Elegant bottom decoration */}
        <div className="mt-10 flex justify-center">
          <div className="w-12 h-12 border border-gold/20 rotate-45" />
        </div>
      </div>
    </footer>
  );
}
