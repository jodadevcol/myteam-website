/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"p-midnight-green": "#014e56",
				"p-light-coral": "#f67e7e",
				"s-rapture-blue": "#79c8c7",
				"s-police-blue": "#2c6269",
				"s-deep-jungle-green": "#004047",
				"s-acramento-state-green": "#012f34",
				"s-dark-green": "#002529",
			}
		},
	},
	plugins: [],
}
