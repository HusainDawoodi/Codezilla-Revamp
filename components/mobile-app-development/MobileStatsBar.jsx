export default function MobileStatsBar() {
  const stats = [
    {
      value: "100+",
      label: "Codezilla Developers",
    },
    {
      value: "1000+",
      label: "Projects Completed",
    },
    {
      value: "10+",
      label: "Years of Experience",
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="py-6 md:py-4 md:px-12 flex flex-col items-center justify-center text-center group"
            >
              <span className="text-primary font-display text-4xl md:text-5xl font-extrabold mb-2 tracking-tight transition-transform group-hover:scale-110 duration-300">
                {stat.value}
              </span>
              <span className="text-black/60 font-mono font-bold text-[11px] uppercase tracking-[0.2em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
