import Link from "next/link";

/**
 * Reusable Button component with multiple variants and sizes
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary' | 'outline'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {string} props.href - Optional link URL
 * @param {string} props.icon - Optional Material Symbols icon name
 * @param {string} props.iconPosition - 'left' | 'right'
 * @param {boolean} props.disabled - Disabled state
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  disabled = false,
  onClick,
  className = "",
  children,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-primary text-xs text-white hover:bg-white hover:text-black border border-primary shadow-[0_4px_12px_rgba(255,109,0,0.3)] hover:shadow-[0_4px_12px_rgba(255,109,0,0.1)]",
    secondary:
      "bg-white text-black text-xs hover:bg-primary hover:text-white border-2 border-black",
    outline:
      "bg-transparent text-primary text-xs border-2 border-primary hover:bg-primary hover:text-white",
    "outline-white":
      "bg-transparent text-white text-xs border-2 border-white/8 hover:bg-white hover:text-black",
  };

  const sizeStyles = {
    sm: "px-6 py-2 text-xs gap-2",
    md: "px-8 py-3 text-sm gap-3",
    lg: "px-12 py-5 text-sm gap-3",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="material-symbols-outlined text-inherit">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="material-symbols-outlined text-inherit">{icon}</span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
