/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'index.html',
        'node_modules/preline/dist/*.js',
        './src/**/*.{html,js}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('preline/plugin')],
};
