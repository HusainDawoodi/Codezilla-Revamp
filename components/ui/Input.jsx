/**
 * Reusable Input component for forms
 * @param {Object} props
 * @param {string} props.type - 'text' | 'email' | 'textarea'
 * @param {string} props.label - Input label
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Required field
 * @param {string} props.className - Additional CSS classes
 */
export default function Input({
    type = 'text',
    label,
    placeholder,
    error,
    required = false,
    className = '',
    ...props
}) {
    const baseStyles = 'w-full px-4 py-3 border-2 border-black bg-white text-black placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors';

    const errorStyles = error ? 'border-red-500 focus:border-red-500' : '';

    const combinedClassName = `${baseStyles} ${errorStyles} ${className}`;

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">
                    {label}
                    {required && <span className="text-primary ml-1">*</span>}
                </label>
            )}

            {type === 'textarea' ? (
                <textarea
                    className={combinedClassName}
                    placeholder={placeholder}
                    required={required}
                    rows={4}
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    className={combinedClassName}
                    placeholder={placeholder}
                    required={required}
                    {...props}
                />
            )}

            {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
