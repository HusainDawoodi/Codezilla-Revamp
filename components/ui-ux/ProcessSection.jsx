export default function ProcessSection() {
  return (
    <section className="bg-[#F9F7F2] py-20 md:py-32 pb-42 px-6 md:px-12 border-y border-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-4 text-center">
            How Our Design Process Works
          </h2>
          <p className="text-gray-500 text-sm md:text-md">
            We follow a proven collaborative process to transform ideas into
            meaningful digital experiences. Each phase ensures clarity,
            creativity, and precision.
          </p>
        </div>
        <div className="space-y-12">
          <div className="bg-white p-6 md:p-10 border border-black/5 relative group hover:border-primary transition-colors lg:sticky lg:top-25">
            <div className="absolute -left-2 md:-left-4 top-6 md:top-10 w-8 h-8 bg-black text-white font-mono text-xs flex items-center justify-center font-bold">
              01
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="p-3 border border-primary/20 bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                  travel_explore
                </span>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-display font-bold text-black uppercase tracking-tight">
                  Discovery
                </h3>
                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                  Every good design starts with understanding. We research
                  deeply into your objectives, target audience, and product
                  vision to find insights that form the core of the experience.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 border border-black/5 relative group hover:border-primary transition-colors lg:sticky lg:top-25">
            <div className="absolute -left-2 md:-left-4 top-6 md:top-10 w-8 h-8 bg-black text-white font-mono text-xs flex items-center justify-center font-bold">
              02
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="p-3 border border-primary/20 bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                  architecture
                </span>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-display font-bold text-black uppercase tracking-tight">
                  Strategy
                </h3>
                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                  With insights in place, we can chart a clear design path. User
                  flows, structure, and functionality are carefully designed to
                  strike a balance between corporate objectives and user
                  requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 border border-black/5 relative group hover:border-primary transition-colors lg:sticky lg:top-25">
            <div className="absolute -left-2 md:-left-4 top-6 md:top-10 w-8 h-8 bg-black text-white font-mono text-xs flex items-center justify-center font-bold">
              03
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="p-3 border border-primary/20 bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                  brush
                </span>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-display font-bold text-black uppercase tracking-tight">
                  Design Sprints
                </h3>
                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                  Ideas are given visual form through rapid, focused design
                  iterations. We build wireframes, prototypes, and finished
                  interfaces that adapt based on feedback and testing.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 border border-black/5 relative group hover:border-primary transition-colors lg:sticky lg:top-25">
            <div className="absolute -left-2 md:-left-4 top-6 md:top-10 w-8 h-8 bg-black text-white font-mono text-xs flex items-center justify-center font-bold">
              04
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="p-3 border border-primary/20 bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                  verified
                </span>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-display font-bold text-black uppercase tracking-tight">
                  Engineering
                </h3>
                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                  Design meets development. Our team works closely together to
                  bring graphics into responsive, high-performance digital
                  solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 border border-black/5 relative group hover:border-primary transition-colors lg:sticky lg:top-25">
            <div className="absolute -left-2 md:-left-4 top-6 md:top-10 w-8 h-8 bg-black text-white font-mono text-xs flex items-center justify-center font-bold">
              05
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="p-3 border border-primary/20 bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                  construction
                </span>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-display font-bold text-black uppercase tracking-tight">
                  Maintenance
                </h3>
                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                  Great design evolves. We monitor, modify and improve your
                  product to ensure it meets user expectations, performance
                  needs, and future growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
