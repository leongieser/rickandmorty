import localFont from 'next/font/local'

const ramFont = localFont({
	src: '../lib/fonts/WubbaLubbaDubDub.woff2',
	// src: '../lib/fonts/getSchwifty.woff2',
	preload: true,
	display: 'swap',
	weight: 'normal',
	variable: '--font-ram',
})

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1
				className={`${ramFont.className} thicc-outline text-8xl text-headingFill `}
			>
				Wubba Lubba dub-dub
			</h1>
		</main>
	)
}
