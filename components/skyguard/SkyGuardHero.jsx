"use client";

import { useState, useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

const regions = [
    { name: "US-East-1", latency: 12, status: "healthy" },
    { name: "EU-West-2", latency: 34, status: "healthy" },
    { name: "AP-South-1", latency: 68, status: "healthy" },
    { name: "SA-East-1", latency: 45, status: "healthy" },
    { name: "US-West-2", latency: 89, status: "warn" },
];

const eventLog = [
    { time: "18:04:12", type: "ok", msg: "Health check passed — all endpoints responding" },
    { time: "18:04:09", type: "scale", msg: "Auto-scaled EU-West-2 → 4 instances (+2)" },
    { time: "18:04:03", type: "alert", msg: "Latency spike detected in US-West-2 (89ms → 142ms)" },
    { time: "18:03:58", type: "ok", msg: "DDoS pattern cleared — adaptive rules active" },
    { time: "18:03:51", type: "alert", msg: "Anomaly flagged: Unusual egress on AP-South-1" },
    { time: "18:03:44", type: "ok", msg: "Certificate rotation completed for *.api.skyguard.io" },
    { time: "18:03:38", type: "scale", msg: "Traffic rebalanced across 3 regions" },
];

export default function SkyGuardHero() {
    const [visibleEvents, setVisibleEvents] = useState(0);
    const [uptimeMs, setUptimeMs] = useState(0);

    useEffect(() => {
        if (visibleEvents >= eventLog.length) {
            const reset = setTimeout(() => setVisibleEvents(0), 2500);
            return () => clearTimeout(reset);
        }
        const delay = visibleEvents === 0 ? 800 : 1200;
        const timer = setTimeout(() => setVisibleEvents(v => v + 1), delay);
        return () => clearTimeout(timer);
    }, [visibleEvents]);

    useEffect(() => {
        const interval = setInterval(() => setUptimeMs(v => v + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatUptime = (s) => {
        const h = String(Math.floor(s / 3600)).padStart(2, '0');
        const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
        const sec = String(s % 60).padStart(2, '0');
        return `${h}:${m}:${sec}`;
    };

    const typeColor = { ok: "text-emerald-400", alert: "text-amber-400", scale: "text-sky-400" };
    const typeIcon = { ok: "check_circle", alert: "warning", scale: "open_in_full" };

    return (
        <section className="relative min-h-[92vh] flex items-center bg-[#050505] overflow-hidden animate-entrance-fade pt-24 pb-12 border-b-2 border-black">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundSize: '60px 60px',
                    backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary/20">
                                Infrastructure Security
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 border border-amber-400/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                BETA PHASE
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-6">
                            SKY
                            <br />
                            <span className="text-primary">GUARD</span>
                        </h1>

                        <p className="text-lg text-gray-400 mb-10 max-w-md font-light leading-relaxed">
                            Predictive monitoring for modern infrastructure. Detect anomalies before they become outages.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <Button variant="primary" size="md" href="#" icon="shield">
                                Join Beta Waitlist
                            </Button>
                            <a
                                href="#demo"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors border-b border-gray-700 pb-1"
                            >
                                See live dashboard
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Live Status Panel */}
                    <div className="relative">
                        <div className="border-2 border-white/10 bg-black/60 backdrop-blur-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                            {/* Title Bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-mono ml-2">skyguard — status</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-mono text-emerald-500">LIVE</span>
                                </div>
                            </div>

                            {/* Top Metrics Bar */}
                            <div className="grid grid-cols-3 border-b border-white/5">
                                <div className="px-4 py-3 border-r border-white/5">
                                    <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Uptime</div>
                                    <div className="text-sm font-mono text-emerald-400 mt-0.5">99.998%</div>
                                </div>
                                <div className="px-4 py-3 border-r border-white/5">
                                    <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Session</div>
                                    <div className="text-sm font-mono text-white mt-0.5">{formatUptime(uptimeMs)}</div>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Nodes</div>
                                    <div className="text-sm font-mono text-primary mt-0.5">42 active</div>
                                </div>
                            </div>

                            {/* Region Health */}
                            <div className="px-4 py-3 border-b border-white/5">
                                <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mb-3">Region Health</div>
                                <div className="space-y-2">
                                    {regions.map(r => (
                                        <div key={r.name} className="flex items-center gap-3">
                                            <span className={`w-1.5 h-1.5 rounded-full ${r.status === 'warn' ? 'bg-amber-400' : 'bg-emerald-500'}`} />
                                            <span className="text-[11px] font-mono text-gray-400 w-20">{r.name}</span>
                                            <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ${r.status === 'warn' ? 'bg-amber-400/60' : 'bg-emerald-500/40'}`}
                                                    style={{ width: `${Math.min(r.latency, 100)}%` }}
                                                />
                                            </div>
                                            <span className={`text-[10px] font-mono w-10 text-right ${r.status === 'warn' ? 'text-amber-400' : 'text-gray-500'}`}>
                                                {r.latency}ms
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Event Log */}
                            <div className="px-4 py-3 min-h-[160px] max-h-[180px] overflow-hidden">
                                <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mb-3">Event Stream</div>
                                <div className="space-y-2">
                                    {eventLog.slice(0, visibleEvents).map((evt, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-start gap-2 ${i === visibleEvents - 1 ? 'animate-entrance-fade' : ''}`}
                                            style={i === visibleEvents - 1 ? { animationDuration: '0.3s' } : undefined}
                                        >
                                            <span className={`material-symbols-outlined text-xs mt-0.5 ${typeColor[evt.type]}`}>
                                                {typeIcon[evt.type]}
                                            </span>
                                            <span className="text-[10px] font-mono text-gray-600 shrink-0">{evt.time}</span>
                                            <span className="text-[10px] font-mono text-gray-400 leading-relaxed">{evt.msg}</span>
                                        </div>
                                    ))}
                                    {visibleEvents < eventLog.length && (
                                        <span className="inline-block w-2 h-3 bg-primary/60 animate-pulse" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Glow */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}
