import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-20 pb-10 border-b-2 border-black animate-entrance-fade" style={{ animationDelay: '1.8s' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Link
                                href="/"
                                className="font-display font-bold text-3xl tracking-tighter text-white uppercase group-hover:text-primary transition-colors"
                            >
                                <Image
                                    src="/images/white-logo.svg"
                                    alt="Codezilla Logo"
                                    width={208}
                                    height={40}
                                    className="w-35 lg:w-52"
                                    priority
                                />
                            </Link>
                            {/* <span className="material-symbols-outlined text-white text-4xl">grid_view</span>
                            <span className="font-display font-bold text-3xl tracking-tighter text-white uppercase">Codezilla</span> */}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We architect the future. A rigorous, engineering-first approach to complex digital transformation and AI integration.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-bold uppercase  tracking-widest text-primary mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-medium">
                            <li><Link className="hover:text-white transition-colors" href="#">UI/UX Design</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">QA &amp; Testing</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Web Development</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Mobile Development</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Cloud Computing</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-medium">
                            <li><Link className="hover:text-white transition-colors" href="#">About Us</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Solutions</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Case Studies</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-medium">
                            <li><a className="hover:text-white transition-colors" href="tel:+442070184541">+44 207 018 4541</a></li>
                            <li><a className="hover:text-white transition-colors" href="mailto:hello@codezilla.io">hello@codezilla.io</a></li>
                            <li className="pt-4 flex gap-4">
                                <a className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-colors text-xs font-bold" href="#">LI</a>
                                <a className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-colors text-xs font-bold" href="#">X</a>
                                <a className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-colors text-xs font-bold" href="#">IG</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500">
                    <span>&copy; 2024 Codezilla Inc.</span>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a className="hover:text-white transition-colors" href="#">Terms</a>
                        <a className="hover:text-white transition-colors" href="#">Privacy</a>
                        <a className="hover:text-white transition-colors" href="#">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
