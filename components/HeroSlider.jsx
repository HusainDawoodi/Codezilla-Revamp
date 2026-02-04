"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const slides = [0, 1]; // Two slides

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds per slide matchin CSS animation

        return () => clearInterval(timer);
    }, [current]);

    const handleDotClick = (index) => {
        setCurrent(index);
    };

    return (
        <section className="relative min-h-screen pt-20 flex flex-col lg:grid lg:grid-cols-2 border-b-2 border-black animate-entrance-fade">
            <div className="relative h-[70vh] lg:h-[60vh] lg:h-auto border-b-2 lg:border-b-0 lg:border-r-2 border-black overflow-hidden bg-gray-900 group hero-slider">
                {/* Dots */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
                    {slides.map((index) => (
                        <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`indicator cursor-pointer ${current === index ? "active" : ""}`}
                        />
                    ))}
                </div>

                {/* SLIDE 1 */}
                <div
                    className={`absolute inset-0 transition-opacity duration-1000 ${current === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                // Note: The CSS animation heroFade1 handles opacity effectively, but React state visibility ensures we don't have z-index issues.
                // However, existing CSS animation 'hero-slide-1' runs infinitely.
                // The JS Logic in original code toggled classes.
                // To simplify: We can just let React handle the switching if we remove the infinite CSS animation, OR we sync them.
                // The original code had: setActive(index) and CSS animation running.
                // Actually, 'hero-slide-1' has `animation: heroFade1 10s infinite`.
                // If we want to strictly follow the original behavior which synced with JS interval:
                // The JS interval aligns with the CSS animation phases.
                // Check CSS: heroFade1 starts at opacity 1, fades out at 55%.
                // 45% of 10s = 4.5s visible. Loop is 10s.
                // JS interval is 5000ms (5s).
                // So every 5s it switches active dot. The fade happens via CSS.
                // We just need to render both slides and let CSS do the fade?
                // NO, the original JS `showSlide` toggles opacity classes!
                // lines 2066: slide.classList.toggle('opacity-0', i !== index);
                // So the JS controls visibility, overriding or complementing CSS?
                // Wait, `hero-slide-1` class applies the animation.
                // If JS also applies `opacity-0`, it hides it.
                // Let's replicate the structure exactly.
                >
                    <div className="absolute inset-0 hero-zoom-1">
                        <div className="absolute inset-0">
                            <Image
                                src="/images/About-banner.webp"
                                alt="Engineer Portrait"
                                fill
                                className="object-cover contrast-125 brightness-100"
                                priority
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 p-4 lg:p-12 pl-8 lg:pl-16 z-10 text-white">
                        <div className="inline-block bg-primary text-black px-4 py-2 mb-4 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="font-mono text-xs uppercase tracking-widest font-bold">
                                Role: Chief Architect
                            </span>
                        </div>
                        <p className="font-display text-2xl lg:text-3xl font-light leading-snug max-w-md">
                            &quot;We build the systems that define the next decade of
                            enterprise efficiency.&quot;
                        </p>
                    </div>
                </div>

                {/* SLIDE 2 */}
                <div
                    className={`absolute inset-0 transition-opacity duration-1000 ${current === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <div className="absolute inset-0 hero-zoom-2">
                        <div className="absolute inset-0">
                            <Image
                                src="/images/team.webp"
                                alt="Project Lead"
                                fill
                                className="object-cover object-top contrast-125 brightness-90"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 p-4 lg:p-12 pl-8 lg:pl-16 z-10 text-white">
                        <div className="inline-block bg-white text-black px-4 py-2 mb-4 border border-black shadow-[4px_4px_0px_0px_rgba(255,109,0,1)]">
                            <span className="font-mono text-xs uppercase tracking-widest font-bold">
                                Role: Strategy Lead
                            </span>
                        </div>
                        <p className="font-display text-2xl lg:text-3xl font-light leading-snug max-w-md">
                            &quot;True transformation happens when human insight meets
                            algorithmic precision.&quot;
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative bg-charcoal flex flex-col justify-between p-8 lg:p-16 bg-energy-gradient-dark">
                <div className="flex flex-col h-full justify-center">
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-4 h-4 bg-primary"></span>
                            <span className="text-white text-sm font-bold tracking-widest uppercase">
                                The Intelligence First // 001
                            </span>
                        </div>
                        <h1 className="font-display text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.85] tracking-tighter uppercase mb-6">
                            <span className="text-primary">Intelligence </span>
                            <br className="hidden lg:block" />
                            at the core.
                        </h1>
                        <p className="font-display text-2xl lg:text-3xl text-white font-light leading-tight mb-8 lg:max-w-lg">
                            The AI-powered partner for enterprise product evolution.
                        </p>
                        <p className="text-xl text-gray-400 lg:max-w-xl font-medium leading-relaxed border-l-4 border-primary pl-6">
                            We don’t just build software. We architect AI-driven systems that
                            define the next decade of efficiency.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 pt-12 border-t-2 border-gray-800">
                        <div>
                            <span className="block text-6xl font-display font-bold text-primary mb-2">
                                98<span className="text-3xl align-top text-white">%</span>
                            </span>
                            <span className="text-xs uppercase tracking-widest text-white font-bold">
                                Deployment Success
                            </span>
                        </div>
                        <div>
                            <span className="block text-6xl font-display font-bold text-primary mb-2">
                                350<span className="text-3xl align-top text-white">+</span>
                            </span>
                            <span className="text-xs uppercase tracking-widest text-white font-bold">
                                Active Systems
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
