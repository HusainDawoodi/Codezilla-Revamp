export default function MobileServices() {
  const services = [
    {
      icon: "phone_iphone",
      title: "Native App Development",
      description:
        "When an app is native it has been built for a specific platform – iOS or Android – and is installed via the app store. Each version is developed in its own programming language and won’t work on different devices. Native apps are fast responsive and highly functional – so most mobile apps tend to be native.",
    },
    {
      icon: "layers",
      title: "Cross-Platform App Development",
      description:
        "The clue’s in the title. Cross-platform means the app will work on different platforms, so you don’t need to build an app for each platform individually. Cross-platform apps usually rely on existing tools and frameworks such as Flutter and can be done relatively cheaply and easily.",
    },
    {
      icon: "web",
      title: "Progressive Web Apps",
      description:
        "A PWA is a web application which can be installed on a device like a native mobile app. PWAs usually have great UI/UX which works equally well on web or on mobile. It can be an efficient, cost effective and fast solution.",
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
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-charcoal border-t-4 border-primary/60 rounded-[4px] p-10 overflow-hidden transition-all duration-500 hover:shadow-[inset_0_0_50px_rgba(255,109,0,0.15)] hover:border-primary animate-entrance-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 circuit-pattern"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="material-symbols-outlined text-primary !text-5xl font-light group-hover:scale-110 transition-transform duration-300">
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
