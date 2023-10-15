import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			},
			colors: {
				headingFill: '#12B0C9',
				headingOutline: '#CADB58',
				socials: {
					facebook: '#1877F2',
					twitter: '#1da1f2',
					instagram: '#E4405F',
					linkedin: '#0077b5',
					snapchat: '#FFFC00',
					youtube: '#ff0000',
					tiktok: '#000000',
					pinterest: '#bd081c',
					whatsapp: '#25d366',
					telegram: '#0088cc',
					medium: '#00ab6c',
					reddit: '#ff4500',
					quora: '#b92b27',
					tumblr: '#001935',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('tailwindcss-animate'),
		/*
		 * Fill till the :has selector is supported => "group-has[:checked]:bg-sky-500"
		 * Available in tailwindcss@insiders
		 * @see https://github.com/tailwindlabs/tailwindcss/blob/27b6530599b7604c1d6208e41916394ec4837976/src/corePlugins.js#L394C5-L394C5
		 * @see https://youtu.be/5hF0IVQIBN8?si=dGfgpnjUYVwokJNM&t=146
		 */
		plugin(({ addVariant }: { addVariant: Function }) => {
			addVariant('nested-peer-checked', '.peer:checked ~ * > &')
		}),
	],
}
export default config
