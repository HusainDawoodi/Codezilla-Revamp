import Input from '@/components/ui/Input';
import { AUDIT_FORM } from '@/constants/software-testing';

export default function TestingAudit() {
    return (
        <section className="bg-obsidian py-20 md:py-32 relative border-t border-white/5 overflow-hidden" id="audit">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                <div className="bg-[#1A1D24] p-8 md:p-10 border border-white/10 shadow-2xl">
                    <div className="mb-8">
                        <h3 className="text-white font-display text-2xl font-bold uppercase tracking-tight">
                            {AUDIT_FORM.title}
                        </h3>
                        <p className="text-gray-500 text-[10px] font-mono uppercase mt-2">
                            {AUDIT_FORM.subtitle}
                        </p>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Company Name"
                                placeholder="e.g. Acme Corp"
                                variant="dark"
                                required
                            />
                            <Input
                                type="email"
                                label="Contact Email"
                                placeholder="name@company.com"
                                variant="dark"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                Audit Scope Required
                            </label>
                            <div className="relative">
                                <select className="w-full bg-obsidian border border-white/10 text-white p-4 text-sm focus:border-primary focus:outline-none rounded-none transition-colors appearance-none">
                                    {AUDIT_FORM.scopeOptions.map((option, index) => (
                                        <option key={index}>{option}</option>
                                    ))}
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm">
                                    expand_more
                                </span>
                            </div>
                        </div>
                        <Input
                            type="textarea"
                            label="Primary Objectives"
                            placeholder="Describe the critical friction points in your current lifecycle..."
                            variant="dark"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-5 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-all"
                        >
                            Initiate Strategy Audit
                        </button>
                    </form>
                </div>
                <div className="space-y-8 md:space-y-10 order-first lg:order-last">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-[1.1]">
                        Hire the partners<br />
                        <span className="text-outline-primary">who protect</span><br />
                        your brand.
                    </h2>
                    <p className="text-gray-400 text-lg font-light max-w-lg">
                        {AUDIT_FORM.sideDescription}
                    </p>
                    <div className="flex flex-col gap-4 pt-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                                {AUDIT_FORM.contactLabel}
                            </span>
                            <a
                                href={`mailto:${AUDIT_FORM.contactEmail}`}
                                className="text-white border-b border-white/20 pb-1 font-mono text-xl w-fit hover:text-primary hover:border-primary transition-all"
                            >
                                {AUDIT_FORM.contactEmail}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
