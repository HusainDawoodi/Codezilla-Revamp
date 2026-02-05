import SectionHeader from '@/components/ui/SectionHeader';

export default function ClientTestimonials() {
    const testimonials = [
        {
            quote: 'Codezilla transformed our vision into reality. Their technical expertise is unmatched.',
            name: 'Khalil Halilu',
            initials: 'KH',
        },
        {
            quote: 'Professional, timely, and incredibly skilled. A pleasure to work with from start to finish.',
            name: 'Niruban',
            initials: 'N',
        },
        {
            quote: 'The best web development partner we\'ve had. They truly care about the product\'s success.',
            name: 'Sahil Sethi',
            initials: 'SS',
        },
    ];

    return (
        <section className="bg-charcoal py-24 border-b-2 border-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    title="What our clients say"
                    align="center"
                    theme="dark"
                    className="mb-16"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white/5 p-8 border border-white/10 relative"
                        >
                            {/* Quote Icon */}
                            <span className="material-symbols-outlined text-primary text-4xl absolute top-6 right-6 opacity-20">
                                format_quote
                            </span>

                            {/* Quote */}
                            <p className="text-gray-300 italic mb-6 leading-relaxed">
                                &quot;{testimonial.quote}&quot;
                            </p>

                            {/* Client Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold font-display uppercase">
                                        {testimonial.name}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
