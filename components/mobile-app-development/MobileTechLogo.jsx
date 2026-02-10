import TechStackGrid from "@/components/ui/TechStackGrid";

export default function MobileTechLogo() {
  const technologies = [
    { icon: "/images/mobileApp-logo/android.svg", name: "Android" },
    { icon: "/images/mobileApp-logo/ios.svg", name: "iOS" },
    { icon: "/images/mobileApp-logo/flutter.svg", name: "Flutter" },
    { icon: "/images/react-icon.png", name: "React Native" },
    { icon: "/images/webDev-logo/nodejs-full-logo.png", name: "Node.js" },
    { icon: "/images/aws.png", name: "AWS Cloud" },
    { icon: "/images/mobileApp-logo/native.svg", name: "Native" },
    { icon: "/images/google-icon.png", name: "Firebase" },
  ];

  return (
    <section className="bg-[#F9F7F2]  py-20 md:py-32 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-lg">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-charcoal uppercase tracking-tight mb-4">
              Technical Stack
            </h3>
            <p className="text-gray-500 text-base md:text-base">
              Harnessing the power of native and cross-platform technologies to
              build high-performance mobile applications.
            </p>
          </div>
          <span className="font-mono text-xs md:text-sm text-gray-500 uppercase tracking-widest">
            // Tech Stack 2024
          </span>
        </div>

        <TechStackGrid items={technologies} showName={false} theme="light" />
      </div>
    </section>
  );
}
