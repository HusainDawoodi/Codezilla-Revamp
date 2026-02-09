
export default function ContactSection() {
    return (
        <section className="bg-obsidian py-32 relative border-t border-white/5 overflow-hidden bg-dark">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="max-w-7xl mx-auto px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="bg-dark-accent p-10 border border-white/10 shadow-2xl">
                    <div className="mb-8">
                        <h3 className="text-white font-display text-2xl font-bold uppercase tracking-tight">Project Inquiry</h3>
                        <p className="text-gray-500 text-xs font-mono uppercase mt-2">Precision Data Collection</p>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Company Name</label>
                                <input className="w-full bg-dark border border-white/10 text-white p-4 text-sm focus:border-primary focus:ring-0 rounded-none transition-colors" placeholder="e.g. Acme Corp" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Contact Email</label>
                                <input className="w-full bg-dark border border-white/10 text-white p-4 text-sm focus:border-primary focus:ring-0 rounded-none transition-colors" placeholder="name@company.com" type="email" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Project Budget (Range)</label>
                            <select className="w-full bg-obsidian border border-white/10 text-white p-4 text-sm focus:border-primary focus:ring-0 rounded-none transition-colors appearance-none md:appearance-auto">
                                <option>$10k - $25k</option>
                                <option>$25k - $50k</option>
                                <option>$50k - $100k</option>
                                <option>$100k+</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Project Brief</label>
                            <textarea className="w-full bg-obsidian border border-white/10 text-white p-4 text-sm focus:border-primary focus:ring-0 rounded-none transition-colors" placeholder="Briefly describe your objectives..." rows="4"></textarea>
                        </div>
                        <button className="w-full bg-primary text-white py-5 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-all" type="submit">
                            Initiate Consultation
                        </button>
                    </form>
                </div>
                <div className="space-y-10">
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white uppercase tracking-tight leading-[1.1]">
                        Ready to discuss<br /><span className="text-outline-primary">your product?</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-light max-w-lg">
                        Schedule a consultation to explore how our systematic design approach can scale your business and improve user satisfaction.
                    </p>
                    <div className="flex flex-col gap-4 pt-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Direct Contact</span>
                            <a className="text-white border-b border-white/20 pb-1 font-mono text-xl w-fit hover:text-primary hover:border-primary transition-all" href="mailto:hello@codezilla.io">
                                hello@codezilla.io
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-gray-500 font-mono text-[10px] uppercase">
                            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Available Now</span>
                            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                            <span>Avg. Response &lt; 24h</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
