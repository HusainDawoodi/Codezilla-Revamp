import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 md:py-32 flex items-center bg-charcoal blueprint-grid overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="flex items-center gap-4">
            <span className="w-4 h-4 bg-primary"></span>
            <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
              Est. 2017 — Senior Expertise
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-[1.05] tracking-tighter uppercase mb-3">
              UI / UX Services
              <br />
              {/* <span className="text-outline-primary">for 14+ years.</span> */}
            </h1>
          </div>
          <p className="text-gray-400 text-md max-w-xl leading-relaxed font-light">
            We specialise in modern UI/UX design services that transform digital
            products into intuitive and engaging experiences. Whether you're
            launching a new app, revamping a website, or extending your
            platform, our creative team brings clarity, strategy, and visual
            appeal to each project. From user research and wireframing to
            interactive UI design and seamless experience flows, we ensure that
            every interaction is natural and effective.
          </p>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-[2px]"
              >
                View Case Studies
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-3 border border-white/10 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-[2px]"
              >
                Design Philosophy
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 md:gap-8 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded">
                  <Image
                    src="/images/google-icon.png"
                    alt="Google Reviews"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex text-primary text-sm">
                    {[1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[16px] filled"
                      >
                        star
                      </span>
                    ))}
                    <span className="material-symbols-outlined text-[16px] filled">
                      star_half
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400">
                    4.9/5 Rating
                  </span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10"></div>
              <div className="flex items-center gap-3">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded">
                  <Image
                    src="/images/clutch-icon.png"
                    alt="Clutch"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex text-primary text-sm">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[16px] filled"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400">
                    5.0/5 Clutch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative hidden lg:flex justify-end">
          <div className="relative w-full aspect-square max-w-md border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1">
            <div className="absolute inset-0 blueprint-grid opacity-30"></div>
            <div className="relative w-full h-full bg-charcoal flex items-center justify-center overflow-hidden">
              <Image
                alt="Abstract Structure Render"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkdupBasrSHB9Dk4CJgvofx9GlXBWEvhiFLT42_ENdfdXlRFLZ2dlZM_GsXlxOUJppJSFEEMq9id2sgXcVGkWUC-AhKYJK48gIGN7Ree0oYOWq0tudv2-ob2UC19WKZFq6nNZQzVK_88ITuGh5_pFJooQdlKZ83KSArH2vLph8FINIgbsjiqfhjoJuEq4copvXWcTQ9ClX5ZuHg2mQDDHWZ0qLqo7LW5023wkNUGeY_sn9o92kLwZ1kd3G82Rt5hqvMf6u3Fd"
                className="object-cover mix-blend-screen opacity-50"
                fill
              />
              <div className="absolute inset-0 border border-white/5"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary w-24 h-24 p-4 flex flex-col justify-end border border-white/10 shadow-2xl">
              <span className="text-white font-display font-bold text-4xl">
                14
              </span>
              <span className="text-white/80 font-mono text-[8px] uppercase tracking-tighter">
                Years Exp.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
