/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}" // ✅ scan all source files for classes
    ],
    theme: {
        extend: {
            animation: {
                spin: 'spin 1s linear infinite', // optional override
            },
        },
    },
    plugins: [],
};
