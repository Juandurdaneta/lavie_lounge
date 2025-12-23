/**
 * Application Types for La Vie Lounge
 */

// Revenue range options for the application form
export type RevenueRange =
  | "$100K - $250K"
  | "$250K - $500K"
  | "$500K - $1M"
  | "$1M - $5M"
  | "$5M+";

// Referral source options
export type ReferralSource =
  | "Referral"
  | "Social Media"
  | "Google Search"
  | "Event"
  | "Other";

// Application form data structure
export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  role: string;
  website?: string;
  revenueRange: RevenueRange;
  currentlyBuilding: string;
  hopesToGain: string;
  referralSource?: ReferralSource;
  // Honeypot field for spam protection
  honeypot?: string;
}

// Form submission response
export interface SubmissionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

// FAQ item structure
export interface FAQItem {
  question: string;
  answer: string;
}

// Membership benefit structure
export interface MembershipBenefit {
  id: string;
  text: string;
}

// Step card for Join/Discover/Connect section
export interface StepCard {
  id: string;
  title: string;
  description: string;
  icon: "join" | "discover" | "connect";
}
