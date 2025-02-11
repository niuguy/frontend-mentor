module.exports = {
    content: [
        "./src/index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        colors: {
            'cream': 'hsl(30, 38%, 92%)',
            'cyan': 'hsl(158, 36%, 37%)',
            'cyan-dark': 'hsl(158, 36%, 16%)',
            'white': 'hsl(0, 0%, 100%)',
            'blue': 'hsl(212, 21%, 14%)',
            'gray': 'hsl(228, 12%, 48%)'
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            serif: ['Fraunces', 'serif']
        },
        letterSpacing: {
            widest: '.4em'
        },
        extend: {},
    },
    plugins: [],
}