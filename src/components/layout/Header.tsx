"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MainNav } from "@/components/navigation/MainNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { navCta } from "@/content/navigation";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-text">
          Monet
        </Link>
        <MainNav />
        <div className="hidden lg:flex">
          <Button href={navCta.href}>{navCta.label}</Button>
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span className="text-xl">{mobileOpen ? "×" : "≡"}</span>
        </button>
      </div>
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
};