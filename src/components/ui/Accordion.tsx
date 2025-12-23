"use client";

import { cn } from "@/lib/utils/cn";
import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

/**
 * Individual accordion item with smooth animations
 */
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: AccordionItemProps) {
  const contentId = `accordion-content-${id}`;
  const triggerId = `accordion-trigger-${id}`;

  return (
    <div
      className={cn(
        "border-b border-gold/20 transition-colors duration-300",
        isOpen && "border-gold/40"
      )}
    >
      <button
        id={triggerId}
        type="button"
        onClick={onToggle}
        className={cn(
          "w-full py-6 flex items-center justify-between gap-4",
          "text-left transition-colors duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset",
          "group"
        )}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span
          className={cn(
            "font-display text-lg md:text-xl font-medium",
            "transition-colors duration-300",
            isOpen ? "text-gold" : "text-ivory group-hover:text-gold/80"
          )}
        >
          {question}
        </span>

        <span
          className={cn(
            "flex-shrink-0 w-8 h-8 flex items-center justify-center",
            "border rounded-full transition-all duration-300",
            isOpen
              ? "border-gold bg-gold/10 text-gold"
              : "border-gold/40 text-gold/60 group-hover:border-gold group-hover:text-gold"
          )}
          aria-hidden="true"
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.3, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-ivory/70 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
  allowMultiple?: boolean;
  className?: string;
}

/**
 * Accordion component for FAQs with elegant Art Deco styling
 * Features smooth expand/collapse animations
 */
function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const baseId = useId();

  const handleToggle = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }

      return newSet;
    });
  };

  return (
    <div className={cn("divide-y divide-gold/20", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={`${baseId}-${index}`}
          id={`${baseId}-${index}`}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export { Accordion, AccordionItem };
export type { AccordionProps, AccordionItemProps };
