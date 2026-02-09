"use client";

import Image from "next/image";

export default function TechStackMarquee() {
  const technologies = [
    { img: "/images/webDev-logo/react-full-logo.png", name: "React" },
    { img: "/images/webDev-logo/vuejs-full-logo.png", name: "Vue.js" },
    { img: "/images/webDev-logo/nodejs-full-logo.png", name: "Node.js" },
    { img: "/images/webDev-logo/laravel-full-logo.png", name: "Laravel" },
    { img: "/images/webDev-logo/aws-full-logo.png", name: "AWS" },
    { img: "/images/webDev-logo/kubernetes-full-logo.png", name: "Kubernetes" },
    { img: "/images/webDev-logo/nextjs-full-logo.png", name: "Next.js" },
    { img: "/images/webDev-logo/postgreSQL-full-logo.png", name: "PostgreSQL" },
  ];

  return (
    <section className="bg-[#F9F7F2] py-12 border-b-2 border-black overflow-hidden">
      <style jsx>{`
        .mask-image-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 text-center">
        Engineered with modern technologies
      </p>

      <div className="flex w-full overflow-hidden mask-image-fade">
        <div className="flex items-center gap-24 animate-marquee whitespace-nowrap min-w-full px-12 h-50">
          {/* First set */}
          {technologies.map((tech, index) => (
            <Image src={tech?.img} alt={tech?.name} width={100} height={100} />
          ))}
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <Image src={tech?.img} alt={tech?.name} width={100} height={100} />
          ))}
        </div>
      </div>
    </section>
  );
}
