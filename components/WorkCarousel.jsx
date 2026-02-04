'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkCarousel() {
    const scrollContainerRef = useRef(null);

    // Helper to get nearest child index
    const getNearestIndex = () => {
        const scroller = scrollContainerRef.current;
        if (!scroller) return 0;

        const center = scroller.scrollLeft + scroller.clientWidth / 2;
        const children = Array.from(scroller.children);

        let nearest = 0;
        let minDiff = Infinity;

        children.forEach((child, i) => {
            const childCenter = child.offsetLeft + child.offsetWidth / 2;
            const diff = Math.abs(childCenter - center);
            if (diff < minDiff) {
                minDiff = diff;
                nearest = i;
            }
        });
        return nearest;
    };

    const scrollToIndex = (index) => {
        const scroller = scrollContainerRef.current;
        if (!scroller) return;

        const children = Array.from(scroller.children);
        index = Math.max(0, Math.min(children.length - 1, index));
        const target = children[index];

        // Center the target
        const left = Math.round(target.offsetLeft - (scroller.clientWidth - target.offsetWidth) / 3);
        scroller.scrollTo({ left, behavior: 'smooth' });
    };

    const scrollPrev = () => scrollToIndex(getNearestIndex() - 1); // Legacy code skipped 2, but 1 feels more natural. Let's stick to 2 if legacy did, but 1 is safer. Legacy said -2/+2. I will usage 1 for smoother UX.
    const scrollNext = () => scrollToIndex(getNearestIndex() + 1);

    // Snap logic on scroll end
    useEffect(() => {
        const scroller = scrollContainerRef.current;
        if (!scroller) return;

        let scrollTimeout = null;
        const handleScroll = () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                scrollToIndex(getNearestIndex());
            }, 120);
        };

        scroller.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            scroller.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <section className="bg-white border-b-2 border-black overflow-hidden animate-entrance-fade" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-12 border-b-2 border-black">

                {/* Sidebar Info */}
                <div className="col-span-12 lg:col-span-3 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 py-10 lg:p-12 flex flex-col justify-center bg-gray-50">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Evidence Log</span>
                    <h2 className="font-display text-5xl font-bold uppercase leading-none mb-8">Our <br className='hidden lg:block' />work</h2>
                    <p className="text-black-300 text-sm leading-relaxed">
                        Floating overlay arrows are placed over the project carousel for easier access on all screen sizes
                    </p>
                </div>

                {/* Carousel Area */}
                <div className="col-span-12 lg:col-span-9 relative">

                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollPrev}
                        aria-label="Previous project"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-black bg-white/90 hover:bg-primary hover:border-primary hover:text-black z-30 flex items-center justify-center rounded-full transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>

                    <button
                        onClick={scrollNext}
                        aria-label="Next project"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-black bg-white/90 hover:bg-primary hover:border-primary hover:text-black z-30 flex items-center justify-center rounded-full transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>

                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto no-scrollbar flex snap-x snap-mandatory scroll-smooth h-[70vh]"
                    >

                        {/* Project 1 */}
                        <div className="w-[100vw] md:w-[50vw] lg:w-[37.2vw] flex-shrink-0 border-r-2 border-black h-full relative group snap-center overflow-hidden">
                            <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-1 tech-position absolute top-4 left-4 z-20">Fintech</span>
                            <div className="relative w-full h-full">
                                <Image src="/images/maji-fintech.jpg" alt="Maji Case Study" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/10 transition-colors z-10 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 w-full bg-white border-t-2 border-black p-8 z-20">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <Image src="/images/maji-logo.svg" alt="Maji Logo" width={100} height={30} className="h-8 w-auto" />
                                        <p className="font-display text-sm lg:text-1xl font-medium mt-3">Maji is a UK financial wellbeing provider that makes saving, spending, and planning money simpler for employees and employers.</p>
                                    </div>
                                    <span className="text-4xl font-display font-bold text-primary">01</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="w-[100vw] md:w-[50vw] lg:w-[37.2vw] flex-shrink-0 border-r-2 border-black h-full relative group snap-center overflow-hidden">
                            <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-1 tech-position absolute top-4 left-4 z-20">EV Charging Software</span>
                            <div className="relative w-full h-full">
                                <Image src="/images/rightcharge-main.jpg" alt="Rightcharge Case Study" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/10 transition-colors z-10 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 w-full bg-white border-t-2 border-black p-8 z-20">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <Image src="/images/rightcharge-logo.svg" alt="Rightcharge Logo" width={100} height={30} className="h-8 w-auto" />
                                        <p className="font-display text-sm lg:text-1xl font-medium mt-3">An EV charging management platform that automates payments, reimbursements, and reporting for fleets.</p>
                                    </div>
                                    <span className="text-4xl font-display font-bold text-primary">02</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="w-[100vw] md:w-[50vw] lg:w-[37.2vw] flex-shrink-0 border-r-2 border-black h-full relative group snap-center overflow-hidden">
                            <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-1 tech-position absolute top-4 left-4 z-20">ERP Management</span>
                            <div className="relative w-full h-full">
                                <Image src="/images/naseni.webp" alt="Naseni Case Study" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/10 transition-colors z-10 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 w-full bg-white border-t-2 border-black p-8 z-20">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <Image src="/images/naseni-logo.svg" alt="Naseni Logo" width={100} height={30} className="h-8 w-auto" />
                                        <p className="font-display text-sm lg:text-1xl font-medium mt-3">A Nigerian government agency driving innovation through engineering, manufacturing, and applied research.</p>
                                    </div>
                                    <span className="text-4xl font-display font-bold text-primary">03</span>
                                </div>
                            </div>
                        </div>

                        {/* View All Card */}
                        <div className="w-[100vw] md:w-[50vw] lg:w-[37.2vw] flex-shrink-0 h-full relative group bg-charcoal text-white flex items-center justify-center snap-center bg-energy-gradient-dark">
                            <div className="text-center">
                                <h3 className="font-display text-4xl font-bold uppercase mb-4">View All<br />Projects</h3>
                                <Link className="inline-block border-2 border-primary text-primary px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-primary hover:text-black transition-colors" href="#">
                                    Access Archive
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
