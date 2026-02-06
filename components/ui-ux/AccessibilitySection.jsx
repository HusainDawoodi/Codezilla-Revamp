import Image from "next/image";

export default function AccessibilitySection() {
    return (
        <section className="bg-[#F9F7F2] py-32 px-12 overflow-hidden border-b border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <span className="text-primary font-mono text-xs uppercase tracking-[0.2em]">Craftsmanship</span>
                            <h2 className="font-display text-4xl font-bold text-black uppercase tracking-tight">Accessibility by Default</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                            We don't view accessibility as a feature request. It is the foundation of our technical mastery. Every product we deliver meets rigorous standards.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div className="space-y-2">
                                <span className="text-black font-bold text-sm block">AA/AAA Contrast</span>
                                <p className="text-gray-600 text-xs">Maximum readability for all visual capabilities.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-black font-bold text-sm block">Screen Reader Ready</span>
                                <p className="text-gray-600 text-xs">Semantic HTML structure for assistive tech.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-12 border border-black/5">
                        <div className="font-mono text-[10px] text-gray-400 mb-8 uppercase tracking-widest">// Technical Architecture Rendering</div>
                        <Image
                            alt="Geometric UI Structure"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgb6gJPkiRYi6okckdOklicZeHcujd4F1xkALqIHbbTpEsOXdnkV1Ae4zoLNQXrk49D-wgaafUph388hVzEARBhdL1bCYxzKb6znm3-3iSce0kXnpsWkGuTOU2RVYZIbu88i8mbuHr876-HsYDxTtbSRLoB5dt7D9nAYRJa9WWH9n94REN_sOySFiWoc4d_mmROFavDOqrUyxnO7MfIUTVXBpPn5gt58QAWgHcS3hodmshNk74kCZThOayVg00LOI_JHCwGfxM"
                            width={600}
                            height={400}
                            className="w-full grayscale opacity-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
