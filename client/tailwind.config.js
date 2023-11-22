/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                open: {
                    from: { height: '0', padding: '0', overflow: 'hidden' },
                    to: { overflow: 'hidden' },
                },
                close: {
                    from: { height: '90vh', overflow: 'hidden' },
                    to: { height: '0', overflow: 'hidden' },
                },
                printText: {
                    from: { width: '0' },
                },
                cursor: {
                    '0%, 100%': {
                        'border-color': 'current',
                    },
                    '50%': {
                        'border-color': 'transparent',
                    },
                },
            },
            animation: {
                open: 'open 0.75s ease-in-out',
                close: 'close 0.75s ease-in-out',
                dot: 'dot 10s linear infinite',
            },
        },
    },
    plugins: [],
};
