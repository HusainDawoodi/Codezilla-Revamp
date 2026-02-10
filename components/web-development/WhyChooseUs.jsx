"use client";

export default function WhyChooseUs() {
  const advantages = [
    "Affordable Pricing Models",
    "High-Quality Code Standards",
    "Dedicated Expert Teams",
    "Customized Solutions",
  ];

  return (
    <section className="bg-charcoal py-24 text-white border-b-2 border-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-energy-gradient-dark opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="font-display text-4xl md:text-4xl font-bold uppercase tracking-tighter mb-6">
              Why choose Codezilla for web development services
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Codezilla offers affordable and high-quality web development
              services. Our team of experienced developers ensures that you get
              the best value for your money. We focus on creating custom
              solutions that fit your budget while maintaining high standards of
              quality and performance.
            </p>
          </div>

          {/* Right Column - Glass Card */}
          <div className="glass-card p-10 border-l-4 border-l-primary">
            <style jsx>{`
              .glass-card {
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.08);
              }
            `}</style>

            <h3 className="text-2xl font-display font-bold uppercase mb-6">
              The Codezilla Advantage
            </h3>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span className="text-gray-300">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
