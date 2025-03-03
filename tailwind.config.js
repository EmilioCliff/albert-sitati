/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {},
		section: {},
		extend: {
			colors: {},
			borderRadius: {},
			screens: {},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
