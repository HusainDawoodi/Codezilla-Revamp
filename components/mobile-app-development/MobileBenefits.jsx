export default function MobileBenefits() {
  const benefits = [
    {
      icon: "campaign",
      title: "Enhanced customer engagement",
      description:
        "Mobile apps offer direct communication between companies and their clients. With push alerts, personalised offers, and real-time updates, marketers can successfully engage customers, increasing loyalty and retention while providing an effortless user experience that websites alone cannot always provide.",
    },
    {
      icon: "visibility",
      title: "Improved brand visibility",
      description:
        "Having a mobile app means that your brand is always available on users’ devices. Frequent exposure boosts brand recall and familiarity, making clients more inclined to connect with your services than competitors without a dedicated mobile presence.",
    },
    {
      icon: "settings_suggest",
      title: "Efficient Business Operations",
      description:
        "Custom mobile apps may optimize procedures, interact with existing systems, and enable real-time data access. This increases productivity, minimizes human errors, and enables firms to manage operations more efficiently, resulting in reduced expenses and faster decision-making.",
    },
    {
      icon: "person_check",
      title: "Personalized User Experience",
      description:
        "Mobile apps gather significant user data, allowing businesses to provide personalized content, product recommendations, and services. Personalization boosts customer satisfaction, enhances conversion rates, and builds connections by adjusting to unique user preferences.",
    },
    {
      icon: "extension",
      title: "Scalability and Flexibility",
      description:
        "Latest mobile app development solutions are designed to be flexible. Whether introducing new features, managing additional users, or extending into new areas, apps may adapt in along with corporate growth without requiring extensive reconstruction.",
    },
  ];

  return (
    <section className="bg-[#F9F7F2] py-32 lg:px-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
              <p className="text-gray-500 text-base leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
