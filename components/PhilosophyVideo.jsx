"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function PhilosophyVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const containerRef = useRef(null);
  const timeline = useRef(null);
  const videoRef = useRef(null);
  const VIDEO_URL =
    "https://drive.google.com/file/d/178ba1XrU8vqPCdBUpmaRv87ibeeUHQgT/preview";

  useEffect(() => {
    // Initialize GSAP timeline
    if (modalRef.current && containerRef.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .fromTo(
          modalRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" },
        )
        .fromTo(
          containerRef.current,
          {
            scale: 0.85,
            y: 60,
            opacity: 0,
            rotateX: 10,
          },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2",
        );
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (timeline.current) timeline.current.play(0);
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const openVideo = () => setIsOpen(true);

  const closeVideo = () => {
    // Animate out
    if (modalRef.current && containerRef.current) {
      gsap.to(containerRef.current, {
        scale: 0.9,
        y: 40,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setIsOpen(false);
          gsap.set([modalRef.current, containerRef.current], {
            clearProps: "all",
          });
        },
      });
    } else {
      setIsOpen(false);
    }
  };
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      setIsPaused(videoRef.current.paused);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <>
      <section
        className="relative w-full h-[60vh] lg:h-[85vh] border-b-2 border-black overflow-hidden group bg-charcoal animate-entrance-fade"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-700">
          <video
            src={"/videos/codezilla-overview.mp4"}
            ref={videoRef}
            autoPlay
            loop
            muted
            onPlay={() => setIsPaused(false)}
            onPause={() => setIsPaused(true)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-colors"></div>
        <div className="absolute bottom-0 flex flex-col items-start justify-start z-10 text-center px-4 py-10">
          <button
            onClick={togglePlay}
            className="ml-4 w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center mb-8 hover:scale-110 hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_0_12px_rgba(255,109,0,0.3)] hover:shadow-[0_0_0_20px_rgba(255,255,255,0.2)]"
          >
            <span className="material-symbols-outlined !text-3xl">
              {isPaused ? "play_arrow" : "pause"}
            </span>
          </button>
          <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4 inline-block bg-black/50 px-3 py-1 border border-primary/30 backdrop-blur-sm">
            Act 2: The Philosophy
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter">
            Our <span className="text-outline-white-video">Philosophy</span>
          </h2>
        </div>
      </section>

      {/* Video Modal */}
      <div
        ref={modalRef}
        className={`fixed inset-0 z-50 items-center justify-center bg-black/80 backdrop-blur-sm ${isOpen ? "flex" : "hidden"}`}
        onClick={(e) => {
          if (e.target === modalRef.current) closeVideo();
        }}
      >
        <button
          onClick={closeVideo}
          className="absolute top-6 right-6 text-white text-4xl hover:scale-110 transition z-10"
        >
          &times;
        </button>

        <div
          ref={containerRef}
          className="relative w-[90%] max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        >
          {/* {isOpen && (
            <iframe
              className="w-full h-full"
              src={VIDEO_URL}
              title="Philosophy Video"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
            ></iframe>
          )} */}
        </div>
      </div>
    </>
  );
}
