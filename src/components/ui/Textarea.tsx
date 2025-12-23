"use client";

import { cn } from "@/lib/utils/cn";
import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  characterCount?: {
    current: number;
    min?: number;
    max?: number;
  };
}

/**
 * Elegant Textarea component with Art Deco styling
 * Features gold focus states, character count, and validation feedback
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, label, error, helperText, characterCount, id, required, ...props },
    ref
  ) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    const getCharacterCountColor = () => {
      if (!characterCount) return "text-ivory/40";
      const { current, min, max } = characterCount;

      if (max && current > max) return "text-red-400";
      if (min && current < min) return "text-gold/60";
      return "text-ivory/40";
    };

    return (
      <div className="space-y-2">
        <label
          htmlFor={textareaId}
          className={cn(
            "block text-sm font-medium tracking-wide",
            error ? "text-red-400" : "text-ivory/80"
          )}
        >
          {label}
          {required && (
            <span className="text-gold ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>

        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "form-input min-h-[120px] resize-y",
            error && "border-red-400/50 focus:border-red-400 focus:ring-red-400/50",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          required={required}
          {...props}
        />

        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            {error && (
              <p
                id={`${textareaId}-error`}
                className="text-sm text-red-400 flex items-center gap-1.5"
                role="alert"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {error}
              </p>
            )}

            {helperText && !error && (
              <p
                id={`${textareaId}-helper`}
                className="text-sm text-ivory/50"
              >
                {helperText}
              </p>
            )}
          </div>

          {characterCount && (
            <p className={cn("text-sm tabular-nums", getCharacterCountColor())}>
              {characterCount.current}
              {characterCount.min && characterCount.current < characterCount.min && (
                <span> / {characterCount.min} min</span>
              )}
              {characterCount.max && (
                <span> / {characterCount.max}</span>
              )}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
export type { TextareaProps };
