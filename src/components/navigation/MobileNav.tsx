"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigationLinks, navCta } from "@/content/navigation";
import { slideDown } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [homeOpen, setHomeOpen] = useState(false);

  useEffect(() => {
    // Prevent the body from scrolling while the mobile sheet is open.
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setHomeOpen(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={handleClose} />
          <motion.div
            className="absolute inset-x-0 top-0 mt-20 rounded-t-3xl border-t border-border bg-surface p-6 shadow-soft"
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="space-y-4">
              {navigationLinks.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} className="rounded-2xl border border-border">
                      <button
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-text"
                        onClick={() => setHomeOpen((prev) => !prev)}
                        aria-expanded={homeOpen}
                        aria-controls="mobile-home-menu"
                      >
                        {item.label}
                        <motion.span
                          aria-hidden
                          animate={{ rotate: homeOpen ? 180 : 0 }}
                          className="text-xs"
                        >
                          ▾
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {homeOpen && (
                          <motion.div
                            id="mobile-home-menu"
                            role="menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-2 border-t border-border px-4 py-3"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                className="block rounded-xl px-3 py-2 text-sm text-muted hover:bg-background"
                                onClick={handleClose}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl border border-transparent px-4 py-3 text-base font-semibold text-text transition hover:border-border"
                    onClick={handleClose}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-6">
              <Button href={navCta.href} className="w-full" onClick={handleClose}>
                {navCta.label}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
