export default function WhyChooseSection() {
  const features = [
    {
      icon: "developer_mode",
      title: "Expertise in Modern Frontend Stack",
      desc: "Deep mastery in the full React ecosystem, Next.js, and advanced CSS frameworks to build future-proof applications.",
    },
    {
      icon: "public",
      title: "Enterprise Global Perspective",
      desc: "Experience delivering solutions for international clients, ensuring cultural relevance and global accessibility standards.",
    },
    {
      icon: "sync",
      title: "Agile Transparent Process",
      desc: "Full visibility into development cycles with regular updates, clear communication, and iterative delivery schedules.",
    },
  ];

  return (
    <section className="bg-[#FBFBF9] py-20 md:py-[120px] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-16 md:mb-24 max-w-3xl">
          Why Choose codezilla.io as Your Frontend Partner?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-8 group">
              <div className="w-16 h-16 flex items-center justify-center border border-black/5 bg-white shadow-sm rounded-[4px] group-hover:border-primary/50 group-hover:shadow-md transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {feature.icon}
                </span>
              </div>
              <h4 className="text-xl font-display font-bold text-black uppercase leading-snug">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
