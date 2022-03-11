const colors = require('./styles/colors.ts')
const overlay = require('./styles/overlay.ts')

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		namedGroups: ["icon"],
		extend: {
			colors: {
				...colors,
				overlay,
				theme: {
					bg: {
						primary: 'var(--theme-background-primary)',
						secondary: 'var(--theme-background-secondary)',
						tertiary: 'var(--theme-background-tertiary)',
						bun: 'var(--theme-background-bun)',
						onion: 'var(--theme-background-onion)',
					},
					label: {
						primary: 'var(--theme-label-primary)',
						secondary: 'var(--theme-label-secondary)',
						tertiary: 'var(--theme-label-tertiary)',
						quaternary: 'var(--theme-label-quaternary)',
						disabled: 'var(--theme-label-disabled)',
						link: 'var(--theme-label-link)',
						invert: 'var(--theme-label-invert)',
						bacon: 'var(--theme-label-bacon)',
					},
					overlay: {
						quaternary: 'var(--theme-overlay-quaternary)',
					},
					divider: {
						primary: 'var(--theme-divider-primary)',
						secondary: 'var(--theme-divider-secondary)',
						tertiary: 'var(--theme-divider-tertiary)',
						quaternary: 'var(--theme-divider-quaternary)',
					},
				}
			},
			transitionProperty: {
				sidebar: 'width, left, right',
				width: 'width, margin',
				visibility: 'visibility',
			}
		},
	},
	plugins: [
		require("tailwindcss-named-groups"),
	],
}
