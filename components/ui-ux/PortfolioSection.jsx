"use client";

import { useRef } from "react";
import WorkCard from "../ui/WorkCard";

export default function PortfolioCarousel() {
    const scrollRef = useRef(null);

    const projects = [
        {
            category: "Web Application",
            imageSrc:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk",
            logoSrc: "/images/maji-logo.svg",
            description:
                "Maji is a UK financial wellbeing provider that makes saving, spending, and planning money simpler for employees and employers.",
            number: "01",
        },
        {
            category: "E-commerce Platform",
            imageSrc:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk",
            logoSrc: "/images/rightcharge-logo.svg",
            description:
                "An EV charging management platform that automates payments, reimbursements, and reporting for fleets.",
            number: "02",
        },
        {
            category: "Corporate Website",
            imageSrc:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk",
            logoSrc: "/images/naseni-logo.svg",
            description:
                "A Nigerian government agency driving innovation through engineering, manufacturing, and applied research.",
            number: "03",
        },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -600 : 600;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-white py-24 border-b-2 border-black overflow-hidden">
            <style jsx>{`
        .horizontal-scroll-section {
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
        }
        .scroll-card {
          scroll-snap-align: start;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                            Our Impact
                        </span>
                        <h2 className="font-display text-5xl md:text-7xl font-bold text-black uppercase tracking-tighter">
                            Our Latest Works
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                            Swipe to browse
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                                aria-label="Scroll left"
                            >
                                <span className="material-symbols-outlined text-sm">west</span>
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                                aria-label="Scroll right"
                            >
                                <span className="material-symbols-outlined text-sm">east</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex horizontal-scroll-section no-scrollbar h-[60vh] border-y-2 border-black"
            >
                {projects.map((project, index) => (
                    <WorkCard
                        key={index}
                        {...project}
                        className="w-[100vw] md:w-[60vw] lg:w-[45vw]"
                    />
                ))}
            </div>
        </section>
    );
}
