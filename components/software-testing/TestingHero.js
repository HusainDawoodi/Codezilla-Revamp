'use client';
import Link from 'next/link';
import { HERO_CONTENT } from '@/constants/software-testing';
import { useState } from 'react';
import Button from '../ui/Button';

export default function TestingHero() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <section className="relative min-h-[90vh] flex items-center bg-charcoal blueprint-grid overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20 lg:py-0">
                <div className="lg:col-span-7 space-y-10">
                    <div className="space-y-4">
                        <span className="text-primary font-mono text-sm uppercase tracking-[0.4em] inline-flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary"></span>
                            Guided Solution Narrative
                        </span>
                        <h1 className="font-display text-4xl md:text-[5.5rem] font-bold text-white leading-[0.95] tracking-tight uppercase">
                            Software Testing Services
                            {/* {HERO_CONTENT.title}<br /> */}
                            {/* <span className="text-outline-primary">{HERO_CONTENT.titleSuffix}</span> */}
                        </h1>
                    </div>
                    <div className="space-y-6 max-w-3xl">
                        {/* <p className="text-primary font-display text-md lg:text-lg font-bold uppercase tracking-wide">
                            {HERO_CONTENT.solutionTitle}
                        </p> */}
                        <p className="text-gray-400 text-sm lg:text-lg leading-relaxed font-light">
                            Our QA Testing services are designed to ensure your software consistently meets the highest standards of quality, performance, security, and reliability. By combining deep technical expertise with industry-proven testing methodologies, we identify defects early in the development lifecycle, minimize business risk, and prevent costly production issues. Our comprehensive approach covers functionality, performance, usability, and compatibility, enabling us to deliver seamless, stable digital experiences that users trust across platforms, devices, and operating environments.

                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button
                            href="#audit"
                            size="md"

                        >
                            {HERO_CONTENT.primaryCTA}
                            <span className="material-symbols-outlined text-sm">analytics</span>
                        </Button>
                        {/* 
                        <Link
                            href="#audit"
                            className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-[2px]"
                        >
                            {HERO_CONTENT.primaryCTA}
                            <span className="material-symbols-outlined text-sm">analytics</span>
                        </Link> */}
                        <Button
                            href="#"
                            size="md"
                            variant="outline-white"
                        >
                            {HERO_CONTENT.secondaryCTA}
                        </Button>
                    </div>
                </div>
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                    <div className="relative w-full aspect-square max-w-md border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1">
                        <div className="absolute inset-0 blueprint-grid opacity-30"></div>
                        <div className="relative w-full h-full bg-charcoal flex items-center justify-center overflow-hidden">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkdupBasrSHB9Dk4CJgvofx9GlXBWEvhiFLT42_ENdfdXlRFLZ2dlZM_GsXlxOUJppJSFEEMq9id2sgXcVGkWUC-AhKYJK48gIGN7Ree0oYOWq0tudv2-ob2UC19WKZFq6nNZQzVK_88ITuGh5_pFJooQdlKZ83KSArH2vLph8FINIgbsjiqfhjoJuEq4copvXWcTQ9ClX5ZuHg2mQDDHWZ0qLqo7LW5023wkNUGeY_sn9o92kLwZ1kd3G82Rt5hqvMf6u3Fd"
                                alt="Focused QA Engineer portrait"
                                className="w-full h-full object-cover mix-blend-screen opacity-60"
                            />
                        </div>
                        <div className="hidden md:block absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-white border border-black p-4 md:p-6 card-shadow-orange transform rotate-3">
                            <span className="text-black font-display font-bold text-sm md:text-lg block leading-tight">
                                {HERO_CONTENT.experienceYears.split('OF').join('OF\n')}
                                {HERO_CONTENT.experienceYears.includes('OF') ? null : HERO_CONTENT.experienceYears}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
