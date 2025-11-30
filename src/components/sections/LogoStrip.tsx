"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export const LogoStrip = ({ logos }: { logos: string[] }) => (
  <section className="section-spacing border-y border-border/70 bg-surface">
    <div className="container">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted"
      >
        {logos.map((logo) => (
          <span key={logo} className="opacity-80">
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);
