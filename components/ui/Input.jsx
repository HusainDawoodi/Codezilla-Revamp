/**
 * Reusable Input component for forms
 * @param {Object} props
 * @param {string} props.type - 'text' | 'email' | 'textarea'
 * @param {string} props.label - Input label
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Required field
 * @param {string} props.className - Additional CSS classes
 * @param {'light' | 'dark'} props.variant - Theme variant
 */
export default function Input({
  type = "text",
  label,
  placeholder,
  error,
  required = false,
  className = "",
  variant = "light",
  id,
  ...props
}) {
  const isDark = variant === "dark";
  const isMinimal = variant === "minimal";
  const inputId =
    id ||
    (label
      ? label.toLowerCase().replace(/\s+/g, "-")
      : Math.random().toString(36).substring(7));

  if (isMinimal) {
    const minimalInputClasses = `block w-full bg-transparent border-none px-0 py-2 text-white placeholder-transparent focus:ring-0 focus:outline-none text-lg peer ${className}`;
    const minimalLabelClasses = `absolute left-0 top-2 text-gray-500 pointer-events-none transition-all duration-300 origin-left uppercase text-[10px] font-bold tracking-widest peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-primary`;

    return (
      <div className="relative border-b border-white/20 focus-within:border-primary transition-all py-2 group">
        {type === "textarea" ? (
          <textarea
            id={inputId}
            className={`${minimalInputClasses} min-h-[100px] resize-none`}
            placeholder={placeholder || label}
            required={required}
            {...props}
          />
        ) : (
          <input
            id={inputId}
            type={type}
            className={minimalInputClasses}
            placeholder={placeholder || label}
            required={required}
            {...props}
          />
        )}
        {label && (
          <label htmlFor={inputId} className={minimalLabelClasses}>
            {label}
          </label>
        )}
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  }

  const baseStyles =
    "w-full p-4 text-sm transition-colors focus:outline-none focus:border-primary rounded-none";

  const variantStyles = isDark
    ? "bg-dark border border-white/10 text-white placeholder:text-gray-500"
    : "bg-white border-2 border-black text-black placeholder:text-gray-400";

  const errorStyles = error ? "border-red-500 focus:border-red-500" : "";

  const combinedClassName = `${baseStyles} ${variantStyles} ${errorStyles} ${className}`;

  const labelStyles = isDark
    ? "text-md font-bold text-gray-400 uppercase tracking-widest"
    : "text-md font-bold uppercase tracking-wider text-black";

  return (
    <div className="w-full space-y-2">
      {label && (
        <label htmlFor={inputId} className={`block ${labelStyles}`}>
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={inputId}
          className={combinedClassName}
          placeholder={placeholder}
          required={required}
          rows={4}
          {...props}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          className={combinedClassName}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      )}

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
