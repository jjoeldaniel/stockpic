/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {}
	},
	plugins: [require('flowbite/plugin')]
};
