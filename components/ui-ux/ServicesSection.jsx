export default function ServicesSection() {
    return (
        <section className="bg-charcoal py-32 px-12 overflow-hidden relative">
            <div className="absolute inset-0 blueprint-grid opacity-5"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-4xl font-bold text-white uppercase tracking-tight mb-4">UI/UX Services We Offer</h2>
                        <p className="text-gray-400">Comprehensive design solutions tailored to your business needs.</p>
                    </div>
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2">[ 01-06 / Capabilities ]</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/5">
                    <div className="p-12 border-r border-b border-white/5 group hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start mb-12">
                            <span className="material-symbols-outlined text-primary text-3xl">search_insights</span>
                            <span className="text-white/20 font-display font-bold text-4xl group-hover:text-primary transition-colors">01</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-white uppercase mb-4">User Research</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">We conduct in-depth research to understand user behaviors, needs, and motivations through observation techniques.</p>
                    </div>
                    <div className="p-12 border-r border-b border-white/5 group hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start mb-12">
                            <span className="material-symbols-outlined text-primary text-3xl">palette</span>
                            <span className="text-white/20 font-display font-bold text-4xl group-hover:text-primary transition-colors">02</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-white uppercase mb-4">UI Design</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">Creating visually appealing interfaces that align with your brand identity while ensuring usability and accessibility.</p>
                    </div>
                    <div className="p-12 border-r border-b border-white/5 group hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start mb-12">
                            <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                            <span className="text-white/20 font-display font-bold text-4xl group-hover:text-primary transition-colors">03</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-white uppercase mb-4">UX Design</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">Designing the overall experience to be seamless, intuitive, and efficient for the end-user.</p>
                    </div>
                    <div className="p-12 border-r border-b border-white/5 group hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start mb-12">
                            <span className="material-symbols-outlined text-primary text-3xl">design_services</span>
                            <span className="text-white/20 font-display font-bold text-4xl group-hover:text-primary transition-colors">04</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-white uppercase mb-4">Wireframing</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">Building low and high-fidelity mockups to visualize structure and flow before development begins.</p>
                    </div>
                    <div className="p-12 border-r border-b border-white/5 group hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start mb-12">
                            <span className="material-symbols-outlined text-primary text-3xl">smartphone</span>
                            <span className="text-white/20 font-display font-bold text-4xl group-hover:text-primary transition-colors">05</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-white uppercase mb-4">Mobile Design</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">Designing responsive and native mobile interfaces that provide excellent experiences on smaller screens.</p>
                    </div>
                    <div className="p-12 border-r border-b border-white/5 group hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start mb-12">
                            <span className="material-symbols-outlined text-primary text-3xl">monitor</span>
                            <span className="text-white/20 font-display font-bold text-4xl group-hover:text-primary transition-colors">06</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-white uppercase mb-4">Web Design</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">Crafting modern, responsive websites that convert visitors into customers through strategic layout.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
