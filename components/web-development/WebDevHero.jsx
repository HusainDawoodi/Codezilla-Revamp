import Image from "next/image";
import Button from "@/components/ui/Button";
import TrustBadges from "../ui/TrustBadges";

export default function WebDevHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center animate-entrance-fade overflow-hidden bg-charcoal pt-24 pb-12">
      {/* Background Image */}
      <Image
        src="/images/web-development.jpeg"
        alt="Web Development Abstract Visualization"
        fill
        className="object-cover opacity-80 mix-blend-screen"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-charcoal/80"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-primary"></span>
          <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase">
            Architecture &amp; Engineering
          </span>
          <span className="w-12 h-[1px] bg-primary"></span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-6xl font-bold text-white leading-none tracking-tighter uppercase mb-8">
          WEB DEVELOPMENT services
        </h1>

        {/* Description */}
        <p className="text-base md:text-xl text-gray-300 max-w-4xl mx-auto  leading-relaxed mb-12 opacity-80">
          We are a reputable web development company dedicated to building
          innovative, effective, and intuitive websites and web apps. With
          talented web developers, designers, and strategists on our team, we
          offer website development solutions that are just as great as they
          perform. Whether you need to start from scratch or make improvements
          to an existing website, we can help you realize your vision and
          establish a vibrant online presence.
        </p>
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Button variant="primary" size="md" href="#" icon="arrow_forward">
            Learn More
          </Button>
        </div>
        <div className="flex items-center justify-center gap-4 mb-12">
          <TrustBadges variant="dark" />
        </div>
      </div>
    </section>
  );
}
