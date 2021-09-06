const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            backgroundImage: theme => ({
                'blur': `url("data:image/svg+xml, %3Csvg width='2702' height='1830' viewBox='0 0 2702 1830' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_bdi)'%3E%3Cpath d='M55 55H2647V1775H55V55Z' fill='url(%23paint0_linear)' /%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_bdi' x='-403' y='-403' width='3508' height='2636' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix' /%3E%3CfeGaussianBlur in='BackgroundImage' stdDeviation='229' /%3E%3CfeComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur' /%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' /%3E%3CfeOffset /%3E%3CfeGaussianBlur stdDeviation='27.5' /%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.16526 0 0 0 0 0.176819 0 0 0 0 0.2375 0 0 0 0.08 0' /%3E%3CfeBlend mode='normal' in2='effect1_backgroundBlur' result='effect2_dropShadow' /%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow' result='shape' /%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' /%3E%3CfeOffset /%3E%3CfeGaussianBlur stdDeviation='45' /%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' /%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0' /%3E%3CfeBlend mode='normal' in2='shape' result='effect3_innerShadow' /%3E%3C/filter%3E%3ClinearGradient id='paint0_linear' x1='3799' y1='-786' x2='55.0003' y2='2033' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.65' /%3E%3Cstop offset='1' stop-color='white' stop-opacity='0' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E`,
            }),
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
            ...defaultTheme.minHeight,
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
