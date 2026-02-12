"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const products = [
  {
    id: "tawkwise",
    badge: "FLAGSHIP",
    status: "LIVE",
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
      { value: "10K+", label: "Calls / Day" },
      { value: "<300ms", label: "Response Latency" },
      { value: "12+", label: "Languages" },
    ],
    linkText: "Explore Product",
    href: "#",
  },
  {
    id: "codepilot",
    badge: "DEV-OPS",
    status: "BETA",
    icon: "code",
    title: "CodePilot",
    tagline: "AI-Powered Code Intelligence",
    description:
      "Automated code review, vulnerability detection, and architecture recommendations. Trained on enterprise codebases to catch what linters miss.",
    metric: { value: "50+", label: "Projects Reviewed" },
    linkText: "Learn More",
    href: "/codepilot",
  },
  {
    id: "cloudsentinel",
    badge: "INFRA-OPS",
    status: "LIVE",
    icon: "shield",
    title: "CloudSentinel",
    tagline: "Predictive Infrastructure Monitoring",
    description:
      "AI-driven anomaly detection & auto-scaling for cloud workloads. Predicts failures 30 minutes before they happen — zero downtime, zero surprises.",
    metric: { value: "200+", label: "Services Monitored" },
    linkText: "Learn More",
    href: "#",
  },
];

/* ── Animated conversation demo ── */
const chatMessages = [
  { from: "human", text: "Hi, I need help tracking my order #4821" },
  { from: "bot", text: "I've found your order. It shipped yesterday via Express and arrives tomorrow by 2 PM. Want real-time tracking updates?" },
  { from: "human", text: "Yes please, send updates to my phone" },
  { from: "bot", text: "Done! You'll receive SMS updates at your number on file. Anything else I can help with?" },
  { from: "human", text: "That was fast. Thanks!" },
  { from: "bot", text: "Happy to help! Have a great day. 👋" },
];

function ConversationDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState(null);

  useEffect(() => {
    if (visibleCount >= chatMessages.length) {
      const resetTimer = setTimeout(() => {
        setVisibleCount(0);
        setIsTyping(false);
        setTypingSender(null);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }

    const nextMessage = chatMessages[visibleCount];
    const typingDelay = visibleCount === 0 ? 800 : 1200;

    const typingTimer = setTimeout(() => {
      setIsTyping(true);
      setTypingSender(nextMessage.from);
    }, typingDelay);

    const messageDelay = typingDelay + (nextMessage.from === "bot" ? 1800 : 1000);
    const messageTimer = setTimeout(() => {
      setIsTyping(false);
      setTypingSender(null);
      setVisibleCount((c) => c + 1);
    }, messageDelay);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(messageTimer);
    };
  }, [visibleCount]);

  return (
    <div className="w-full max-w-[380px] relative z-10">
      {/* Chat header */}
      <div className="bg-white/5 border border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Live Conversation
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-primary text-sm">call</span>
          <span className="text-[10px] text-gray-500 font-mono">02:34</span>
        </div>
      </div>

      {/* Messages */}
      <div className="bg-white/[0.02] border border-t-0 border-white/10 p-4 space-y-3 min-h-[280px] max-h-[320px] overflow-hidden">
        {chatMessages.slice(0, visibleCount).map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}${i === visibleCount - 1 ? " animate-entrance-fade" : ""}`}
            style={i === visibleCount - 1 ? { animationDuration: "0.4s" } : undefined}
          >
            {msg.from === "bot" && (
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-1 shrink-0">
                <span className="material-symbols-outlined text-primary text-xs">smart_toy</span>
              </div>
            )}
            <div
              className={`max-w-[80%] px-3 py-2 text-xs leading-relaxed ${msg.from === "bot"
                ? "bg-white/5 border border-white/10 text-gray-300"
                : "bg-primary/15 border border-primary/20 text-gray-200"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className={`flex ${typingSender === "bot" ? "justify-start" : "justify-end"}`}>
            {typingSender === "bot" && (
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-1 shrink-0">
                <span className="material-symbols-outlined text-primary text-xs">smart_toy</span>
              </div>
            )}
            <div
              className={`px-4 py-3 flex items-center gap-1 ${typingSender === "bot"
                ? "bg-white/5 border border-white/10"
                : "bg-primary/15 border border-primary/20"
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0s" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.15s" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Status badge component ── */
function StatusBadge({ status }) {
  const isLive = status === "LIVE";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 ${isLive
        ? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20"
        : "text-amber-400 bg-amber-400/10 border border-amber-400/20"
        }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
          }`}
      />
      {status}
    </span>
  );
}

export default function ProductGrid() {
  const hero = products[0];
  const secondary = products.slice(1);

  return (
    <section
      className="bg-paper border-b-2 border-black py-24 relative overflow-hidden animate-entrance-fade"
      style={{ animationDelay: "1.4s" }}
    >
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-full h-full bg-energy-gradient opacity-60 pointer-events-none" />

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
            internally, deployed at enterprise scale.
          </p>
        </div>

        {/* ═══════ HERO — Tawkwise ═══════ */}
        <div className="border-2 border-black bg-black overflow-hidden mb-6 group">
          {/* Top accent stripe */}
          <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left: Content */}
            <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col">
              {/* Badges */}
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-primary text-black px-3 py-1">
                  {hero.badge}
                </span>
                <StatusBadge status={hero.status} />
                <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">
                  // 001
                </span>
              </div>

              {/* Title + Tagline */}
              <h3 className="font-display text-3xl lg:text-5xl font-bold text-white uppercase tracking-tighter mb-3 group-hover:text-primary transition-colors duration-300">
                {hero.title}
              </h3>
              <p className="font-display text-lg text-gray-300 font-light mb-6 max-w-xl">
                {hero.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-lg border-l-4 border-primary/40 pl-6">
                {hero.description}
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {hero.features.map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-300 hover:border-primary/40 hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary text-xs">
                      {f.icon}
                    </span>
                    {f.label}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-8 lg:gap-10 mb-10 pt-8 border-t border-white/10">
                {hero.stats.map((s) => (
                  <div key={s.label}>
                    <span className="block text-2xl lg:text-3xl font-display font-bold text-primary mb-1">
                      {s.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <Link
                  href={hero.href}
                  className="inline-flex items-center gap-3 bg-primary text-black font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(255,109,0,0.3)]"
                >
                  {hero.linkText}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: Animated Conversation */}
            <div className="lg:col-span-2 relative min-h-[380px] lg:min-h-0 flex items-center justify-center p-6 lg:p-8">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-l from-primary/5 via-transparent to-transparent pointer-events-none" />

              <ConversationDemo />
            </div>
          </div>
        </div>

        {/* ═══════ Secondary Products ═══════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondary.map((product, index) => (
            <div
              key={product.id}
              className="border-2 border-black bg-white p-8 lg:p-10 group hover:bg-black transition-all duration-500 relative overflow-hidden"
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Top row: badges */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-black/5 text-gray-500 px-3 py-1 group-hover:bg-primary group-hover:text-black transition-colors">
                    {product.badge}
                  </span>
                  <StatusBadge status={product.status} />
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest group-hover:text-gray-600 transition-colors">
                    // 00{index + 2}
                  </span>
                </div>
                <span className="material-symbols-outlined text-primary !text-3xl group-hover:scale-110 transition-transform">
                  {product.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-black uppercase mb-2 group-hover:text-primary transition-colors tracking-tight">
                {product.title}
              </h3>
              <p className="text-sm font-medium text-gray-400 mb-4 group-hover:text-gray-400 transition-colors">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                {product.description}
              </p>

              {/* Bottom: metric + CTA */}
              <div className="flex items-end justify-between mt-auto pt-6 border-t border-black/10 group-hover:border-white/10 transition-colors">
                {product.metric && (
                  <div>
                    <span className="block text-2xl font-display font-bold text-primary mb-0.5">
                      {product.metric.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {product.metric.label}
                    </span>
                  </div>
                )}
                <a
                  href={product.href}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary group/link"
                >
                  {product.linkText}
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
