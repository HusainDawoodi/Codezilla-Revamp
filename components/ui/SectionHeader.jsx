/**
 * Reusable Section Header component
 * @param {Object} props
 * @param {string} props.eyebrow - Small text above the heading
 * @param {string} props.title - Main heading text
 * @param {string} props.description - Optional description text
 * @param {string} props.align - 'left' | 'center' | 'right'
 * @param {string} props.theme - 'light' | 'dark'
 * @param {string} props.className - Additional CSS classes
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}) {
  const alignmentStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const themeStyles = {
    light: {
      eyebrow: "text-primary",
      title: "text-black",
      description: "text-gray-600",
    },
    dark: {
      eyebrow: "text-primary",
      title: "text-white",
      description: "text-gray-400",
    },
  };

  return (
    <div className={`${alignmentStyles[align]} ${className}`}>
      {eyebrow && (
        <span
          className={`block text-xs font-bold uppercase tracking-[0.4em] ${themeStyles[theme].eyebrow} mb-4`}
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          className={`font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter ${themeStyles[theme].title} mb-6`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`text-lg leading-relaxed max-w-4xl ${align === "center" ? "mx-auto" : ""} ${themeStyles[theme].description}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
