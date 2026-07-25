"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Growth", href: "#growth" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Plants", href: "#plants" },
  { label: "Products", href: "#products" },
  { label: "Customers", href: "#customers" },
  { label: "Global", href: "#global" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-slate-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex items-center justify-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-slate-200/70 transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/images/brand-mark.jpg"
                alt="Atharva Metals & Engineering"
                width={188}
                height={124}
                priority
                className="h-7 w-auto"
              />
            </span>
            <span
              className={cn(
                "hidden text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors sm:block",
                scrolled ? "text-muted" : "text-blue-50/90"
              )}
            >
              Metals &amp; Engineering
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-muted hover:text-accent"
                    : "text-blue-50/90 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#contact">
              <Button
                size="sm"
                variant={scrolled ? "primary" : "outline"}
                className={
                  scrolled
                    ? ""
                    : "border-white/40 bg-white/10 text-white backdrop-blur hover:border-white hover:bg-white/20 hover:text-white"
                }
              >
                Contact Us
              </Button>
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg border transition-colors lg:hidden",
              scrolled
                ? "border-slate-200 bg-white text-foreground"
                : "border-white/30 bg-white/10 text-white"
            )}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-muted-bg hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2">
                <Button className="w-full">Contact Us</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
