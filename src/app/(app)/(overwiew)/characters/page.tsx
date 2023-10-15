import type { Metadata } from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
	title: 'Characters',
	description:
		'An overview of all the characters from the Rick and Morty series.',
}
const ramFont = localFont({
	src: './../../../../lib/fonts/WubbaLubbaDubDub.woff2',
	preload: true,
	display: 'swap',
	weight: 'normal',
	variable: '--font-ram',
})

export default function Characters() {
	return (
		<div className="flex w-full flex-grow flex-col items-center  p-5">
			<h1
				className={`${ramFont.className} thicc-outline text-headingFill mx-auto text-center text-7xl `}
			>
				Characters
			</h1>
		</div>
	)
}
