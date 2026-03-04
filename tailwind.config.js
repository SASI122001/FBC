/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                church: {
                    dark: '#0f172a',
                    light: '#f8fafc',
                    accent: '#d97706',
                    muted: '#94a3b8'
                }
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                'glass-strong': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
            }
        }
    },
    plugins: [],
}
