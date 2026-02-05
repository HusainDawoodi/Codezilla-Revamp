"use client";

export default function TechStackMarquee() {
  const technologies = [
    "React",
    "Vue.js",
    "Node.js",
    "Laravel",
    "AWS",
    "Kubernetes",
    "Next.js",
    "PostgreSQL",
  ];

  return (
    <section className="py-12 bg-charcoal border-b-2 border-black overflow-hidden">
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

      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 text-center">
        Engineered with modern technologies
      </p>

      <div className="flex w-full overflow-hidden mask-image-fade">
        <div className="flex items-center gap-24 animate-marquee whitespace-nowrap min-w-full px-12">
          {/* First set */}
          {technologies.map((tech, index) => (
            <span
              key={`first-${index}`}
              className="font-display font-black text-3xl text-white/50 hover:text-white/90 uppercase"
            >
              {tech}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <span
              key={`second-${index}`}
              className="font-display font-black text-3xl text-white/10 uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
