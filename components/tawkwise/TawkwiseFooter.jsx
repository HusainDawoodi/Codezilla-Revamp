import { FOOTER_COLUMNS } from "@/constants/tawkwise";

export default function TawkwiseFooter() {
    const socialLinks = [
        { icon: "language", label: "Website", href: "#" },
        { icon: "mail", label: "Email", href: "#" },
        { icon: "groups", label: "Community", href: "#" },
    ];

    return (
        <footer className="bg-[#050505] text-white border-b-2 border-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <div className="font-display text-2xl font-bold uppercase tracking-tighter mb-4">
                            <span className="text-primary">Tawk</span>wise
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">
                            AI voice agents for every industry. Deploy intelligent conversations at scale.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                                    aria-label={link.label}
                                >
                                    <span className="material-symbols-outlined text-sm text-gray-500 hover:text-primary">
                                        {link.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer columns */}
                    {FOOTER_COLUMNS.map((column) => (
                        <div key={column.title}>
                            <h4 className="font-display text-xs font-bold uppercase tracking-[0.3em] text-white mb-5">
                                {column.title}
                            </h4>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-500 hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                        © 2026 Tawkwise. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-xs text-primary">verified_user</span>
                            SOC 2 Certified
                        </span>
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-xs text-primary">shield</span>
                            HIPAA Compliant
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
