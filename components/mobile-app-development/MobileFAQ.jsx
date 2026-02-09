export default function MobileFAQ() {
  const faqs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "The timeline for mobile app development depends on the complexity of the app, the features required, and the platforms (iOS, Android, or both) being targeted. A simple app may take 3-4 months, while a more complex one with backend integration could take 6-9 months or more. We provide a detailed timeline during the planning phase.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, OS updates, performance monitoring, and feature enhancements to ensure your app remains up-to-date and functions smoothly as your user base grows.",
    },
    {
      question: "What technologies do you use for mobile app development?",
      answer:
        "We use a wide range of technologies including Swift and Objective-C for iOS, Kotlin and Java for Android, and cross-platform frameworks like Flutter and React Native. We choose the best tech stack based on your specific project requirements and business goals.",
    },
    {
      question: "Can you help with app store submission?",
      answer:
        "Absolutely. We handle the entire submission process for both the Apple App Store and Google Play Store. This includes preparing all necessary assets, ensuring compliance with guidelines, and managing the review process to get your app approved and live.",
    },
    {
      question: "Will I own the source code of the app?",
      answer:
        "Yes, upon completion and full payment of the project, you will have full ownership of the source code and all intellectual property rights associated with your custom mobile application.",
    },
  ];

  return (
    <section className="bg-[#F9F7F2] py-32 px-6 border-t border-black/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 animate-entrance-fade">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-black text-left md:text-center">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-24 bg-primary md:mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-black/10 bg-white rounded-[4px] overflow-hidden group hover:border-primary transition-colors duration-300 animate-entrance-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <details className="group p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-lg list-none text-black">
                  <span className="font-display uppercase tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <span className="transition group-open:rotate-180 material-symbols-outlined text-primary">
                    expand_more
                  </span>
                </summary>
                <div className="text-gray-600 mt-4 leading-relaxed text-sm font-light border-t border-black/5 pt-4">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
