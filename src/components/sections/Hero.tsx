"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import { HomeContent } from "@/content/home";

export const Hero = ({ data }: { data: HomeContent["hero"] }) => (
  <section className="section-spacing bg-gradient-to-b from-surface to-background pt-16 lg:pt-24">
    <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="space-y-6"
      >
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {data.eyebrow}
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-text md:text-5xl">
          {data.title}
        </h1>
        <p className="text-lg text-muted">{data.description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={data.primary.href}>{data.primary.label}</Button>
          <Button href={data.secondary.href} variant="secondary">
            {data.secondary.label}
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-semibold text-muted">
          {data.highlights.map((item) => (
            <span key={item} className="rounded-full border border-border px-4 py-1">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="card-surface space-y-4 p-8"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Signal Capsule
        </p>
        <p className="text-3xl font-semibold text-text">
          &ldquo;Clarity lives where teams collaborate.&rdquo;
        </p>
        <p className="text-sm text-muted">
          A preview of how Monet narrates insights and next steps for exec teams.
        </p>
      </motion.div>
    </div>
  </section>
);
