"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const Card = ({ children, className, delay = 0 }: CardProps) => (
  <motion.div
    variants={fadeInUp}
    transition={{ delay, duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={cn("card-surface p-6", className)}
  >
    {children}
  </motion.div>
);
