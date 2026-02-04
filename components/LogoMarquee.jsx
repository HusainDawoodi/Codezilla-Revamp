import Image from "next/image";

const MARQUEE_ITEMS = [
  {
    type: "custom",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2026/01/25142445/Clutch-Top-App-Development-Company2026.png",
    alt: "Clutch Top App Development Company 2026",
    lines: ["Clutch Top", "App Development", "Company 2026"],
  },
  {
    type: "custom",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2026/01/25142446/Clutch-Top-GenerativeAI-Company2026.png",
    alt: "Clutch Top Generative AI Company 2026",
    lines: ["Clutch Top", "Generative AI", "Company 2026"],
  },
  {
    type: "custom",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2026/01/06060928/Webby-icon.svg",
    alt: "Webby Award Honoree 2024",
    lines: ["Webby", "Award Honoree", "2024"],
  },
  {
    type: "custom",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2026/01/06060922/google-app-award-1.png",
    alt: "Google Best App Award In Personal Growth 2024",
    lines: ["Google Best App", "Personal Growth", "2024"],
  },
  {
    type: "custom",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2026/01/06060916/aws-advance-tier.svg",
    alt: "AWS Partner Advanced Tier Services",
    lines: ["AWS Partner", "Advanced Tier", "Services"],
  },
  {
    type: "custom",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2026/01/06060919/aws-cloud-op-icon.svg",
    alt: "AWS Partner Cloud Operations Services Competency",
    lines: ["AWS Partner", "Cloud Operations", "Competency"],
  },
  {
    type: "custom",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2026/01/06060919/aws-security-1.png",
    alt: "AWS Partner Security Services Competency",
    lines: ["AWS Partner", "Security Services", "Competency"],
  },
  {
    type: "custom",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2026/01/06060925/socII-icon.svg",
    alt: "SOC 2 Type II Certified",
    lines: ["SOC 2", "Type II", "Certified"],
  },
  {
    type: "custom",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2026/01/06032612/ISO-icon.svg",
    alt: "ISO/IEC 27001:2022 Certified Company",
    lines: ["ISO/IEC", "27001:2022", "Certified"],
  },
  {
    type: "custom",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2026/01/06032612/ISO-icon.svg",
    alt: "ISO/IEC 42001:2023 Certified Company",
    lines: ["ISO/IEC", "42001:2023", "Certified"],
  },
  {
    type: "image",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2025/10/28104654/google-developer.png",
    alt: "Google Developers",
  },
  {
    type: "image",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2025/10/01170430/microsoft.webp",
    alt: "Microsoft Partner",
  },
  {
    type: "image",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2025/10/01170431/mixpanel.webp",
    alt: "Mixpanel",
  },
  {
    type: "image",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2025/10/01170426/forbes.webp",
    alt: "Forbes",
  },
  {
    type: "image",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2025/10/01170425/cbso.webp",
    alt: "CNBC",
  },
  {
    type: "image",
    src: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2025/10/01170429/ibm-business-partner.webp",
    alt: "IBM Business Partner",
  },
];

export default function LogoMarquee() {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <p className="text-center text-xs tracking-widest text-gray-600 mb-5 uppercase font-semibold">
        Recognized by Leading Industry Platforms
      </p>

      <div className="relative">
        <div className="w-full px-6 lg:px-2 py-2">
          <div className="overflow-hidden">
            <div
              className="image-marquee-wrapper"
              role="region"
              aria-label="Scrolling partner and award logos"
            >
              {/* Single-row logos marquee track (two duplicates for seamless loop) */}
              <div
                className="image-marquee animate-marquee flex gap-16 md:gap-24 w-full"
                aria-hidden="true"
              >
                {[0, 1, 2].map((setIndex) => (
                  <div
                    key={setIndex}
                    className="flex items-center gap-16 md:gap-24 marquee-set"
                  >
                    {MARQUEE_ITEMS.map((item, i) => (
                      <div key={i} className="iso-custom-logo flex">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={115}
                          height={115}
                          className="max-h-16 w-auto"
                        />
                        <div className="iso-text">
                          {item?.lines?.length > 0 &&
                            item.lines.map((line, li) => (
                              <span
                                key={li}
                                className={li === 1 ? "font-bold" : ""}
                              >
                                {line}
                                <br />
                              </span>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
