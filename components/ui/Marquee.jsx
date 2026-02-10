"use client";

import Image from "next/image";

/**
 * A reusable Marquee component for displaying scrolling logos or items.
 *
 * @param {Object} props
 * @param {string} props.title - Optional title shown above the marquee
 * @param {Array<{img: string, name: string}>} props.items - Array of items with image source and name
 * @param {string} props.className - Additional classes for the container
 * @param {string} props.bgColor - Background color class (default: bg-[#F9F7F2])
 * @param {string} props.speed - Optional speed control (classes should be defined in tailwind)
 */
export default function Marquee({
  title,
  items = [],
  className = "",
  bgColor = "bg-[#F9F7F2]",
}) {
  if (!items || items.length === 0) return null;

  return (
    <section
      className={`py-12 border-b-2 border-black overflow-hidden ${bgColor} ${className}`}
    >
      <style jsx>{`
        .mask-image-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>

      {title && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 text-center px-4">
          {title}
        </p>
      )}

      <div className="flex w-full overflow-hidden mask-image-fade">
        <div className="flex items-center gap-24 animate-marquee whitespace-nowrap min-w-full px-12">
          {/* First set */}
          {items.map((item, index) => (
            <div key={`first-${index}`} className="flex-shrink-0">
              <Image
                src={item.img}
                alt={item.name || "Brand logo"}
                width={120}
                height={60}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {items.map((item, index) => (
            <div key={`second-${index}`} className="flex-shrink-0">
              <Image
                src={item.img}
                alt={item.name || "Brand logo"}
                width={120}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
          {/* Third set to ensure coverage on large screens */}
          {items.map((item, index) => (
            <div key={`third-${index}`} className="flex-shrink-0">
              <Image
                src={item.img}
                alt={item.name || "Brand logo"}
                width={120}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
          {/* Third set to ensure coverage on large screens */}
          {items.map((item, index) => (
            <div key={`third-${index}`} className="flex-shrink-0">
              <Image
                src={item.img}
                alt={item.name || "Brand logo"}
                width={120}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
