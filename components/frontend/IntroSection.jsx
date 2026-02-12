import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="bg-[#FBFBF9] py-20 md:py-[120px]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black uppercase tracking-tight leading-tight">
              Front-End Development Services
            </h2>
            <div className="w-20 h-1 bg-primary mt-8"></div>
          </div>
          <div className="lg:col-span-7 space-y-10">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
              As a leading front-end development company, Codezilla specializes
              in creating immersive and responsive user interfaces that drive
              engagement and business growth. Our expertise spans modern
              JavaScript frameworks and semantic HTML/CSS to deliver
              pixel-perfect digital experiences.
            </p>
            <Link
              className="inline-flex items-center gap-4 text-black font-black uppercase tracking-[0.3em] text-[10px] group border-b-2 border-primary pb-1"
              href="#"
            >
              Initiate Project Dialogue
              <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform text-primary">
                trending_flat
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
