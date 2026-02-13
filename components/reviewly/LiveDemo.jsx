"use client";

import { useState, useEffect } from "react";
import { REVIEWLY_DEMO_CODE } from "@/constants/reviewly";

export default function LiveDemo() {
    const [scanLine, setScanLine] = useState(-1);
    const [showComments, setShowComments] = useState([]);
    const [showFixes, setShowFixes] = useState(false);

    const { lines, fixes, filename } = REVIEWLY_DEMO_CODE;

    useEffect(() => {
        if (scanLine >= lines.length) {
            // After scanning, show fixes
            const fixTimer = setTimeout(() => setShowFixes(true), 1200);
            // Reset after showing fixes
            const resetTimer = setTimeout(() => {
                setScanLine(-1);
                setShowComments([]);
                setShowFixes(false);
            }, 6000);
            return () => {
                clearTimeout(fixTimer);
                clearTimeout(resetTimer);
            };
        }

        const delay = scanLine === -1 ? 1500 : 400;
        const timer = setTimeout(() => {
            setScanLine((c) => c + 1);
            // If current line has a comment, add it
            if (scanLine >= 0 && lines[scanLine]?.comment) {
                setShowComments((prev) => [...prev, scanLine]);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [scanLine, lines]);

    const lineColor = (type) => {
        if (showFixes) return "text-gray-500";
        switch (type) {
            case "error": return "text-red-400 bg-red-400/5";
            case "warning": return "text-amber-400 bg-amber-400/5";
            default: return "text-gray-300";
        }
    };

    return (
        <section
            id="demo"
            className="bg-[#0a0a0a] py-24 border-b-2 border-black relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-4">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              // Live Demo
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
                            See It Work
                        </h2>
                    </div>
                    <p className="text-sm text-gray-600 max-w-xs">
                        Watch Reviewly scan, detect, and suggest fixes in real-time.
                    </p>
                </div>

                {/* Code Editor */}
                <div className="border-2 border-white/10 bg-[#111] overflow-hidden">
                    {/* Editor tabs */}
                    <div className="flex items-center bg-white/5 border-b border-white/10 px-4">
                        <div className="flex gap-1.5 py-3 mr-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border-t-2 border-primary text-xs text-gray-400 font-mono">
                            <span className="material-symbols-outlined text-primary text-sm">
                                description
                            </span>
                            {filename}
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                            {scanLine < lines.length && scanLine >= 0 && (
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary animate-pulse">
                                    Scanning...
                                </span>
                            )}
                            {scanLine >= lines.length && !showFixes && (
                                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                                    2 issues found
                                </span>
                            )}
                            {showFixes && (
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                                    ✓ Fixes applied
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Code panel */}
                        <div className="lg:col-span-2 p-6 font-mono text-sm border-r border-white/5 min-h-[300px]">
                            {lines.map((line, i) => {
                                const isScanned = i <= scanLine;
                                const hasFix = showFixes && fixes.find((f) => f.line === line.num);

                                return (
                                    <div key={i} className="flex group">
                                        {/* Line number */}
                                        <span className="w-8 text-right mr-4 text-gray-600 select-none text-xs leading-6">
                                            {line.num}
                                        </span>

                                        {/* Code */}
                                        <div className="flex-1 relative">
                                            {hasFix ? (
                                                <>
                                                    <div className="text-red-400/40 line-through leading-6">
                                                        {line.code}
                                                    </div>
                                                    <div className="text-emerald-400 leading-6 bg-emerald-400/5 px-1 -mx-1 animate-entrance-fade">
                                                        {hasFix.fix}
                                                    </div>
                                                </>
                                            ) : (
                                                <div
                                                    className={`leading-6 transition-colors duration-300 ${isScanned ? lineColor(line.type) : "text-gray-600"
                                                        }`}
                                                >
                                                    {line.code}
                                                    {/* Scan line indicator */}
                                                    {i === scanLine && (
                                                        <span className="ml-2 inline-block w-1.5 h-4 bg-primary animate-pulse align-middle" />
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Comments panel */}
                        <div className="p-6 bg-white/[0.02] min-h-[300px]">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">
                                Reviewly Review
                            </div>

                            {showComments.length === 0 && !showFixes && (
                                <div className="text-xs text-gray-700 italic">
                                    Waiting for scan...
                                </div>
                            )}

                            <div className="space-y-3">
                                {showComments.map((lineIdx) => {
                                    const line = lines[lineIdx];
                                    const isError = line.type === "error";
                                    return (
                                        <div
                                            key={lineIdx}
                                            className={`p-3 border text-xs animate-entrance-fade ${isError
                                                ? "border-red-400/30 bg-red-400/5 text-red-300"
                                                : "border-amber-400/30 bg-amber-400/5 text-amber-300"
                                                }`}
                                            style={{ animationDuration: "0.4s" }}
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="material-symbols-outlined text-xs">
                                                    {isError ? "error" : "warning"}
                                                </span>
                                                <span className="font-bold uppercase tracking-wider text-[10px]">
                                                    Line {line.num} · {isError ? "Critical" : "Warning"}
                                                </span>
                                            </div>
                                            {line.comment}
                                        </div>
                                    );
                                })}

                                {showFixes && (
                                    <div
                                        className="p-3 border border-emerald-400/30 bg-emerald-400/5 text-emerald-300 text-xs animate-entrance-fade mt-4"
                                        style={{ animationDuration: "0.4s" }}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="material-symbols-outlined text-xs">
                                                check_circle
                                            </span>
                                            <span className="font-bold uppercase tracking-wider text-[10px]">
                                                Auto-Fix Applied
                                            </span>
                                        </div>
                                        2 issues resolved. Parameterized query + named constant.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
