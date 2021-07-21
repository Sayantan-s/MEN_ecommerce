const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                body: ['Euclid Circular A', 'sans-serif']
            },
            spacing: {
                mini: '1px',
                112: '36rem',
                128: '40rem',
                144: '44rem',
                160: '48rem'
            }
        },
        fontWeight: {
            light: 300,
            normal: 400,
            regular: 500,
            semibold: 600,
            bold: 700
        },
        minHeight: {
            xs: '2.5rem',
            sm: '2.75rem',
            md: '3rem',
            lg: '3.5rem',
            4: '4rem',
            5: '5rem',
            6: '6rem',
            7: '7rem',
            8: '8rem',
            9: '9rem',
            10: '10rem'
        }
    },
    variants: {
        extend: {
            fontFamily: {
                sans: ['Euclid Circular A', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
};
