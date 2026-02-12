"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

const terminalLines = [
    { type: "cmd", text: "$ reviewly scan ./auth --deep" },
    { type: "info", text: "⚡ Scanning 24 files across 3 modules..." },
    { type: "info", text: "   Analyzing auth/session.js" },
    { type: "warn", text: "⚠  L17: Magic number detected — use named constant" },
    { type: "error", text: "🔴 L18-19: SQL injection vulnerability — CRITICAL" },
    { type: "info", text: "   Analyzing auth/middleware.js" },
    { type: "success", text: "✓  auth/middleware.js — clean" },
    { type: "info", text: "   Analyzing auth/oauth.js" },
    { type: "warn", text: "⚠  L42: Token stored in localStorage — use httpOnly cookie" },
    { type: "info", text: "" },
    { type: "summary", text: "━━━ Scan Complete ━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "summary", text: "  1 critical  ·  2 warnings  ·  21 files clean" },
    { type: "success", text: "  Auto-fix available for 2/3 issues → run: reviewly fix" },
];

export default function ReviewlyHero() {
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        if (visibleLines >= terminalLines.length) {
            const resetTimer = setTimeout(() => setVisibleLines(0), 3500);
            return () => clearTimeout(resetTimer);
        }

        const line = terminalLines[visibleLines];
        const delay = line.type === "cmd" ? 600 : line.type === "error" ? 800 : line.type === "summary" ? 400 : 350;

        const timer = setTimeout(() => setVisibleLines((c) => c + 1), delay);
        return () => clearTimeout(timer);
    }, [visibleLines]);

    const colorMap = {
        cmd: "text-emerald-400",
        info: "text-gray-400",
        warn: "text-amber-400",
        error: "text-red-400",
        success: "text-emerald-400",
        summary: "text-primary",
    };

    return (
        <section className="relative min-h-[92vh] flex items-center bg-charcoal overflow-hidden animate-entrance-fade pt-24 pb-12 border-b-2 border-black">
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundSize: "40px 40px",
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Headline + CTA */}
                    <div>
                        {/* Badges */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary/20">
                                Codezilla Labs
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 border border-amber-400/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                BETA
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-6">
                            Review
                            <br />
                            <span className="text-primary">ly</span>
                        </h1>

                        {/* Tagline — 1 line only */}
                        <p className="text-lg text-gray-400 mb-10 max-w-md">
                            AI that reviews code like your best senior developer.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <Button variant="primary" size="md" href="#" icon="arrow_forward">
                                Request Early Access
                            </Button>
                            <a
                                href="#demo"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors border-b border-gray-700 pb-1"
                            >
                                See it in action
                                <span className="material-symbols-outlined text-sm">
                                    expand_more
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Animated Terminal */}
                    <div className="relative">
                        {/* Terminal window */}
                        <div className="border-2 border-white/10 bg-black/60 backdrop-blur-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                            {/* Title bar */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                                </div>
                                <span className="text-[10px] text-gray-500 font-mono ml-2">
                                    reviewly — terminal
                                </span>
                            </div>

                            {/* Terminal body */}
                            <div className="p-4 font-mono text-xs leading-relaxed min-h-[320px] max-h-[360px] overflow-hidden">
                                {terminalLines.slice(0, visibleLines).map((line, i) => (
                                    <div
                                        key={i}
                                        className={`${colorMap[line.type]}${i === visibleLines - 1 ? " animate-entrance-fade" : ""}`}
                                        style={i === visibleLines - 1 ? { animationDuration: "0.3s" } : undefined}
                                    >
                                        {line.text || "\u00A0"}
                                    </div>
                                ))}
                                {/* Blinking cursor */}
                                {visibleLines < terminalLines.length && (
                                    <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
                                )}
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
