/**
 * Reusable Badge component
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary' | 'outline'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Badge content
 */
export default function Badge({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
}) {
    const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-wider';

    const variantStyles = {
        primary: 'bg-primary text-white',
        secondary: 'bg-black text-white',
        outline: 'bg-transparent border-2 border-primary text-primary',
    };

    const sizeStyles = {
        sm: 'px-2 py-1 text-[10px]',
        md: 'px-3 py-1.5 text-xs',
        lg: 'px-4 py-2 text-sm',
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <span className={combinedClassName}>
            {children}
        </span>
    );
}
