"use client";

import Image from "next/image";

export default function DedicationSection() {
  return (
    <section className="bg-paper py-24 border-b-2 border-black blueprint-grid">
      <style jsx>{`
        .blueprint-grid {
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black uppercase tracking-tighter mb-8 leading-tight">
              Dedication to Excellence
            </h2>

            <p className="text-xl text-black font-medium leading-relaxed italic mb-8 border-l-4 border-primary pl-6">
              &quot;We&apos;ve painstakingly built up our reputation from
              scratch by consistently delivering high quality work for our
              clients. On time, within budget and with a smile.&quot;
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Codezilla.io is a reputable web development service provider known
              for its dedication to excellence. The team focuses on delivering
              high-quality, customized solutions that meet client needs while
              adhering to timelines and budgets.
            </p>

            {/* <p className="text-gray-600 leading-relaxed">
                            Committed to innovation and customer satisfaction, Codezilla.io
                            ensures seamless and efficient project completion, fostering a
                            positive experience for clients.
                        </p> */}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary translate-x-4 translate-y-4"></div>
            <div className="relative z-10 w-full aspect-[4/3] border-2 border-black overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk"
                alt="Office discussion"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
