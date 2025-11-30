"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => (
  <motion.div
    variants={fadeInUp}
    className={
      align === "center"
        ? "mx-auto max-w-2xl text-center"
        : "max-w-2xl"
    }
  >
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {eyebrow}
      </p>
    )}
    <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base text-muted">{description}</p>
    )}
  </motion.div>
);
