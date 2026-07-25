"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import company from "@/data/company.json";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Growth", href: "#growth" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Plants", href: "#plants" },
  { label: "Products", href: "#products" },
  { label: "Customers", href: "#customers" },
  { label: "Certifications", href: "#certifications" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-muted-bg">
      <div className="absolute inset-x-0 top-0 h-px divider-gradient" />

      {/* Contact CTA — premium blue gradient */}
      <div className="section-pad relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl hero-gradient p-8 text-white shadow-[0_40px_80px_-36px_rgba(15,61,94,0.65)] sm:p-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-[120px]" />
            <div className="absolute inset-0 grid-pattern-light opacity-50" />
            <div className="relative grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                  Let&rsquo;s build your next{" "}
                  <span className="bg-gradient-to-r from-white to-[#93c5fd] bg-clip-text text-transparent">
                    precision component
                  </span>
                  .
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-blue-50/90">
                  Partner with a one-stop manufacturing team trusted by global OEMs — from
                  design and tooling to stamping, welding and final assembly.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={`mailto:${company.contact.email}`}>
                    <Button
                      size="lg"
                      className="w-full bg-white text-[#0f3d5e] hover:bg-blue-50 sm:w-auto"
                    >
                      Request a Quote <ArrowRight className="size-4" />
                    </Button>
                  </a>
                  <a href={`tel:${company.contact.phone.replace(/\s/g, "")}`}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-white/40 bg-white/10 text-white backdrop-blur hover:border-white hover:bg-white/20 hover:text-white sm:w-auto"
                    >
                      <Phone className="size-4" /> Call Us
                    </Button>
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: Building2,
                    label: "Head Office & Plant",
                    value: company.contact.headOffice,
                  },
                  {
                    icon: MapPin,
                    label: "Design & Development Center",
                    value: company.contact.designOffice,
                  },
                  { icon: Mail, label: "Email", value: company.contact.email },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/90">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm text-white/95">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <span className="flex shrink-0 items-center justify-center rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/favicon.png"
                    alt="Atharva Metals & Engineering"
                    width={114}
                    height={75}
                    className="h-9 w-auto max-w-[8rem] object-contain"
                  />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
                  Metals &amp; Engineering
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {company.tagline}. IATF 16949:2016 certified manufacturer serving global
                OEMs from concept to consignment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  Explore
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="text-sm text-muted transition-colors hover:text-accent"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  Registered Office
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {company.contact.headOffice}
                </p>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="mt-3 inline-block text-sm text-accent hover:underline"
                >
                  {company.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted">
              Precision Metal Stamping &middot; Welded Assemblies &middot; Tube Fabrication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
