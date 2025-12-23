import { z } from "zod";

/**
 * Validation schema for the La Vie Lounge membership application
 * Implements comprehensive validation with clear error messages
 */
export const applicationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s\-'\.]+$/,
      "Full name can only contain letters, spaces, hyphens, apostrophes, and periods"
    ),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters")
    .regex(
      /^[\d\s\+\-\(\)]+$/,
      "Phone number can only contain digits, spaces, and formatting characters"
    ),

  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(200, "Company name must be less than 200 characters"),

  role: z
    .string()
    .min(2, "Role must be at least 2 characters")
    .max(100, "Role must be less than 100 characters"),

  website: z
    .string()
    .url("Please enter a valid URL (including https://)")
    .optional()
    .or(z.literal("")),

  revenueRange: z.enum(
    ["$100K - $250K", "$250K - $500K", "$500K - $1M", "$1M - $5M", "$5M+"],
    {
      errorMap: () => ({ message: "Please select your annual revenue range" }),
    }
  ),

  currentlyBuilding: z
    .string()
    .min(50, "Please provide at least 50 characters about what you're building")
    .max(2000, "Please keep your response under 2000 characters"),

  hopesToGain: z
    .string()
    .min(50, "Please provide at least 50 characters about what you hope to gain")
    .max(2000, "Please keep your response under 2000 characters"),

  referralSource: z
    .enum(["Referral", "Social Media", "Google Search", "Event", "Other"])
    .optional(),

  // Honeypot field - should always be empty for legitimate submissions
  honeypot: z.string().max(0, "Invalid submission").optional(),
});

export type ApplicationSchemaType = z.infer<typeof applicationSchema>;

/**
 * Revenue range options for the select field
 */
export const revenueRangeOptions = [
  { value: "$100K - $250K", label: "$100K - $250K" },
  { value: "$250K - $500K", label: "$250K - $500K" },
  { value: "$500K - $1M", label: "$500K - $1M" },
  { value: "$1M - $5M", label: "$1M - $5M" },
  { value: "$5M+", label: "$5M+" },
] as const;

/**
 * Referral source options for the select field
 */
export const referralSourceOptions = [
  { value: "", label: "Select how you heard about us..." },
  { value: "Referral", label: "Referral" },
  { value: "Social Media", label: "Social Media" },
  { value: "Google Search", label: "Google Search" },
  { value: "Event", label: "Event" },
  { value: "Other", label: "Other" },
] as const;
