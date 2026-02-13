"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RAPID_TRACK } from "@/constants/rapid";

gsap.registerPlugin(ScrollTrigger);

export default function RapidTrack() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  // useEffect(() => {
  //   const pin = gsap.fromTo(
  //     sectionRef.current,
  //     {
  //       translateX: 0,
  //     },
  //     {
  //       translateX: "-150vw",
  //       ease: "none",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "top top",
  //         end: "1000 top",
  //         scrub: 0.6,
  //         pin: true,
  //       },
  //     },
  //   );
  //   return () => {
  //     pin.kill();
  //   };
  // }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    const ctx = gsap.context(() => {
      const totalWidth = section.scrollWidth;
      const screenWidth = window.innerWidth;
      const scrollDistance = totalWidth - screenWidth;

      gsap.to(section, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-[#F3F4F6] border-b border-black/5">
      <div ref={triggerRef}>
        <div className="absolute top-0 left-0 w-full pointer-events-none z-10 md:px-[10vw] px-6 pt-24 md:pt-32">
          <h2 className="text-3xl md:text-6xl lg:text-5xl font-bold tracking-tighter uppercase leading-none font-display text-charcoal ">
            Our Rapid Prototyping Process
          </h2>
        </div>
        <div
          ref={sectionRef}
          className="h-screen md:w-[250vw] flex flex-row relative items-end pb-12 md:pb-0 md:items-center md:px-[10vw] px-6"
        >
          <div className="flex flex-row gap-[2vw]">
            {RAPID_TRACK.map((step, idx) => (
              <div
                key={step.id}
                className="parallax-pane md:min-w-[500px]  h-[50vh] md:h-[55vh] bg-white border border-black/5 md:p-16 p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl rounded-xl flex-shrink-0"
              >
                <div className="absolute -right-8 -top-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700">
                  <span className="text-[10rem] font-black leading-none text-black font-display">
                    {step.id}
                  </span>
                </div>

                <div>
                  <span className="text-primary font-bold md:text-6xl text-4xl block mb-8 font-display">
                    {step.id}
                  </span>
                  <h3 className="md:text-3xl text-xl font-bold uppercase tracking-tighter mb-6 font-display text-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed font-medium max-w-sm">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto opacity-20 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-4">
                  <span className="material-symbols-outlined !text-[4rem] text-primary">
                    {step.icon}
                  </span>
                  <div className="h-[2px] w-24 bg-primary/20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
