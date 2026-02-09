/**
 * Reusable Select component for forms
 * @param {Object} props
 * @param {string} props.label - Select label
 * @param {Array<{value: string, label: string}>} props.options - Array of options
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Required field
 * @param {string} props.className - Additional CSS classes
 * @param {'light' | 'dark'} props.variant - Theme variant
 */
export default function Select({
  label,
  options = [],
  error,
  required = false,
  className = "",
  variant = "light",
  ...props
}) {
  const isDark = variant === "dark";

  const baseStyles =
    "w-full p-4 text-sm transition-colors focus:outline-none focus:border-primary rounded-none appearance-none";

  const variantStyles = isDark
    ? "bg-dark border border-white/10 text-white placeholder:text-gray-500"
    : "bg-white border-2 border-black text-black placeholder:text-gray-400";

  const errorStyles = error ? "border-red-500 focus:border-red-500" : "";

  const combinedClassName = `${baseStyles} ${variantStyles} ${errorStyles} ${className}`;

  const labelStyles = isDark
    ? "text-sm font-bold text-gray-400 uppercase tracking-widest"
    : "text-sm font-bold uppercase tracking-wider text-black";

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className={`block ${labelStyles}`}>
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <select className={combinedClassName} required={required} {...props}>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-black text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 ${isDark ? "text-white" : "text-black"}`}
        >
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
