"use client";

// import Marquee from "@/components/ui/Marquee";

// export default function TechStackMarquee() {
//   const technologies = [
//     { img: "/images/webDev-logo/react-full-logo.png", name: "React" },
//     { img: "/images/webDev-logo/vuejs-full-logo.png", name: "Vue.js" },
//     { img: "/images/webDev-logo/nodejs-full-logo.png", name: "Node.js" },
//     { img: "/images/webDev-logo/laravel-full-logo.png", name: "Laravel" },
//     { img: "/images/webDev-logo/aws-full-logo.png", name: "AWS" },
//     { img: "/images/webDev-logo/kubernetes-full-logo.png", name: "Kubernetes" },
//     { img: "/images/webDev-logo/nextjs-full-logo.png", name: "Next.js" },
//     { img: "/images/webDev-logo/postgreSQL-full-logo.png", name: "PostgreSQL" },
//   ];

//   return (
//     <Marquee title="Engineered with modern technologies" items={technologies} />
//   );
// }

import TechStackGrid from "@/components/ui/TechStackGrid";

// const UIUX_TECH_STACK = [
//   { icon: "/images/figma-icon.png", name: "Figma" },
//   { icon: "/images/sketch-icon.png", name: "Sketch" },
//   { icon: "/images/xd-icon.png", name: "Adobe XD" },
//   { icon: "/images/miro-icon.png", name: "Miro" },
//   { icon: "/images/react-icon.png", name: "React" },
//   { icon: "/images/html-icon.png", name: "HTML5" },
//   { icon: "/images/css-icon.png", name: "CSS3" },
//   { icon: "/images/photoshop-icon.png", name: "Photoshop" },
// ];

export default function TechStackMarquee() {
  const technologies = [
    { icon: "/images/webDev-logo/react-full-logo.png", name: "React" },
    { icon: "/images/webDev-logo/vuejs-full-logo.png", name: "Vue.js" },
    { icon: "/images/webDev-logo/nodejs-full-logo.png", name: "Node.js" },
    { icon: "/images/webDev-logo/laravel-full-logo.png", name: "Laravel" },
    { icon: "/images/webDev-logo/aws-full-logo.png", name: "AWS" },
    {
      icon: "/images/webDev-logo/kubernetes-full-logo.png",
      name: "Kubernetes",
    },
    { icon: "/images/webDev-logo/nextjs-full-logo.png", name: "Next.js" },
    {
      icon: "/images/webDev-logo/postgreSQL-full-logo.png",
      name: "PostgreSQL",
    },
  ];
  return (
    <section className="bg-[#F9F7F2] py-20 md:py-32 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-lg">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-charcoal uppercase tracking-tight mb-4">
              Technical Stack
            </h3>
            <p className="text-gray-500 text-base md:text-base">
              Quantifiable mastery across industry-leading design and
              development tools.
            </p>
          </div>
          <span className="font-mono text-xs md:text-sm text-gray-500 uppercase tracking-widest">
            // Mastery Matrix 2024
          </span>
        </div>

        <TechStackGrid items={technologies} theme={"light"} showName={false} />
      </div>
    </section>
  );
}
