"use client";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      icon: "travel_explore",
      title: "Discovery & Planning",
      description:
        "Understanding your business goals, target audience, and technical needs to create a clear roadmap.",
    },
    {
      number: "02",
      icon: "design_services",
      title: "Design & Prototyping",
      description:
        "Crafting user-friendly, responsive designs that focus on exceptional user experience and branding.",
    },
    {
      number: "03",
      icon: "developer_board",
      title: "Development & Integration",
      description:
        "Building scalable, secure, and high-performing web applications using modern frameworks and technologies.",
    },
    {
      number: "04",
      icon: "rocket",
      title: "Testing & Deployment",
      description:
        "Ensuring quality through rigorous testing, followed by smooth deployment and ongoing support.",
    },
  ];

  return (
    <section className="bg-paper py-24 border-b-2 border-black blueprint-grid">
      <style jsx>{`
        .blueprint-grid {
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              // WORKFLOW
            </span>
            <h2 className="font-display text-5xl font-bold text-black uppercase tracking-tighter">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed mt-5">
              We are committed to helping you create a brighter and more
              sustainable future. Whether you're launching a business, designing
              a website, or building a brand, we provide the tools, expertise,
              and support you need to succeed. Let’s shape the futurebetter,
              smarter, and stronger.
            </p>
          </div>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-black/10 relative bg-white/30">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative min-h-[350px] p-8 flex flex-col justify-between group overflow-hidden bg-white/50 hover:bg-white transition-all ${
                index < steps.length - 1 ? "border-r border-black/10" : ""
              } ${index < 2 ? "border-b lg:border-b-0 border-black/10" : ""}`}
            >
              <div className="relative z-10">
                {/* Number and Icon */}
                <div className="flex justify-between items-start mb-8">
                  <span className="font-display text-6xl font-bold text-gray-200 group-hover:text-primary/80 transition-colors">
                    {step.number}
                  </span>
                  <span className="material-symbols-outlined text-primary text-4xl">
                    {step.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold uppercase font-display text-black mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Animated Underline */}
              <div className="w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
