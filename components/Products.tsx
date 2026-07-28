"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, staggerItem } from "@/components/ui/reveal";
import productsData from "@/data/products.json";

export function Products() {
  const products = productsData.products;

  return (
    <section id="products" className="section-pad relative bg-muted-bg">
      <div className="absolute inset-x-0 top-0 h-px divider-gradient" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Products"
          title={productsData.title}
          description={productsData.description}
        />

        <StaggerGroup
          stagger={0.035}
          className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5"
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={staggerItem}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_10px_28px_-18px_rgba(15,61,94,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-24px_rgba(37,99,235,0.4)] hover:ring-accent/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eef2f6] sm:aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.05] sm:p-5"
                />
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
