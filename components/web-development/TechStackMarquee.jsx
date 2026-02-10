"use client";

import Marquee from "@/components/ui/Marquee";

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
    <Marquee title="Engineered with modern technologies" items={technologies} />
  );
}
