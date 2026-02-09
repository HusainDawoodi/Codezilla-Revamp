import Link from "next/link";
import Image from "next/image";

export default function ServicesGrid() {
  return (
    <section
      className="bg-charcoal text-white border-b-2 border-black animate-entrance-fade"
      style={{ animationDelay: "0.6s" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[92dvh]">
        {/* Intro Block */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 border-b-2 md:border-b-2 lg:border-b-0 lg:border-r-2 border-white/10 p-8 lg:p-12 flex flex-col justify-between bg-energy-gradient-dark relative z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              Capabilities
            </span>
            <h2 className="font-display text-4xl md:text-4xl font-bold uppercase leading-none mb-6">
              What <br className="hidden lg:block" />
              we do
            </h2>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-gray-300 text-md leading-relaxed">
              Our service matrix is designed for high-impact, scalable
              intervention. We deploy rapidly and iterate continuously.
            </p>
          </div>
          <div className="mt-12">
            <Link
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 text-primary hover:text-white hover:border-white transition-colors"
              href="#"
            >
              Full Service List{" "}
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Card 1: AI & Data Strategy */}
        <div className="col-span-1 border-b-2 lg:border-b-0 border-r-2 border-white/10 p-8 lg:p-12 group hover:text-white transition-all duration-500 relative flex flex-col justify-between h-[50vh] lg:h-auto overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <Image
              src="/images/aI-data-strategy.webp"
              alt="AI Strategy Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="flex justify-between items-start z-10">
            <span className="font-display text-6xl font-bold text-outline-white group-hover:text-primary transition-colors">
              01
            </span>
            <span className="material-symbols-outlined !text-4xl text-primary opacity-80 group-hover:opacity-100">
              psychology
            </span>
          </div>
          <div className="z-10 relative">
            <h3 className="font-display lg:text-3xl text-2xl font-bold uppercase mb-4 leading-tight group-hover:text-primary transition-colors">
              AI &amp; Data <br className="hidden lg:block" />
              Strategy
            </h3>
            <p className="text-sm opacity-60 group-hover:opacity-100 font-medium leading-relaxed mb-6 transition-opacity">
              Deploying predictive models directly into your business logic.
              From black box to clear ROI.
            </p>
            <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-primary">
              <span className="w-2 h-2 bg-primary"></span> Analyze
            </span>
          </div>
        </div>

        {/* Card 2: Cloud Architecture */}
        <div className="col-span-1 border-b-2 lg:border-b-0 border-r-2 border-white/10 p-8 lg:p-12 group hover:text-white transition-all duration-500 relative flex flex-col justify-between h-[50vh] lg:h-auto overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <Image
              src="/images/cloud-architecture.webp"
              alt="Cloud Architecture Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="flex justify-between items-start z-10">
            <span className="font-display text-6xl font-bold text-outline-white group-hover:text-primary transition-colors">
              02
            </span>
            <span className="material-symbols-outlined !text-4xl text-primary opacity-80 group-hover:opacity-100">
              cloud_sync
            </span>
          </div>
          <div className="z-10 relative">
            <h3 className="font-display lg:text-3xl text-2xl font-bold uppercase mb-4 leading-tight group-hover:text-primary transition-colors">
              Cloud <br className="hidden lg:block" />
              Architecture
            </h3>
            <p className="text-sm opacity-60 group-hover:opacity-100 font-medium leading-relaxed mb-6 transition-opacity">
              Building the invisible backbone of your enterprise. Scalable,
              secure, and resilient infrastructure.
            </p>
            <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-primary">
              <span className="w-2 h-2 bg-primary"></span> Scale
            </span>
          </div>
        </div>

        {/* Card 3: Product Engineering */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 md:border-r-0 lg:border-r-0 p-8 lg:p-12 group hover:text-white transition-all duration-500 relative flex flex-col justify-between h-[50vh] lg:h-auto overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {/* Using a placeholder or the URL provided in legacy code, but since it's a googleusercontent link, I will use a local placeholder if possible or keep the remote one. 
                 The legacy code used: https://lh3.googleusercontent.com/...
                 I'll stick to local assets if I can, but I don't see a `product-engineering.webp` in my view of file list.
                 I'll assume I should use the remote one or a placeholder. 
                 Wait, I moved images to public/images. Let me check if there's a file I missed or if I should assume the remote link is okay.
                 I'll use the remote link for now as Next.js Image source, but I need to allow domain in next.config.js or unoptimized.
                 For now, simpler to use standard <img> tag for the remote URL inside the absolute div to avoid config issues, OR standard Next Image with unoptimized.
                 Actually, better to use a placeholder or local image if I had one. I'll use the remote one with <img> for safety against config errors.
             */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUUWGaVonfDZI2sYkkTFKP76Pld62QDqAKhOSZEoYn2R_WMb3YK90DBM26QbJ_W4DBtjuhrRUi_jNaZiByMGudXVemM9lEONe57sIHMM8zV_aghBwVb8k6s43A23xkMeTuQ9nPALHKy3equUI-BMk9JjXvjpvG6x3NrQA98HENnwMnMJ5s3Jbf4rWX7dN3zBxV_SWePS5G872MScoSxdO6X96yD8O1jD_NUDh8WTw3bYMomi8sJzRLywyJqKvJrf0SWnNmg48dve6U"
              alt="Product Engineering Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="flex justify-between items-start z-10">
            <span className="font-display text-6xl font-bold text-outline-white group-hover:text-primary transition-colors">
              03
            </span>
            <span className="material-symbols-outlined !text-4xl text-primary opacity-80 group-hover:opacity-100">
              terminal
            </span>
          </div>
          <div className="z-10 relative">
            <h3 className="font-display lg:text-3xl text-2xl font-bold uppercase mb-4 leading-tight group-hover:text-primary transition-colors">
              Product <br className="hidden lg:block" />
              Engineering
            </h3>
            <p className="text-sm opacity-60 group-hover:opacity-100 font-medium leading-relaxed mb-6 transition-opacity">
              Full-cycle development. We don&apos;t just write code; we engineer
              outcomes through precise execution.
            </p>
            <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-primary">
              <span className="w-2 h-2 bg-primary"></span> Build
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
