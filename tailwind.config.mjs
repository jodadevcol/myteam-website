/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"p-midnight-green": "var(--p-midnight-green)",
				"p-light-coral": "var(--p-light-coral)",
				"s-rapture-blue": "var(--s-rapture-blue)",
				"s-police-blue": "var(--s-police-blue)",
				"s-deep-jungle-green": "var(--s-deep-jungle-green)",
				"s-acramento-state-green ": "var(--s-acramento-state-green )",
				"s-dark-green": "var(--s-dark-green)",
			}
		},
	},
	plugins: [],
}
