import Image from "next/image";

export default function TestimonialsSection() {
    return (
        <section className="bg-[#FBFBF9] py-20 md:py-32 border-t border-black/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-24 text-center">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">
                        WHAT OUR CLIENTS SAY
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    <div className="space-y-10 group">
                        <p className="text-gray-600 text-xl md:text-2xl italic font-light leading-relaxed">
                            "Codezilla’s focus on the product and its strategy is outstanding,
                            showcasing their commitment to delivering value beyond just
                            development."
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 relative rounded-full overflow-hidden grayscale">
                                <Image
                                    alt="Khalil Halilu"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkdupBasrSHB9Dk4CJgvofx9GlXBWEvhiFLT42_ENdfdXlRFLZ2dlZM_GsXlxOUJppJSFEEMq9id2sgXcVGkWUC-AhKYJK48gIGN7Ree0oYOWq0tudv2-ob2UC19WKZFq6nNZQzVK_88ITuGh5_pFJooQdlKZ83KSArH2vLph8FINIgbsjiqfhjoJuEq4copvXWcTQ9ClX5ZuHg2mQDDHWZ0qLqo7LW5023wkNUGeY_sn9o92kLwZ1kd3G82Rt5hqvMf6u3Fd"
                                    className="object-cover"
                                    fill
                                />
                            </div>
                            <div>
                                <span className="block font-bold text-black uppercase tracking-wider">
                                    Khalil Halilu
                                </span>
                                <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em]">
                                    CEO at ShapShap
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-10 group">
                        <p className="text-gray-600 text-xl md:text-2xl italic font-light leading-relaxed">
                            "Codezilla demonstrated exceptional expertise and dedication
                            throughout the project, ensuring every requirement was met with
                            precision and excellence."
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 relative rounded-full overflow-hidden grayscale">
                                <Image
                                    alt="Niruban"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkdupBasrSHB9Dk4CJgvofx9GlXBWEvhiFLT42_ENdfdXlRFLZ2dlZM_GsXlxOUJppJSFEEMq9id2sgXcVGkWUC-AhKYJK48gIGN7Ree0oYOWq0tudv2-ob2UC19WKZFq6nNZQzVK_88ITuGh5_pFJooQdlKZ83KSArH2vLph8FINIgbsjiqfhjoJuEq4copvXWcTQ9ClX5ZuHg2mQDDHWZ0qLqo7LW5023wkNUGeY_sn9o92kLwZ1kd3G82Rt5hqvMf6u3Fd"
                                    className="object-cover"
                                    fill
                                />
                            </div>
                            <div>
                                <span className="block font-bold text-black uppercase tracking-wider">
                                    Niruban
                                </span>
                                <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em]">
                                    CEO at Thriving.ai
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
