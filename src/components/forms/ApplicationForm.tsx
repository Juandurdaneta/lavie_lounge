"use client";

import { cn } from "@/lib/utils/cn";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { ArtDecoFrame } from "@/components/decorative/ArtDecoPattern";
import {
  applicationSchema,
  ApplicationSchemaType,
  revenueRangeOptions,
  referralSourceOptions,
} from "@/lib/validations/applicationSchema";
import { submitApplication } from "@/lib/actions/submitApplication";

/**
 * Application Form Component
 * Comprehensive form with validation and spam protection
 */
export function ApplicationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ApplicationSchemaType>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      role: "",
      website: "",
      revenueRange: undefined,
      currentlyBuilding: "",
      hopesToGain: "",
      referralSource: undefined,
      honeypot: "",
    },
  });

  const currentlyBuildingLength = watch("currentlyBuilding")?.length || 0;
  const hopesToGainLength = watch("hopesToGain")?.length || 0;

  const onSubmit = async (data: ApplicationSchemaType) => {
    // Check for Turnstile token before submitting
    if (!turnstileToken) {
      setServerError("Please complete the security verification.");
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });
      // Add Turnstile token
      formData.append("_turnstileToken", turnstileToken);

      const result = await submitApplication(formData);

      if (result.success) {
        router.push("/thank-you");
      } else {
        setServerError(result.message);
        // Reset Turnstile on failure
        turnstileRef.current?.reset();
        setTurnstileToken(null);
      }
    } catch (error) {
      setServerError("An unexpected error occurred. Please try again.");
      // Reset Turnstile on error
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <ArtDecoFrame className="p-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-navy-dark/50 backdrop-blur-sm p-6 md:p-10 space-y-8"
          noValidate
        >
          {/* Server error display */}
          {serverError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/10 border border-red-400/30 text-red-400 text-sm"
              role="alert"
            >
              {serverError}
            </motion.div>
          )}

          {/* Personal Information */}
          <fieldset className="space-y-6">
            <legend className="font-display text-xl text-gold mb-6 tracking-wide">
              Personal Information
            </legend>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                placeholder="John Doe"
                error={errors.fullName?.message}
                required
                {...register("fullName")}
              />
              <Input
                label="Email"
                type="email"
                placeholder="john@company.com"
                error={errors.email?.message}
                required
                {...register("email")}
              />
            </div>

            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 (305) 555-0123"
              error={errors.phone?.message}
              required
              {...register("phone")}
            />
          </fieldset>

          {/* Business Information */}
          <fieldset className="space-y-6 pt-6 border-t border-gold/20">
            <legend className="font-display text-xl text-gold mb-6 tracking-wide">
              Business Information
            </legend>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Company/Business Name"
                placeholder="Your Company LLC"
                error={errors.companyName?.message}
                required
                {...register("companyName")}
              />
              <Input
                label="Your Role/Title"
                placeholder="Founder & CEO"
                error={errors.role?.message}
                required
                {...register("role")}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Website or LinkedIn"
                type="url"
                placeholder="https://yourcompany.com"
                helperText="Include https://"
                error={errors.website?.message}
                {...register("website")}
              />
              <Select
                label="Annual Revenue Range"
                options={revenueRangeOptions}
                placeholder="Select revenue range..."
                error={errors.revenueRange?.message}
                required
                {...register("revenueRange")}
              />
            </div>
          </fieldset>

          {/* About You */}
          <fieldset className="space-y-6 pt-6 border-t border-gold/20">
            <legend className="font-display text-xl text-gold mb-6 tracking-wide">
              About You
            </legend>

            <Textarea
              label="What are you currently building or working on?"
              placeholder="Tell us about your business, projects, or ventures..."
              error={errors.currentlyBuilding?.message}
              characterCount={{
                current: currentlyBuildingLength,
                min: 50,
                max: 2000,
              }}
              required
              {...register("currentlyBuilding")}
            />

            <Textarea
              label="What do you hope to gain from the membership?"
              placeholder="Share your goals for joining our community..."
              error={errors.hopesToGain?.message}
              characterCount={{
                current: hopesToGainLength,
                min: 50,
                max: 2000,
              }}
              required
              {...register("hopesToGain")}
            />

            <Select
              label="How did you hear about us?"
              options={referralSourceOptions}
              error={errors.referralSource?.message}
              {...register("referralSource")}
            />
          </fieldset>

          {/* Honeypot field - hidden from users, visible to bots */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("honeypot")}
            />
          </div>

          {/* Cloudflare Turnstile Widget */}
          <div className="flex justify-center pt-6 border-t border-gold/20">
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
              onSuccess={(token) => setTurnstileToken(token)}
              onError={() => setTurnstileToken(null)}
              onExpire={() => setTurnstileToken(null)}
              options={{
                theme: "dark",
              }}
            />
          </div>

          {/* Submit button */}
          <div className="pt-6 border-t border-gold/20">
            <Button
              type="submit"
              variant="primary"
              size="large"
              isLoading={isSubmitting}
              disabled={!turnstileToken}
              className="w-full md:w-auto"
            >
              Submit Application
            </Button>

            <p className="mt-4 text-sm text-ivory/50">
              By submitting, you agree that your information will be reviewed by our team.
              We respect your privacy and will never share your details.
            </p>
          </div>
        </form>
      </ArtDecoFrame>
    </motion.div>
  );
}
