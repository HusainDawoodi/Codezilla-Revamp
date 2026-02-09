import Image from "next/image";

export default function TechStack() {
  return (
    <section className="bg-charcoal py-20 md:py-32 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-lg">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              Technical Stack
            </h3>
            <p className="text-gray-500 text-sm md:text-md">
              Quantifiable mastery across industry-leading design and
              development tools.
            </p>
          </div>
          <span className="font-mono text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
            // Mastery Matrix 2024
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          <div className="bg-charcoal p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-white/[0.02] transition-colors">
            <Image
              src="/images/figma-icon.png"
              alt="Figma"
              width={30}
              height={30}
            />
            <div>
              <span className="font-display text-base md:text-lg font-bold text-white uppercase block">
                Figma
              </span>
              <span className="font-mono text-[8px] md:text-[10px] text-primary uppercase tracking-widest mt-2 block">
                9.8/10 Proficiency
              </span>
            </div>
          </div>
          <div className="bg-charcoal p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-white/[0.02] transition-colors">
            <Image
              src="/images/sketch-icon.png"
              alt="Sketch"
              width={30}
              height={30}
            />
            <div>
              <span className="font-display text-base md:text-lg font-bold text-white uppercase block">
                Sketch
              </span>
              <span className="font-mono text-[8px] md:text-[10px] text-primary uppercase tracking-widest mt-2 block">
                9.5/10 Proficiency
              </span>
            </div>
          </div>
          <div className="bg-charcoal p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-white/[0.02] transition-colors">
            <Image
              src="/images/xd-icon.png"
              alt="Adobe XD"
              width={30}
              height={30}
            />
            <div>
              <span className="font-display text-base md:text-lg font-bold text-white uppercase block">
                Adobe XD
              </span>
              <span className="font-mono text-[8px] md:text-[10px] text-primary uppercase tracking-widest mt-2 block">
                9.2/10 Proficiency
              </span>
            </div>
          </div>
          <div className="bg-charcoal p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-white/[0.02] transition-colors">
            <Image
              src="/images/miro-icon.png"
              alt="Miro"
              width={30}
              height={30}
            />
            <div>
              <span className="font-display text-base md:text-lg font-bold text-white uppercase block">
                Miro
              </span>
              <span className="font-mono text-[8px] md:text-[10px] text-primary uppercase tracking-widest mt-2 block">
                9.0/10 Proficiency
              </span>
            </div>
          </div>
          <div className="bg-charcoal p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-white/[0.02] transition-colors">
            <Image
              src="/images/react-icon.png"
              alt="React"
              width={30}
              height={30}
            />
            <div>
              <span className="font-display text-base md:text-lg font-bold text-white uppercase block">
                React
              </span>
              <span className="font-mono text-[8px] md:text-[10px] text-primary uppercase tracking-widest mt-2 block">
                8.5/10 Proficiency
              </span>
            </div>
          </div>
          <div className="bg-charcoal p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-white/[0.02] transition-colors">
            <Image
              src="/images/html-icon.png"
              alt="HTML5"
              width={30}
              height={30}
            />
            <div>
              <span className="font-display text-base md:text-lg font-bold text-white uppercase block">
                HTML5
              </span>
              <span className="font-mono text-[8px] md:text-[10px] text-primary uppercase tracking-widest mt-2 block">
                10/10 Proficiency
              </span>
            </div>
          </div>
          <div className="bg-charcoal p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-white/[0.02] transition-colors">
            <Image
              src="/images/css-icon.png"
              alt="CSS3"
              width={30}
              height={30}
            />
            <div>
              <span className="font-display text-base md:text-lg font-bold text-white uppercase block">
                CSS3
              </span>
              <span className="font-mono text-[8px] md:text-[10px] text-primary uppercase tracking-widest mt-2 block">
                9.5/10 Proficiency
              </span>
            </div>
          </div>
          <div className="bg-charcoal p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-white/[0.02] transition-colors">
            <Image
              src="/images/photoshop-icon.png"
              alt="Photoshop"
              width={30}
              height={30}
            />
            <div>
              <span className="font-display text-base md:text-lg font-bold text-white uppercase block">
                Photoshop
              </span>
              <span className="font-mono text-[8px] md:text-[10px] text-primary uppercase tracking-widest mt-2 block">
                9.4/10 Proficiency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
