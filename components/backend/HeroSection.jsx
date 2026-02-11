import Image from "next/image";
import Button from "../ui/Button";
import TrustBadges from "../ui/TrustBadges";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 md:py-22 flex items-center bg-charcoal blueprint-grid overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-[0.6em] uppercase">
              System Architecture
            </span>
            <div className="flex-1 h-px bg-white/10 max-w-[100px]"></div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl lg:text-5xl  font-bold text-white  tracking-tighter uppercase mb-3">
              Hire BACK-END Engineers
            </h1>
          </div>
          <p className="text-gray-400 text-base max-w-lg leading-relaxed font-light border-l border-primary pl-6 md:pl-10">
            Our backend development services make sure your digital platforms
            work smoothly by providing reliable, adaptable, and high-performance
            server-side solutions. We specialize in developing robust APIs,
            database management systems, and unique backend designs that are
            customized to your specific requirements. With years of experience
            in new frameworks and technologies, we provide consistent
            performance, intuitive integrations, and improved safety. Hire our
            backend development company to offer your apps better productivity,
            adaptability, and long-term growth.
          </p>
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Button variant="primary" size="md" href="#" icon="arrow_forward">
                HIRE OUR BACKEND ENGINEERS
              </Button>

              <Button variant="outline-white" size="md" href="#">
                SPEAK TO US
              </Button>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TrustBadges />
          </div>
        </div>
        <div className="lg:col-span-5 relative hidden lg:flex justify-end h-full items-end">
          <div className="relative w-full h-[600px] overflow-hidden grayscale contrast-125 mix-blend-luminosity border border-white/10">
            <Image
              alt="Lead Architect"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkdupBasrSHB9Dk4CJgvofx9GlXBWEvhiFLT42_ENdfdXlRFLZ2dlZM_GsXlxOUJppJSFEEMq9id2sgXcVGkWUC-AhKYJK48gIGN7Ree0oYOWq0tudv2-ob2UC19WKZFq6nNZQzVK_88ITuGh5_pFJooQdlKZ83KSArH2vLph8FINIgbsjiqfhjoJuEq4copvXWcTQ9ClX5ZuHg2mQDDHWZ0qLqo7LW5023wkNUGeY_sn9o92kLwZ1kd3G82Rt5hqvMf6u3Fd"
              className="object-cover"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
