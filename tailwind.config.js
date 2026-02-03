/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF6D00",
                "primary-hover": "#FF9100",
                "border-dark": "#1F2937",
                "background-light": "#F3F4F6",
                "background-dark": "#111827",
                charcoal: "#0F1218",
                paper: "#F9FAFB",
            },
            fontFamily: {
                sans: ['var(--font-manrope)', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'sans-serif'],
            },
            backgroundImage: {
                'grain-overlay': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')",
                'energy-gradient': "linear-gradient(135deg, rgba(255,109,0,0.15) 0%, rgba(255,255,255,0) 50%)",
                'energy-gradient-dark': "linear-gradient(135deg, rgba(255,109,0,0.1) 0%, rgba(15,18,24,1) 80%)",
            },
            animation: {
                'depth-zoom': 'depthZoom 12s infinite',
                'marquee': 'marquee 40s linear infinite',
                'entrance-fade': 'entranceFade 1s ease-out forwards',
            },
            keyframes: {
                depthZoom: {
                    '0%': { opacity: '0', transform: 'scale(1.2)' },
                    '15%': { opacity: '1', transform: 'scale(1.1)' },
                    '35%': { opacity: '1', transform: 'scale(1)' },
                    '55%': { opacity: '1', transform: 'scale(0.95)' },
                    '75%': { opacity: '0.8', transform: 'scale(1)' },
                    '100%': { opacity: '0', transform: 'scale(1)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                entranceFade: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
};
