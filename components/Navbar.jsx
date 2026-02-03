import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white border-b-2 border-black">
            <div className="w-full grid grid-cols-12 h-20 items-center relative">
                <div className="col-span-6 lg:col-span-3 pl-8 flex items-center gap-4 cursor-pointer border-r-2 border-black h-full bg-white hover:bg-orange-50 transition-colors group">
                    <Link href="/" className="font-display font-bold text-3xl tracking-tighter text-black uppercase group-hover:text-primary transition-colors">
                        <Image
                            src="/images/codezilla.svg"
                            alt="Codezilla Logo"
                            width={208}
                            height={40}
                            className="w-52"
                            priority
                        />
                    </Link>
                </div>
                <div className="hidden lg:col-span-6 lg:flex justify-center items-center h-full bg-white border-r-2 border-black px-4 relative">
                    <div className="flex items-center gap-8 xl:gap-12 h-full">
                        <Link href="#" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-black h-full flex items-center px-2">
                            Who we are
                        </Link>
                        <div className="group h-full flex items-center px-2 cursor-pointer">
                            <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors text-black flex items-center gap-1">
                                What we do <span className="material-symbols-outlined text-[16px]">expand_more</span>
                            </span>
                            <div className="mega-menu absolute top-[80px] left-0 w-[100vw] bg-black text-white border-t border-b-2 border-black shadow-2xl opacity-0 invisible transform -translate-x-[25%] transition-all duration-300 z-50 p-12">
                                <div className="max-w-7xl grid grid-cols-12 gap-8">
                                    <div className="col-span-3 border-r border-white/20 pr-8">
                                        <h3 className="text-xl font-display font-bold text-primary mb-6 uppercase">
                                            Digital Product<br />Development
                                        </h3>
                                        <ul className="space-y-3">
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Rapid Prototyping</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Product Discovery</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">UI/UX Design Services</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Data Science & AI</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Software Architecture</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-span-3 border-r border-white/20 pr-8">
                                        <h3 className="text-xl font-display font-bold text-white mb-6 uppercase">
                                            Staff<br />Augmentation
                                        </h3>
                                        <ul className="space-y-3">
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Software Architects</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Back-end Engineers</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Front-end Engineers</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">DevOps Engineers</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Mobile Engineers</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-span-3 border-r border-white/20 pr-8">
                                        <h3 className="text-xl font-display font-bold text-white mb-6 uppercase">
                                            Codezilla<br />Accelerators
                                        </h3>
                                        <ul className="space-y-3">
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Document AI</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Codezilla Flywheel</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Codezilla Guard:IAM</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Chatbot Delivery</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-span-3 pl-4">
                                        <h3 className="text-xl font-display font-bold text-white mb-6 uppercase">
                                            System<br />Integration
                                        </h3>
                                        <ul className="space-y-3">
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Salesforce</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Adobe Experience Cloud</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">Microsoft Dynamics 365</Link></li>
                                            <li><Link className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block" href="#">MuleSoft Integration</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-black h-full flex items-center px-2" href="#">
                            Case studies
                        </Link>
                        <div className="group h-full flex items-center px-2 cursor-pointer">
                            <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors text-black flex items-center gap-1">
                                What we think <span className="material-symbols-outlined text-[16px]">expand_more</span>
                            </span>
                            <div className="mega-menu absolute top-[80px] left-0 w-[100vw] bg-black text-white border-t border-b-2 border-black shadow-2xl opacity-0 invisible transform -translate-x-[65%] transition-all duration-300 z-50 p-12">
                                <div className="max-w-7xl grid grid-cols-12 gap-8">
                                    <div className="col-span-4 border-r border-white/20 pr-8 flex flex-col items-start">
                                        <span className="material-symbols-outlined text-primary text-5xl mb-4 font-light">radio_button_checked</span>
                                        <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Life at Codezilla</h3>
                                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">What does life at Codezilla look like? Dive deep into our company culture by reading more about our activities.</p>
                                        <Link className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1" href="#">View Culture</Link>
                                    </div>
                                    <div className="col-span-4 border-r border-white/20 pr-8 px-8 flex flex-col items-start">
                                        <span className="material-symbols-outlined text-primary text-5xl mb-4 font-light">insights</span>
                                        <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Business Insights</h3>
                                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">Latest news. Hot topics. Learn more about the latest industry trends from experts that drive digital-led progress.</p>
                                        <Link className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1" href="#">Read Blog</Link>
                                    </div>
                                    <div className="col-span-4 pl-8 flex flex-col items-start">
                                        <span className="material-symbols-outlined text-primary text-5xl mb-4 font-light">volunteer_activism</span>
                                        <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">CSR Initiatives</h3>
                                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">Giving back to the community is one of the core values of our company. Dive into the activities we have organized.</p>
                                        <Link className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1" href="#">Our Impact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-black h-full flex items-center px-2" href="#">
                            Career
                        </Link>
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-3 flex justify-end items-center h-full bg-white px-8">
                    <Link href="#" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#E65100] shadow-[0_4px_12px_rgba(255,109,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,109,0,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
                        <span>Schedule Call</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
