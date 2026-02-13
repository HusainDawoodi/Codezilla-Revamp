import { REVIEWLY_USE_CASES } from "@/constants/reviewly";

export default function UseCases() {
    return (
        <section className="bg-white py-24 border-b-2 border-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
            // Use Cases
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-black uppercase tracking-tight">
                        Built For
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
                    {REVIEWLY_USE_CASES.map((uc, i) => (
                        <div
                            key={i}
                            className={`p-8 lg:p-10 group hover:bg-black transition-all duration-500 flex flex-col ${i < REVIEWLY_USE_CASES.length - 1
                                    ? "border-b md:border-b-0 md:border-r border-black"
                                    : ""
                                }`}
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-all">
                                <span className="material-symbols-outlined text-primary !text-3xl group-hover:text-black transition-colors">
                                    {uc.icon}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-display font-bold uppercase text-black mb-3 group-hover:text-primary transition-colors tracking-tight">
                                {uc.title}
                            </h3>

                            {/* Description — 1 line */}
                            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                                {uc.description}
                            </p>

                            {/* Hover accent */}
                            <div className="w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-auto pt-8" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
