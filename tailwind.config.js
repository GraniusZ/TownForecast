/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "main": {
                    "1" : "#0C131E",
                    "2" : "#202B3B",
                    "3": "#9399A2",
                    "4" : "#DDE0E4",
                    "5": "#0095FF",
                },


            },
        },
    },
    plugins: [],
}

