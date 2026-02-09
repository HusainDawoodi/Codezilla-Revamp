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
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume > 0 && videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else if (newVolume === 0 && !videoRef.current.muted) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);

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
            muted={isMuted}
            loop
            onPlay={() => setIsPaused(false)}
            onPause={() => setIsPaused(true)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-colors"></div>
        <div className="absolute bottom-0 flex flex-col items-start justify-start z-10 text-left px-6 py-6 lg:py-10 lg:px-12">
          <div className="flex items-center gap-4 lg:gap-6 mb-4 lg:mb-8 lg:ml-4">
            <button
              onClick={togglePlay}
              className="w-10 h-10 lg:w-12 lg:h-12 bg-primary text-black rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_0_8px_rgba(255,109,0,0.3)] lg:shadow-[0_0_0_12px_rgba(255,109,0,0.3)] hover:shadow-[0_0_0_16px_rgba(255,255,255,0.2)] lg:hover:shadow-[0_0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="material-symbols-outlined !text-xl lg:!text-3xl">
                {isPaused ? "play_arrow" : "pause"}
              </span>
            </button>

            <div
              className={`flex items-center h-10 lg:h-16 backdrop-blur-sm rounded-full px-4 lg:px-5 border border-white/10 hover:border-primary/50 transition-all duration-300 ${isVolumeOpen ? "bg-black/80 lg:bg-black/50" : "bg-black/50"}`}
              onMouseEnter={() => {
                if (typeof window !== "undefined" && window.innerWidth >= 1024)
                  setIsVolumeOpen(true);
              }}
              onMouseLeave={() => {
                if (typeof window !== "undefined" && window.innerWidth >= 1024)
                  setIsVolumeOpen(false);
              }}
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 1024) {
                  setIsVolumeOpen(!isVolumeOpen);
                }
              }}
            >
              <button
                onClick={(e) => {
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth >= 1024
                  ) {
                    toggleMute();
                  } else {
                    // Prevent parent onClick from closing it immediately if we're just clicking the button
                    e.stopPropagation();
                    setIsVolumeOpen(!isVolumeOpen);
                  }
                }}
                className="text-white hover:text-primary transition-colors flex items-center justify-center pointer-events-auto"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                <span className="material-symbols-outlined !text-lg lg:!text-2xl">
                  {isMuted || volume === 0
                    ? "volume_off"
                    : volume < 0.5
                      ? "volume_down"
                      : "volume_up"}
                </span>
              </button>

              <div
                className={`transition-all duration-500 ease-out overflow-hidden flex items-center ${isVolumeOpen ? "w-24 opacity-100 ml-3" : "w-0 opacity-0 ml-0"}`}
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-white transition-all"
                  style={{
                    background: `linear-gradient(to right, #FF6D00 ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) ${(isMuted ? 0 : volume) * 100}%)`,
                  }}
                />
              </div>
            </div>
          </div>

          <span className="text-primary hidden lg:inline-block font-bold uppercase tracking-widest text-[10px] lg:text-sm mb-4  bg-black/50 px-3 py-1 border border-primary/30 backdrop-blur-sm">
            Act 2: The Philosophy
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-7xl font-bold text-white uppercase tracking-tighter leading-tight">
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
