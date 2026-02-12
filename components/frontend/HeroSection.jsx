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
              User Experience Architecture
            </span>
            <div className="flex-1 h-px bg-white/10 max-w-[100px]"></div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-3xl lg:text-6xl font-bold text-white tracking-tighter uppercase mb-3">
              Hire Front-end Engineers
              <br />
              {/* <span className="text-outline-primary block mt-2">
                Engineers
              </span> */}
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed font-light border-l border-primary pl-6 md:pl-10">
            As a leading front-end development company, we provide advanced
            front-end development services that prioritize responsiveness,
            usability, and visually stunning websites. Our professional frontend
            developers create responsive, cross-platform, and intuitive
            interfaces that deliver exceptional performance across devices. From
            initial concept to final deployment, we build efficient and visually
            stunning websites that help your company connect with customers and
            generate long-term success.
          </p>
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Button variant="primary" size="md" href="#" icon="arrow_forward">
                HIRE FRONT-END ENGINEERS
              </Button>

              <Button variant="outline-white" size="md" href="#">
                SPEAK TO US
              </Button>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TrustBadges variant="dark" />
          </div>
        </div>
        <div className="lg:col-span-5 relative hidden lg:flex justify-end h-full items-end">
          <div className="relative w-full aspect-[4/5] max-w-md group">
            <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full group-hover:bg-primary/20 transition-all duration-1000"></div>
            <div className="relative w-full h-full bg-charcoal overflow-hidden rounded-[4px] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
              <Image
                alt="Lead Developer Portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkdupBasrSHB9Dk4CJgvofx9GlXBWEvhiFLT42_ENdfdXlRFLZ2dlZM_GsXlxOUJppJSFEEMq9id2sgXcVGkWUC-AhKYJK48gIGN7Ree0oYOWq0tudv2-ob2UC19WKZFq6nNZQzVK_88ITuGh5_pFJooQdlKZ83KSArH2vLph8FINIgbsjiqfhjoJuEq4copvXWcTQ9ClX5ZuHg2mQDDHWZ0qLqo7LW5023wkNUGeY_sn9o92kLwZ1kd3G82Rt5hqvMf6u3Fd"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/40 border border-white/10 backdrop-blur-xl rounded-[4px]">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-mono text-primary uppercase tracking-[0.4em]">
                    Current Session
                  </span>
                  <span className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                    Technical Consultation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
