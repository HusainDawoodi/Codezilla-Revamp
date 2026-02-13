// import Image from "next/image";
// import Button from "@/components/ui/Button";

// export default function RapidHero() {
//   return (
//     <section className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-obsidian relative">
//       <div className="absolute inset-0 bg-energy-gradient-dark pointer-events-none z-0 opacity-30"></div>

//       {/* Left Content Side */}
//       <div className="w-full md:w-1/2 relative flex items-center justify-center overflow-hidden border-r border-white/5 z-10 p-6 md:p-0">
//         {/* Animated Background Text Wall */}
//         <div className="absolute inset-0 flex flex-col gap-8 opacity-5 select-none pointer-events-none items-center justify-center overflow-hidden">
//           {["VALIDATION", "UX", "SPEED", "SCALABILITY"].map((text, i) => (
//             <div
//               key={i}
//               className="text-[8rem] lg:text-[12rem] font-black leading-none tracking-tighter text-white animate-pulse"
//               style={{ animationDelay: `${i * 0.5}s` }}
//             >
//               {text}
//             </div>
//           ))}
//         </div>

//         <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid"></div>

//         <div className="relative z-10 px-8 lg:px-24">
//           <h1 className="text-white text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.85] mb-12 font-display animate-entrance-fade">
//             TRANSFORMING
//             <br />
//             IDEAS INTO
//             <br />
//             <span className="text-primary">TESTABLE EXPERIENCES.</span>
//           </h1>

//           <div
//             className="flex flex-col sm:flex-row items-center gap-12 mt-12 animate-entrance-fade"
//             style={{ animationDelay: "0.2s" }}
//           >
//             <Button variant="primary" size="lg" className="px-10 py-5 text-xs">
//               START PROTOTYPING
//             </Button>

//             <div className="flex gap-8 items-center opacity-30 grayscale text-[9px] font-bold uppercase tracking-[0.3em] text-white">
//               <span>Google 4.9/5</span>
//               <span>Clutch ★★★★★</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Image Side */}
//       <div className="w-full md:w-1/2 relative bg-black z-10">
//         <Image
//           src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoetoVLi0gel-zonTAvp17D6bU9l04JtPPXnsCxIT17pYWu_0LO3lPyrB4y2S2HUkpPpKt2U_8KVY4a44rqFFDPy7egsjhSpzStIMXASfzp65ZvWEkZxseWQeOBZV5v-g2M-cCC4I3IJcDPErmt3Q3er9_ClUt-67XvBgS3cfV9_3i4ifYGO1wQTD1lB4RCKztt68sub_IRMFo3LBqNiNKjNmQ-onjgdLHB1xgEGafWsFaAfOg-Z4Mayzr9byFpFjQDjDtgBrM"
//           alt="Designer sketching and prototyping"
//           fill
//           className="object-cover grayscale brightness-[0.4]"
//           priority
//         />
//         <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
//           <div className="w-full h-full opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

//           {/* Data Pulse Visual */}
//           <div className="flex items-center justify-center">
//             <svg className="w-64 h-64 opacity-50" viewBox="0 0 100 100">
//               <circle
//                 className="animate-ping"
//                 cx="50"
//                 cy="50"
//                 fill="none"
//                 r="40"
//                 stroke="#ff6d00"
//                 strokeWidth="0.5"
//               ></circle>
//               <circle cx="50" cy="50" fill="#ff6d00" r="2"></circle>
//               <path
//                 d="M50 10 L50 90 M10 50 L90 50"
//                 stroke="#ff6d00"
//                 strokeDasharray="2 2"
//                 strokeWidth="0.2"
//               ></path>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useState } from "react";
import Button from "../ui/Button";
import TrustBadges from "../ui/TrustBadges";

export default function TestingHero() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <section className="relative min-h-[90vh] flex items-center bg-charcoal blueprint-grid md:py-25">
      <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20 lg:py-0">
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <span className="text-primary font-mono text-sm uppercase tracking-[0.4em] inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-primary"></span>
              Rapid Prototyping
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
              Transforming Ideas Into Testable Experiences
              {/* {HERO_CONTENT.title}<br /> */}
              {/* <span className="text-outline-primary">{HERO_CONTENT.titleSuffix}</span> */}
            </h1>
          </div>
          <div className="space-y-6 max-w-3xl">
            {/* <p className="text-primary font-display text-md lg:text-lg font-bold uppercase tracking-wide">
                            {HERO_CONTENT.solutionTitle}
                        </p> */}
            <p className="text-gray-400 text-sm lg:text-lg leading-relaxed font-light">
              Codezilla offers rapid prototyping to quickly achieve your product
              ideas. Before a single line of production code is created, we
              transform ideas into interactive, clickable experiences that teams
              can view, test, and improve. Decision-makers are aligned,
              guesswork is removed, and genuine usability insights are
              discovered early thanks to our quick technique. The outcome?
              Better validation, quicker momentum, and a more defined
              development path will enable you to start building with assurance,
              accuracy, and purpose.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button href="#audit" size="md">
              Connect Now
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Button>
            {/* 
                        <Link
                            href="#audit"
                            className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-[2px]"
                        >
                            {HERO_CONTENT.primaryCTA}
                            <span className="material-symbols-outlined text-sm">analytics</span>
                        </Link> */}
          </div>
          <div className="mt-2 flex items-center gap-2">
            <TrustBadges />
          </div>
        </div>
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full aspect-square max-w-md border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1">
            <div className="absolute inset-0 blueprint-grid opacity-30"></div>
            <div className="relative w-full h-full bg-charcoal flex items-center justify-center overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkdupBasrSHB9Dk4CJgvofx9GlXBWEvhiFLT42_ENdfdXlRFLZ2dlZM_GsXlxOUJppJSFEEMq9id2sgXcVGkWUC-AhKYJK48gIGN7Ree0oYOWq0tudv2-ob2UC19WKZFq6nNZQzVK_88ITuGh5_pFJooQdlKZ83KSArH2vLph8FINIgbsjiqfhjoJuEq4copvXWcTQ9ClX5ZuHg2mQDDHWZ0qLqo7LW5023wkNUGeY_sn9o92kLwZ1kd3G82Rt5hqvMf6u3Fd"
                alt="Focused Software Testing Engineer portrait"
                className="w-full h-full object-cover mix-blend-screen opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
