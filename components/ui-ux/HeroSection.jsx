import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen pt-20 flex items-center bg-charcoal blueprint-grid overflow-hidden">
            <div className="container mx-auto px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-10">
                    <div className="space-y-4">
                        <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] inline-flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary"></span>
                            Est. 2010 — Senior Expertise
                        </span>
                        <h1 className="font-display text-5xl md:text-[5rem] font-bold text-white leading-[1.1] tracking-tight uppercase">
                            Designing meaningful<br />digital experiences<br /><span className="text-outline-primary">for 14+ years.</span>
                        </h1>
                    </div>
                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed font-light">
                        We help you design digital products that are not just beautiful, but also functional and user-centric. Our team of UI/UX experts combines creativity with data-driven insights to create seamless user journeys.
                    </p>
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-6">
                            <Link href="#" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-[2px]">
                                View Case Studies
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                            <Link href="#" className="inline-flex items-center gap-3 border border-white/10 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-[2px]">
                                Design Philosophy
                            </Link>
                        </div>
                        <div className="flex items-center gap-8 border-t border-white/10 pt-8 w-fit">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/5 p-2 rounded">
                                    <span className="text-white font-bold font-display text-lg">G</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex text-primary text-sm">
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star_half</span>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-400">4.9/5 Rating</span>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-white/10"></div>
                            <div className="flex items-center gap-3">
                                <div className="bg-white/5 p-2 rounded">
                                    <span className="text-white font-bold font-display text-lg">C</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex text-primary text-sm">
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-400">5.0/5 Clutch</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5 relative hidden lg:flex justify-end">
                    <div className="relative w-full aspect-square max-w-md border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1">
                        <div className="absolute inset-0 blueprint-grid opacity-30"></div>
                        <div className="relative w-full h-full bg-charcoal flex items-center justify-center overflow-hidden">
                            <Image
                                alt="Abstract Structure Render"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkdupBasrSHB9Dk4CJgvofx9GlXBWEvhiFLT42_ENdfdXlRFLZ2dlZM_GsXlxOUJppJSFEEMq9id2sgXcVGkWUC-AhKYJK48gIGN7Ree0oYOWq0tudv2-ob2UC19WKZFq6nNZQzVK_88ITuGh5_pFJooQdlKZ83KSArH2vLph8FINIgbsjiqfhjoJuEq4copvXWcTQ9ClX5ZuHg2mQDDHWZ0qLqo7LW5023wkNUGeY_sn9o92kLwZ1kd3G82Rt5hqvMf6u3Fd"
                                className="object-cover mix-blend-screen opacity-50"
                                fill
                            />
                            <div className="absolute inset-0 border border-white/5"></div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-primary w-24 h-24 p-4 flex flex-col justify-end border border-white/10 shadow-2xl">
                            <span className="text-white font-display font-bold text-4xl">14</span>
                            <span className="text-white/80 font-mono text-[8px] uppercase tracking-tighter">Years Exp.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
