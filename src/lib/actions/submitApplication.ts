"use server";

import { applicationSchema } from "@/lib/validations/applicationSchema";
import type { SubmissionResponse } from "@/types";

// Simple in-memory rate limiting store
// In production, use Redis or a database
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const RATE_LIMIT_MAX = 3; // Max 3 submissions per hour per IP

/**
 * Check if the IP has exceeded rate limits
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record) {
    rateLimitStore.set(ip, { count: 1, timestamp: now });
    return true;
  }

  // Reset if window has passed
  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, timestamp: now });
    return true;
  }

  // Check if limit exceeded
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  // Increment count
  record.count++;
  return true;
}

/**
 * Server action to handle membership application submissions
 * Implements validation, spam protection, and rate limiting
 */
export async function submitApplication(
  formData: FormData,
  clientIp?: string
): Promise<SubmissionResponse> {
  try {
    // Rate limiting check
    const ip = clientIp || "unknown";
    if (!checkRateLimit(ip)) {
      return {
        success: false,
        message:
          "Too many submission attempts. Please try again later.",
      };
    }

    // Extract form data
    const rawData = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      companyName: formData.get("companyName") as string,
      role: formData.get("role") as string,
      website: formData.get("website") as string,
      revenueRange: formData.get("revenueRange") as string,
      currentlyBuilding: formData.get("currentlyBuilding") as string,
      hopesToGain: formData.get("hopesToGain") as string,
      referralSource: formData.get("referralSource") as string,
      honeypot: formData.get("honeypot") as string,
    };

    // Honeypot check - if filled, it's likely a bot
    if (rawData.honeypot && rawData.honeypot.length > 0) {
      // Silently reject but return success to not tip off bots
      console.log("Honeypot triggered - likely bot submission");
      return {
        success: true,
        message: "Application received. We'll be in touch soon.",
      };
    }

    // Validate with Zod
    const validationResult = applicationSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errors: Record<string, string[]> = {};
      validationResult.error.errors.forEach((err) => {
        const path = err.path[0] as string;
        if (!errors[path]) {
          errors[path] = [];
        }
        errors[path].push(err.message);
      });

      return {
        success: false,
        message: "Please correct the errors below.",
        errors,
      };
    }

    const validatedData = validationResult.data;

    // In production, you would:
    // 1. Save to database
    // 2. Send notification email
    // 3. Integrate with CRM
    // 4. Verify reCAPTCHA token

    console.log("Valid application received:", {
      fullName: validatedData.fullName,
      email: validatedData.email,
      company: validatedData.companyName,
      revenue: validatedData.revenueRange,
    });

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message:
        "Your application has been received. Our team will review and reach out within 5 business days if there's alignment.",
    };
  } catch (error) {
    console.error("Application submission error:", error);
    return {
      success: false,
      message:
        "An unexpected error occurred. Please try again or contact us directly.",
    };
  }
}
