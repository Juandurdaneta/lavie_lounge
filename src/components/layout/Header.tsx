"use client";

import { cn } from "@/lib/utils/cn";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  isLink?: boolean;
};

const leftNavLinks: NavLink[] = [
  { href: "#about", label: "ABOUT" },
  { href: "#gallery", label: "GALLERY" },
];

const rightNavLinks: NavLink[] = [
  { href: "/apply", label: "MEMBERSHIP", isLink: true },
];

/**
 * Elegant Header component with scroll effects
 * Features smooth backdrop blur on scroll
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-navy/90 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      )}
    >
      <nav
        className="section-container flex items-center justify-between h-20 lg:h-24"
        aria-label="Main navigation"
      >
        {/* Left Navigation */}
        <div className="hidden lg:flex items-center gap-10 flex-1">
          {leftNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-sans font-medium tracking-ultra-wide text-gold/80 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center hover:opacity-80 transition-opacity"
        >
          <span className="font-display text-2xl lg:text-3xl font-semibold tracking-extra-wide text-gold leading-tight">
            LA VIE
          </span>
          <span className="font-display text-xl lg:text-2xl font-semibold tracking-extra-wide text-gold leading-tight -mt-1">
            LOUNGE
          </span>
        </Link>

        {/* Right Navigation */}
        <div className="hidden lg:flex items-center justify-end gap-10 flex-1">
          {rightNavLinks.map((link) =>
            link.isLink ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-sans font-medium tracking-ultra-wide text-gold/80 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-sans font-medium tracking-ultra-wide text-gold/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gold hover:text-gold-light transition-colors absolute right-4"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-navy-dark/95 backdrop-blur-md border-t border-gold/10"
          >
            <div className="section-container py-8 flex flex-col items-center gap-6">
              {[...leftNavLinks, ...rightNavLinks].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.isLink ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-sans font-medium tracking-ultra-wide text-gold/80 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-sans font-medium tracking-ultra-wide text-gold/80 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
