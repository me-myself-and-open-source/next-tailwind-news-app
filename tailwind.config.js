module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			transitionProperty: {
				sidebar: 'width left right',
				visibility: 'visibility',
			}
		},
	},
	plugins: [],
}
