"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, CheckCircle2, FileCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/reveal";
import certData from "@/data/certifications.json";

export function Certifications() {
  const cert = certData.certifications[0];

  return (
    <section id="certifications" className="section-pad relative bg-muted-bg">
      <div className="absolute inset-x-0 top-0 h-px divider-gradient" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Quality You Can Certify"
          description="Our processes are governed by an internationally recognised automotive quality management system."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Certificate highlight — premium blue gradient */}
          <Reveal direction="right">
            <div className="relative h-full overflow-hidden rounded-3xl hero-gradient p-8 text-white shadow-[0_40px_70px_-34px_rgba(15,61,94,0.6)] sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-[100px]" />
              <div className="absolute inset-0 grid-pattern-light opacity-60" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-accent shadow-[0_12px_32px_-10px_rgba(15,61,94,0.6)]">
                  <Award className="size-8" />
                </div>
                <h3 className="mt-6 font-display text-4xl font-bold sm:text-5xl">
                  {cert.name}
                </h3>
                <p className="mt-2 text-lg text-blue-100">{cert.title}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Scope", value: cert.scope },
                    { label: "Issued By", value: cert.issuedBy },
                    { label: "Certificate No.", value: cert.certNo },
                    { label: "Edition", value: cert.edition },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/80">
                        {row.label}
                      </div>
                      <div className="mt-1 text-sm text-white/95">{row.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <BadgeCheck className="size-4" />
                  Verified Quality Management System
                </div>
              </div>
            </div>
          </Reveal>

          {/* Standards list */}
          <StaggerGroup className="flex flex-col gap-3">
            {certData.standards.map((s) => (
              <motion.div
                key={s}
                variants={staggerItem}
                className="flex items-center gap-4 rounded-2xl card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
              >
                <CheckCircle2 className="size-6 shrink-0 text-accent" />
                <span className="text-base font-medium text-foreground">{s}</span>
              </motion.div>
            ))}
            <motion.div
              variants={staggerItem}
              className="mt-auto flex items-center gap-3 rounded-2xl card p-5 text-muted"
            >
              <FileCheck className="size-6 shrink-0 text-accent" />
              <span className="text-sm">
                PPAP &amp; APQP documentation maintained for every program.
              </span>
            </motion.div>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
