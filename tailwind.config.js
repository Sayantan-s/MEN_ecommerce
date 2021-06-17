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
        }
    },
    variants: {
        extend: {
            fontFamily: {
                sans: ['Euclid Circular A', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: [require('@tailwindcss/line-clamp')],
    corePlugins: {
        //lineHeight: false,
    }
};
