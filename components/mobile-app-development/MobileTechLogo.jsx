"use client";

import Marquee from "@/components/ui/Marquee";

export default function MobileTechLogo() {
  const technologies = [
    { img: "/images/mobileApp-logo/android.svg", name: "Android" },
    { img: "/images/mobileApp-logo/native.svg", name: "Native" },
    { img: "/images/mobileApp-logo/ios.svg", name: "iOS" },
    { img: "/images/mobileApp-logo/flutter.svg", name: "Flutter" },
  ];

  return <Marquee title="Future-Ready Technology" items={technologies} />;
}
