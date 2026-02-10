import Image from "next/image";

/**
 * A reusable grid component for displaying technical stacks with optional proficiency scores.
 *
 * @param {Object} props
 * @param {Array<{icon: string, name: string, score: string}>} props.items - Array of tech stack items
 * @param {string} props.className - Additional classes for the grid container
 */
export default function TechStackGrid({
  items = [],
  className = "",
  theme = "dark",
  showName = true,
}) {
  if (!items || items.length === 0) return null;

  const isLight = theme === "light";

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 ${
        isLight
          ? "border-t border-l border-black"
          : "bg-white/10 border border-white/10 gap-px"
      } ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            isLight
              ? "bg-transparent border-b border-r border-black text-black hover:bg-black/[0.03]"
              : "bg-charcoal text-white hover:bg-white/[0.02]"
          } p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4 transition-colors`}
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt={item.name}
              width={!showName ? 80 : 40}
              height={!showName ? 80 : 40}
              className="object-contain"
            />
          )}
          <div>
            {showName && (
              <span className="font-display text-base md:text-lg font-bold uppercase block">
                {item.name}
              </span>
            )}
            {item.score && (
              <span className="font-mono text-[8px] md:text-[10px] text-primary uppercase tracking-widest mt-2 block">
                {item.score}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
