"use client";

import { useRef } from "react";
import Link from "next/link";
import WorkCard from "./ui/WorkCard";

export default function WorkCarousel({ projects = [] }) {
  const scrollContainerRef = useRef(null);

  // Helper to get nearest child index relative to left edge (snap-start)
  const getNearestIndex = () => {
    const scroller = scrollContainerRef.current;
    if (!scroller) return 0;

    const scrollLeft = scroller.scrollLeft;
    const children = Array.from(scroller.children);

    let nearest = 0;
    let minDiff = Infinity;

    children.forEach((child, i) => {
      const diff = Math.abs(child.offsetLeft - scrollLeft);
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

    // Scroll to start of target
    const left = target.offsetLeft;
    scroller.scrollTo({ left, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const isDesktop =
      typeof window !== "undefined" && window.innerWidth >= 1024;
    scrollToIndex(getNearestIndex() - (isDesktop ? 2 : 1));
  };

  const scrollNext = () => {
    const isDesktop =
      typeof window !== "undefined" && window.innerWidth >= 1024;
    scrollToIndex(getNearestIndex() + (isDesktop ? 2 : 1));
  };

  return (
    <section
      className="bg-white border-b-1 border-black overflow-hidden animate-entrance-fade"
      style={{ animationDelay: "0.8s" }}
    >
      <div className="grid grid-cols-12 border-b-1 border-black">
        {/* Sidebar Info */}
        <div className="col-span-12 lg:col-span-3 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 py-10 lg:p-12 flex flex-col justify-center bg-gray-50">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Evidence Log
          </span>
          <h2 className="font-display  !text-4xl md:!text-4xl font-bold uppercase leading-none mb-8">
            Our <br className="hidden lg:block" />
            work
          </h2>
          <p className="text-black-300 text-base leading-relaxed">
            Explore our portfolio of high-impact enterprise solutions and
            digital transformation success stories.
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
            {projects.map((project, index) => (
              <WorkCard key={index} {...project} />
            ))}

            {/* View All Card */}
            <div className="w-[100vw] md:w-[50vw] lg:w-[37.2vw] flex-shrink-0 h-full relative group bg-charcoal text-white flex items-center justify-center snap-start bg-energy-gradient-dark">
              <div className="text-center">
                <h3 className="font-display text-4xl font-bold uppercase mb-4">
                  View All
                  <br />
                  Projects
                </h3>
                <Link
                  className="inline-block border-2 border-primary text-primary px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-primary hover:text-black transition-colors"
                  href="#"
                >
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
