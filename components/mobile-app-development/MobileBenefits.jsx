export default function MobileBenefits() {
  const benefits = [
    {
      icon: "campaign",
      title: "Enhanced customer engagement",
      description:
        "Direct communication channels that build long-term loyalty through personalized interactions and push notifications.",
    },
    {
      icon: "visibility",
      title: "Improved brand visibility",
      description:
        "Constant presence on user devices increases brand recall and keeps your business top-of-mind for customers.",
    },
    {
      icon: "settings_suggest",
      title: "Efficient Business Operations",
      description:
        "Streamline internal processes and improve productivity with custom mobile solutions for your workforce.",
    },
    {
      icon: "person_check",
      title: "Personalized User Experience",
      description:
        "Leverage user data to provide tailored content and recommendations that drive higher conversion rates.",
    },
    {
      icon: "extension",
      title: "Scalability and Flexibility",
      description:
        "Grow your app features and user base seamlessly with a robust architecture designed for future expansion.",
    },
  ];

  return (
    <section className="bg-[#F9F7F2] py-32 px-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 animate-entrance-fade">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase  mb-4 text-black">
            Benefits of using mobile app development solutions
          </h2>
          <p className="text-gray-600 max-w-3xl text-lg mt-4 font-light leading-relaxed">
            Mobile app development solutions offer a wide range of benefits for
            businesses looking to expand their reach and improve customer
            engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-black/5 p-8 group overflow-hidden rounded-[4px] hover:shadow-xl transition-all hover:-translate-y-1 duration-300 animate-entrance-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-[4px] flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-black uppercase mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
