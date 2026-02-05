"use client";

import { useRef, useState, useEffect } from "react";
import TestimonialVideoCard from "./TestimonialVideoCard";
// import KhalilVideo from "/videos/khalil_m6AFz1B6.mp4";
// import HaadiVideo from "/videos/Haadi.mp4";
// import ShainVideo from "/videos/Shain.mp4";
// import WembyVideo from "/videos/Wemby.mp4";
// import FarukhVideo from "/videos/Farukh.mp4";
// import CharlieVideo from "/videos/charlie_NrKB7TX9.mp4";
// Sample dat based on the HTML
const TESTIMONIALS = [
  {
    id: 1,
    videoSrc: "/videos/charlie_NrKB7TX9.mp4",
    posterSrc: "/images/testimonial1-poster.jpg",
    quote: "Codezilla completely",
    clientImage: "/images/rightchargefav.svg",
    clientName: "Charlie Cook",
    clientRole: "CEO, Rightcharge",
  },
  {
    id: 2,
    videoSrc: "/videos/khalil_m6AFz1B6.mp4",
    posterSrc: "/images/testimonial1-poster.jpg",
    quote: "Codezilla completely",
    clientImage: "/images/khalil.svg",
    clientName: "Khalil Halilu  ",
    clientRole: "CEO, Apex Fin",
  },
  {
    id: 3,
    videoSrc: "/videos/Shain.mp4",
    posterSrc: "/images/testimonial1-poster.jpg",
    quote: "Codezilla completely",
    clientImage: "/images/thriving.svg",
    clientName: "Shain",
    clientRole: "CEO, Thriving",
  },
  {
    id: 4,
    videoSrc: "/videos/Wemby.mp4",
    posterSrc: "/images/testimonial1-poster.jpg",
    quote: "Codezilla completely",
    clientImage: "/images/wemby.svg",
    clientName: "Alberto",
    clientRole: "CEO, Wemby",
  },
  {
    id: 5,
    videoSrc: "/videos/Haadi.mp4", // Reusing as per original code repeats
    posterSrc: "/images/testimonial1-poster.jpg",
    quote: "Codezilla completely",
    clientImage: "/images/farmtoyou.svg",
    clientName: "Haadi AbdulMutalab",
    clientRole: "CEO, Farm To You",
  },

  {
    id: 6,
    videoSrc: "/videos/Farukh.mp4",
    posterSrc: "/images/testimonial1-poster.jpg",
    quote: "Codezilla completely",
    clientImage: "/images/farukh.svg",
    clientName: "Farukh",
    clientRole: "CEO, Apex Fin",
  },
];

export default function TestimonialCarousel() {
  const trackRef = useRef(null);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const GAP = 32;

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.children[0]?.offsetWidth || 300;
    const step = cardWidth + GAP;

    const currentScroll = track.parentElement.scrollLeft;
    const targetScroll =
      direction === "left" ? currentScroll - step : currentScroll + step;

    track.parentElement.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = trackRef.current?.parentElement;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10); // -10 tolerance
    }
  };

  useEffect(() => {
    const el = trackRef.current?.parentElement;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll(); // init
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section
      className="bg-charcoal text-white border-b-2 border-black py-24 overflow-hidden relative animate-entrance-fade"
      style={{ animationDelay: "1.2s" }}
    >
      <div className="absolute inset-0 bg-energy-gradient-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between lg:items-end mb-16 border-b border-white/20 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              Social Proof
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase ">
              Client Success
            </h2>
          </div>

          {/* <div className="flex gap-4 mt-4 md:mt-0">
                        <button
                            onClick={() => scroll('left')}
                            className={`w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors rounded-full ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
                            disabled={!canScrollLeft}
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className={`w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors rounded-full ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : ''}`}
                            disabled={!canScrollRight}
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div> */}
        </div>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden">
          <div className="overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex justify-between gap-4 mt-4 md:mt-0 absolute top-[50%] left-0 z-30 w-full pointer-events-none">
              <button
                onClick={() => scroll("left")}
                className={`top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-black bg-white/90 hover:bg-primary hover:border-primary hover:text-black z-30 flex items-center justify-center rounded-full transition-colors pointer-events-auto ${!canScrollLeft ? "opacity-30 cursor-not-allowed" : ""}`}
                disabled={!canScrollLeft}
              >
                <span className="material-symbols-outlined text-black">
                  arrow_back
                </span>
              </button>
              <button
                onClick={() => scroll("right")}
                className={`top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-black bg-white/90 hover:bg-primary hover:border-primary hover:text-black z-30 flex items-center justify-center rounded-full transition-colors pointer-events-auto ${!canScrollRight ? "opacity-30 cursor-not-allowed" : ""}`}
                disabled={!canScrollRight}
              >
                <span className="material-symbols-outlined text-black">
                  arrow_forward
                </span>
              </button>
            </div>
            <div ref={trackRef} className="flex gap-8 w-max pb-8 !w-full">
              {TESTIMONIALS.map((item) => (
                <TestimonialVideoCard
                  key={item.id}
                  {...item}
                  isActive={activeVideoId === item.id}
                  onPlay={() => setActiveVideoId(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
