"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/lib/animations";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export const Section = ({ id, className, children }: SectionProps) => (
  <motion.section
    id={id}
    className={cn("section-spacing", className)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.div className="container space-y-8" variants={staggerContainer}>
      {children}
    </motion.div>
  </motion.section>
);
