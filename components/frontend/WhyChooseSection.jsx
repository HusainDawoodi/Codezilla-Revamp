export default function WhyChooseSection() {
  const features = [
    {
      icon: "developer_mode",
      title: "Expertise in Modern Frontend Stack",
      desc: "Codezilla focuses on innovative frontend frameworks such as React, Angular, and Vue.js. Our frontend developers ensure responsive, high-performing, and scalable applications that deliver seamless user experiences. We develop advanced digital solutions that are suited to your company’s requirements by utilizing the newest techniques and tools.",
    },
    {
      icon: "public",
      title: "Enterprise Global Perspective",
      desc: "Codezilla delivers a global approach to frontend development, delivering solutions that offer to numerous consumers and industries globally. Our developers understand international design standards, cultural variations, and user expectations, ensuring your product reaches to worldwide.",
    },
    {
      icon: "sync",
      title: "Agile Transparent Process",
      desc: "Codezilla follows agile methodologies, ensuring flexibility and transparency throughout the project lifecycle. With regular updates, open communication, and collaborative decision-making, clients remain fully informed and in control. This streamlined procedure makes sure that things are delivered on time without affecting quality or new ideas.",
    },
  ];

  return (
    <section className="bg-[#FBFBF9] py-20 md:py-[120px] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-black uppercase tracking-tight mb-16 md:mb-24 max-w-3xl">
          Why Choose codezilla as Your Frontend Partner?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-8 group">
              <div className="w-16 h-16 flex items-center justify-center border border-black/5 bg-white shadow-sm rounded-[4px] group-hover:border-primary/50 group-hover:bg-primary  group-hover:shadow-md transition-all duration-500">
                <span className="material-symbols-outlined group-hover:text-white text-primary !text-3xl">
                  {feature.icon}
                </span>
              </div>
              <h4 className="!text-xl font-display font-bold text-black uppercase leading-snug">
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
