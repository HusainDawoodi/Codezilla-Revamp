import Image from "next/image";
import Button from "@/components/ui/Button";

export default function WebDevHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center animate-entrance-fade overflow-hidden bg-charcoal pt-24 pb-12">
      {/* Background Image */}
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk"
        alt="Web Development Abstract Visualization"
        fill
        className="object-cover opacity-30 mix-blend-screen"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/90"></div>

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
        <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tighter uppercase mb-8">
          WEB DEVELOPMENT
        </h1>

        {/* Description */}
        <p className="text-md md:text-xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed mb-12 opacity-80">
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
          <Button variant="primary" size="lg" href="#" icon="arrow_forward">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
