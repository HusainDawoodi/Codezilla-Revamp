"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: "hero",
    badge: "FLAGSHIP",
    icon: "call",
    title: "Tawkwise",
    tagline: "Intelligent Voice AI. Enterprise Scale.",
    description:
      "Deploy intelligent voice agents that handle inbound and outbound calls with natural, multilingual fluency. From customer support to sales qualification and recruitment — automate thousands of concurrent calls without growing your team.",
    features: [
      { label: "Multilingual", icon: "translate" },
      { label: "Human-like", icon: "record_voice_over" },
      { label: "24/7 Inbound & Outbound", icon: "phone_in_talk" },
      { label: "Real-time Analytics", icon: "monitoring" },
      { label: "Custom Workflows", icon: "account_tree" },
      { label: "Enterprise Scale", icon: "speed" },
    ],
    stats: [
      { value: "10K+", label: "Concurrent Calls" },
      { value: "<300ms", label: "Response Latency" },
      { value: "12+", label: "Languages" },
    ],
    linkText: "Explore Product",
    href: "#",
  },
  {
    id: "doc-ai",
    badge: "AI-OPS",
    icon: "psychology",
    title: "Document AI",
    description:
      "Extract, classify, and transform unstructured documents into structured, actionable data. Powered by custom-trained models for invoices, contracts, and compliance workflows.",
    linkText: "Learn More",
    href: "#",
  },
  {
    id: "guard",
    badge: "SEC-OPS",
    icon: "verified_user",
    title: "Guard:IAM",
    description:
      "AI-driven identity and access management. Real-time threat modeling, automated compliance checks, and zero-trust architecture woven into your security stack.",
    linkText: "Learn More",
    href: "#",
  },
];

/* ── Animated waveform bars (decorative) ── */
function WaveformVisual() {
  const bars = [3, 5, 2, 7, 4, 6, 3, 5, 7, 2, 4, 6, 3, 5, 2, 7, 4, 6, 3, 5];
  return (
    <div className="flex items-end gap-[3px] h-16 opacity-40">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] bg-primary rounded-full animate-pulse-slow"
          style={{
            height: `${h * 8}px`,
            animationDelay: `${i * 0.15}s`,
            animationDuration: `${1.2 + (i % 3) * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Orbiting ring around call icon (decorative) ── */
function PulseRing() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <span className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
      <span className="absolute inset-2 rounded-full border border-primary/30 animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
      <span className="material-symbols-outlined text-primary !text-4xl relative z-10">
        call
      </span>
    </div>
  );
}

export default function ProductGrid() {
  const hero = products[0];
  const secondary = products.slice(1);

  return (
    <section
      className="bg-gray-100 border-b-2 border-black py-24 relative overflow-hidden animate-entrance-fade bg-energy-gradient"
      style={{ animationDelay: "1.4s" }}
    >
      {/* Subtle background texture */}
      <div className="absolute top-0 left-0 w-full h-full blueprint-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between lg:items-end mb-16 border-b-2 border-black pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              Codezilla Labs
            </span>
            <h2 className="font-display text-4xl md:text-4xl font-bold text-black uppercase">
              Our Products
            </h2>
          </div>
          <p className="lg:text-right text-sm font-medium text-gray-500 max-w-sm mt-4 md:mt-0">
            AI-native products built from our engineering DNA. Battle-tested
            internally, ready for your enterprise.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-black bg-white">
          {/* ═══════ Hero Product — Voice AI Agent ═══════ */}
          <div className="lg:col-span-2 bg-black border-b-2 lg:border-b-0 lg:border-r-2 border-black relative overflow-hidden group">
            {/* Gradient accent stripe */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            {/* Subtle circuit pattern */}
            <div className="absolute inset-0 circuit-pattern opacity-20 pointer-events-none" />

            <div className="p-8 lg:p-12 flex flex-col h-full relative z-10">
              {/* Top row: badge + visual */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-primary text-black px-3 py-1">
                    {hero.badge}
                  </span>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                    // 001
                  </span>
                </div>
                <div className="hidden lg:block">
                  <PulseRing />
                </div>
              </div>

              {/* Title + Tagline */}
              <h3 className="font-display text-3xl lg:text-5xl font-bold text-white uppercase tracking-tighter mb-3 group-hover:text-primary transition-colors duration-300">
                {hero.title}
              </h3>
              <p className="font-display text-lg lg:text-xl text-gray-300 font-light mb-6 max-w-xl">
                {hero.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-2xl border-l-4 border-primary/40 pl-6">
                {hero.description}
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {hero.features.map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-300 hover:border-primary/40 hover:text-white transition-colors duration-200"
                  >
                    <span className="material-symbols-outlined text-primary text-sm">
                      {f.icon}
                    </span>
                    {f.label}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex gap-8 lg:gap-12 mb-10 pt-8 border-t border-white/10">
                {hero.stats.map((s) => (
                  <div key={s.label}>
                    <span className="block text-3xl lg:text-4xl font-display font-bold text-primary mb-1">
                      {s.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom row: CTA + waveform */}
              <div className="flex items-end justify-between mt-auto">
                <Link
                  href={hero.href}
                  className="inline-flex items-center gap-3 bg-primary text-black font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_4px_20px_rgba(255,109,0,0.3)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
                >
                  {hero.linkText}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
                <div className="hidden lg:block">
                  <WaveformVisual />
                </div>
              </div>
            </div>
          </div>

          {/* ═══════ Secondary Products ═══════ */}
          <div className="flex flex-col">
            {secondary.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white p-8 lg:p-10 group hover:bg-black transition-all duration-500 relative overflow-hidden flex flex-col flex-1 ${index === 0 ? "border-b-2 border-black" : ""
                  }`}
              >
                {/* Badge and Icon */}
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-black/5 text-gray-500 px-3 py-1 group-hover:bg-primary group-hover:text-black transition-colors">
                    {product.badge}
                  </span>
                  <span className="material-symbols-outlined text-primary !text-4xl group-hover:scale-110 transition-transform">
                    {product.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-black uppercase mb-4 group-hover:text-primary transition-colors tracking-tight">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                  {product.description}
                </p>

                {/* Link */}
                <a
                  href={product.href}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary transition-colors mt-auto group/link"
                >
                  {product.linkText}
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
