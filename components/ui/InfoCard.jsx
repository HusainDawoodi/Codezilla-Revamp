/**
 * Common InfoCard component for benefits, features, etc.
 * @param {Object} props
 * @param {string} props.icon - Material symbol name
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description content
 * @param {string} props.shadowColor - Shadow variant ('black' | 'orange')
 * @param {string} props.iconBg - Icon background color ('black' | 'primary')
 * @param {string} props.className - Additional classes for the container
 */
export default function InfoCard({
  icon,
  title,
  description,
  shadowColor = "black",
  iconBg = "black",
  className = "",
}) {
  const shadowClasses = {
    black: "card-shadow-black",
    orange: "card-shadow-orange",
  };

  const bgClasses = {
    black: "bg-black",
    primary: "bg-primary",
  };

  return (
    <div
      className={`bg-white border border-black p-8 md:p-10 h-full flex flex-col justify-between transition-transform hover:-translate-y-1 ${shadowClasses[shadowColor] || "card-shadow-black"} ${className}`}
    >
      <div>
        <div
          className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-6 md:mb-8 ${bgClasses[iconBg] || "bg-black"}`}
        >
          <span className="material-symbols-outlined text-white text-2xl md:text-3xl">
            {icon}
          </span>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-black uppercase mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
