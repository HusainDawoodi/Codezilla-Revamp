"use client";

import { useState } from "react";

export default function FAQ({ items, theme = "light", variant = "contained" }) {
    // Theme styles configuration
    const styles = {
        light: {
            text: "text-black",
            textMuted: "text-gray-600",
            border: "border-black/10",
            borderInner: "border-black/5",
            bgContained: "bg-white",
            bgOutlined: "bg-transparent",
        },
        dark: {
            text: "text-white",
            textMuted: "text-gray-400",
            border: "border-white/10",
            borderInner: "border-white/5",
            bgContained: "bg-white/5",
            bgOutlined: "bg-transparent",
        },
    };

    const currentStyle = styles[theme] || styles.light;
    const isContained = variant === "contained";
    const bgClass = isContained
        ? currentStyle.bgContained
        : currentStyle.bgOutlined;

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`border ${currentStyle.border} ${bgClass} rounded-[4px] overflow-hidden group hover:border-primary transition-colors duration-300 animate-entrance-fade`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <details className="group p-6 cursor-pointer [&::details-content]:transition-all">
                        <summary
                            className={`flex justify-between items-center font-bold text-lg list-none ${currentStyle.text}`}
                        >
                            <span className="font-display uppercase tracking-tight pr-4">
                                {item.question}
                            </span>
                            <span className="transition duration-300 group-open:rotate-180 material-symbols-outlined text-primary shrink-0">
                                expand_more
                            </span>
                        </summary>
                        <div
                            className={`${currentStyle.textMuted} mt-4 leading-relaxed text-base font-light border-t ${currentStyle.borderInner} pt-4`}
                        >
                            {item.answer}
                        </div>
                    </details>
                </div>
            ))}
        </div>
    );
}
