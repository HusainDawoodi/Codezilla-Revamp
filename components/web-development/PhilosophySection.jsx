export default function PhilosophySection() {
  const points = [
    {
      title: "Market Research & Analysis",
      description:
        "Deep analysis of your market position to build solutions that dominate.",
    },
    {
      title: "India's Top 1% Software company",
      description:
        "Elite engineering talent delivering world-class digital products.",
    },
    {
      title: "Trusted by Startups",
      description: "The preferred technical partner for high-growth ventures.",
    },
    {
      title: "Idea to Deployment, We manage All",
      description:
        "Complete end-to-end lifecycle management of your web product.",
    },
  ];

  return (
    <section className="bg-white py-24 border-b-2 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Heading */}
          <div className="lg:col-span-12">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-4xl font-bold text-black uppercase   mb-8">
              Web Development That Powers Sales & Success
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              For us, web development is more than just design – it’s about
              driving real business results. We help businesses grow their
              customer base, increase sales, and improve customer engagement by
              giving them personalized digital solutions. With over a decade of
              experience in web app development services, we focus on creating
              custom strategies that maximise returns while ensuring every
              project aligns perfectly with your goals and vision.
            </p>
          </div>

          {/* Right Column - Points Grid */}
          <div className="lg:col-span-12 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary pl-8 group"
                >
                  <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
