"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigationLinks } from "@/content/navigation";
import { slideDown } from "@/lib/animations";
import { cn } from "@/lib/utils";

export const MainNav = () => {
  const pathname = usePathname();
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (dropdownRef.current.contains(event.target as Node)) return;
      setIsHomeOpen(false);
    };

    // Close the dropdown when clicking outside of the nav cluster.
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const homeItem = navigationLinks.find((item) => item.children);

  return (
    <nav
      className="hidden items-center gap-8 text-sm font-medium text-muted lg:flex"
      aria-label="Primary"
    >
      {homeItem && (
        <div className="relative" ref={dropdownRef}>
          <button
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-text transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            aria-haspopup="menu"
            aria-expanded={isHomeOpen}
            aria-controls="desktop-home-menu"
            onClick={() => setIsHomeOpen((prev) => !prev)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setIsHomeOpen(false);
              if (event.key === "ArrowDown") setIsHomeOpen(true);
            }}
          >
            {homeItem.label}
            <motion.span
              aria-hidden
              animate={{ rotate: isHomeOpen ? 180 : 0 }}
              className="text-xs"
            >
              ▾
            </motion.span>
          </button>
          <AnimatePresence>
            {isHomeOpen && (
              <motion.div
                variants={slideDown}
                initial="hidden"
                animate="visible"
                exit="hidden"
                role="menu"
                aria-label="Home sections"
                id="desktop-home-menu"
                className="absolute left-1/2 top-full z-30 mt-3 w-44 -translate-x-1/2 rounded-2xl border border-border bg-surface p-2 shadow-soft"
              >
                {homeItem.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    role="menuitem"
                    className={cn(
                      "block rounded-xl px-3 py-2 text-sm transition hover:bg-background",
                      pathname === child.href && "bg-background text-primary"
                    )}
                    onClick={() => setIsHomeOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {navigationLinks
        .filter((item) => !item.children)
        .map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-full px-3 py-2 text-text transition hover:text-primary",
              pathname === item.href && "text-primary"
            )}
          >
            {item.label}
          </Link>
        ))}
    </nav>
  );
};
