import Link from "next/link";
import { navigationLinks, navCta } from "@/content/navigation";

export const Footer = () => (
  <footer className="border-t border-border bg-surface">
    <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-lg font-semibold text-text">Monet</p>
        <p className="mt-2 max-w-md text-sm text-muted">
          An intelligence layer for modern monetization teams. Shipping clarity since 2019.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 text-sm text-muted">
        {navigationLinks.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-primary">
            {item.label}
          </Link>
        ))}
        <Link href={navCta.href} className="font-semibold text-primary">
          {navCta.label}
        </Link>
      </div>
    </div>
    <div className="border-t border-border/70 py-6 text-center text-xs text-muted">
      © {new Date().getFullYear()} Monet Labs. All rights reserved.
    </div>
  </footer>
);
