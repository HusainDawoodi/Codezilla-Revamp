"use client";

import { useState } from "react";
import { AUDIO_DEMOS } from "@/constants/tawkwise";

export default function AudioDemoSection() {
    const [playingId, setPlayingId] = useState(null);

    const togglePlay = (id) => {
        setPlayingId(playingId === id ? null : id);
    };

    return (
        <section
            className="bg-[#050505] text-white border-b-2 border-black animate-entrance-fade"
            style={{ animationDelay: "0.6s" }}
            id="audio-demos"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4 block">
                        Hear It In Action
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-4">
                        Live <span className="text-primary">conversation</span> demos
                    </h2>
                    <div className="w-12 h-1 bg-primary mx-auto mb-6" />
                    <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
                        Listen to AI voice agents handling real conversations across different industries. Natural, human-like, and always on-brand.
                    </p>
                </div>

                {/* Demo cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {AUDIO_DEMOS.map((demo) => {
                        const isPlaying = playingId === demo.id;

                        return (
                            <div
                                key={demo.id}
                                className={`border-2 transition-all duration-500 overflow-hidden ${isPlaying
                                        ? "border-primary/30 bg-primary/5"
                                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                                    }`}
                            >
                                {/* Card header */}
                                <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">{demo.icon}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                            {demo.industry}
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-gray-600">{demo.duration}</span>
                                </div>

                                {/* Title & waveform */}
                                <div className="px-5 py-5">
                                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white mb-4">
                                        {demo.title}
                                    </h3>

                                    {/* Waveform */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <button
                                            onClick={() => togglePlay(demo.id)}
                                            className={`w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 shrink-0 ${isPlaying
                                                    ? "bg-primary border-primary text-black"
                                                    : "border-white/20 text-white hover:border-primary hover:text-primary"
                                                }`}
                                        >
                                            <span className="material-symbols-outlined text-lg">
                                                {isPlaying ? "pause" : "play_arrow"}
                                            </span>
                                        </button>

                                        <div className="flex items-end gap-[2px] h-8 flex-1">
                                            {Array.from({ length: 30 }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-[3px] rounded-full ${isPlaying
                                                            ? "bg-primary waveform-bar"
                                                            : "bg-white/15 waveform-bar-idle"
                                                        }`}
                                                    style={{
                                                        animationDelay: `${i * 0.06}s`,
                                                        animationDuration: `${0.6 + Math.random() * 0.6}s`,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Conversation snippet */}
                                    <div className="space-y-3">
                                        {demo.messages.map((msg, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <span
                                                    className={`text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 shrink-0 mt-0.5 ${msg.speaker === "AI"
                                                            ? "text-primary bg-primary/10"
                                                            : "text-emerald-400 bg-emerald-400/10"
                                                        }`}
                                                >
                                                    {msg.speaker}
                                                </span>
                                                <p className="text-[11px] text-gray-500 leading-relaxed">
                                                    {msg.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
