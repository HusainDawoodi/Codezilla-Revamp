/**
 * Reusable Card component
 * @param {Object} props
 * @param {string} props.variant - 'default' | 'bordered' | 'glass'
 * @param {boolean} props.hoverable - Enable hover effects
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Card content
 */
export default function Card({
    variant = 'default',
    hoverable = true,
    className = '',
    children,
    ...props
}) {
    const baseStyles = 'transition-all duration-300';

    const variantStyles = {
        default: 'bg-white p-8',
        bordered: 'bg-white p-8 border-2 border-black',
        glass: 'bg-white/5 backdrop-blur-sm p-8 border border-white/10',
    };

    const hoverStyles = hoverable ? 'hover:shadow-lg hover:-translate-y-1' : '';

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`;

    return (
        <div className={combinedClassName} {...props}>
            {children}
        </div>
    );
}
