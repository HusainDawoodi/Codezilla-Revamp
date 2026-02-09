export default function MobileServices() {
  const services = [
    {
      icon: "phone_iphone",
      title: "Native App Development",
      description:
        "We create high-performance native apps for iOS and Android using Swift, Kotlin, and Java, ensuring seamless user experiences and robust functionality.",
    },
    {
      icon: "layers",
      title: "Cross-Platform App Development",
      description:
        "Leveraging frameworks like Flutter and React Native, we build apps that work flawlessly across multiple platforms, saving time and cost without compromising quality.",
    },
    {
      icon: "web",
      title: "Progressive Web Apps",
      description:
        "Our progressive web apps combine the best of web and mobile apps, offering fast load times, offline capabilities, and an engaging user experience.",
    },
  ];

  return (
    <section className="bg-[#080a0e] py-32 px-6 overflow-hidden relative">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto animate-entrance-fade">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase  leading-tight mb-4">
            Codezilla Mobile App Development: Services That Powers Sales &
            Success
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-charcoal border-t-4 border-primary/60 rounded-[4px] p-10 overflow-hidden transition-all duration-500 hover:shadow-[inset_0_0_50px_rgba(255,109,0,0.15)] hover:border-primary animate-entrance-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 circuit-pattern"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="material-symbols-outlined text-primary text-5xl font-light group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
