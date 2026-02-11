import Image from "next/image";
import Input from "../ui/Input";

export default function ContactSection() {
    return (
        <section className="bg-charcoal py-0 min-h-[90vh] flex items-center relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-full w-full">
                <div className="py-24 pr-12 self-center">
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none mb-16">
                        TRANSFORM YOUR <span className="text-primary italic">DIGITAL</span>{" "}
                        LANDSCAPE.
                    </h2>
                    <form className="space-y-12">
                        <div className="relative group">
                            <Input
                                label="Corporate Entity / Name"
                                placeholder=" "
                                variant="transparent"
                                type="text"
                                required
                            />
                        </div>
                        <div className="relative group">
                            <Input
                                label="Communication Protocol / Email"
                                placeholder=" "
                                variant="transparent"
                                type="email"
                                required
                            />
                        </div>
                        <div className="relative group">
                            <Input
                                label="Project Parameters / Message"
                                placeholder=" "
                                variant="transparent"
                                type="textarea"
                                rows="1"
                                required
                            />
                        </div>
                        <button className="bg-primary text-white px-12 py-6 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all rounded-[4px] shadow-2xl">
                            Send Strategic Inquiry
                        </button>
                    </form>
                </div>
                <div className="hidden lg:flex items-center justify-center bg-dark-accent/30 border-l border-white/5 relative">
                    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                        <div className="absolute inset-0 border-[40px] border-primary/5 rounded-full"></div>
                        <div className="absolute inset-4 border-[2px] border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="w-80 h-80 rounded-full border-4 border-primary p-4 bg-charcoal relative z-10 shadow-[0_0_80px_rgba(255,109,0,0.2)] overflow-hidden">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <Image
                                    alt="David Miller"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkdupBasrSHB9Dk4CJgvofx9GlXBWEvhiFLT42_ENdfdXlRFLZ2dlZM_GsXlxOUJppJSFEEMq9id2sgXcVGkWUC-AhKYJK48gIGN7Ree0oYOWq0tudv2-ob2UC19WKZFq6nNZQzVK_88ITuGh5_pFJooQdlKZ83KSArH2vLph8FINIgbsjiqfhjoJuEq4copvXWcTQ9ClX5ZuHg2mQDDHWZ0qLqo7LW5023wkNUGeY_sn9o92kLwZ1kd3G82Rt5hqvMf6u3Fd"
                                    className="object-cover grayscale"
                                    fill
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-20 w-max">
                            <span className="block text-white text-2xl font-bold uppercase tracking-tight">
                                David Miller
                            </span>
                            <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase block mt-2">
                                Managing Partner
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
