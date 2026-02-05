export default function StatsBar() {
    const stats = [
        {
            value: '50+',
            label: 'Codezilla Developers',
        },
        {
            value: '300+',
            label: 'Projects Completed',
        },
        {
            value: '8+',
            label: 'Years of Experience',
        },
    ];

    return (
        <section className="bg-white border-y-2 border-black py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group flex flex-col justify-center items-center md:items-start"
                        >
                            <div className="font-display text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-1 transition-transform group-hover:scale-105 duration-300">
                                {stat.value}
                            </div>
                            <div className="text-black font-display font-bold text-xs uppercase tracking-[0.2em] opacity-60">
                                {stat.label}
                            </div>
                            <div className="w-8 h-[2px] bg-primary mt-4 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
