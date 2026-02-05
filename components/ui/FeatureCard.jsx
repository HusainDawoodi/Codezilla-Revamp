export default function FeatureCard({
  number,
  icon,
  title,
  description,
  linkText = "Read More",
  href = "#",
}) {
  return (
    <div className="bg-charcoal p-10 group hover:bg-white transition-all relative overflow-hidden flex flex-col h-full border border-white/5 hover:border-black">
      {/* Number and Icon */}
      <div className="flex justify-between items-start mb-10">
        <span className="font-display text-5xl font-bold text-white/10 group-hover:text-primary transition-colors">
          {number}
        </span>
        <span className="material-symbols-outlined text-primary text-4xl">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-display font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-black transition-colors ">
        {description}
      </p>

      {/* Read More Link */}
      <a
        href={href}
        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-black transition-colors mt-auto group/link"
      >
        {linkText}
        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
          arrow_right_alt
        </span>
      </a>
    </div>
  );
}
