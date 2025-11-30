"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={item.question} className="card-surface">
            <button
              className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-text"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              {item.question}
              <motion.span
                aria-hidden
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="text-xl"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-sm text-muted"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
