"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const transition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

type PageWrapperProps = {
  children: ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <motion.div
    initial={transition.initial}
    animate={transition.animate}
    exit={transition.exit}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="flex flex-col"
  >
    {children}
  </motion.div>
);
