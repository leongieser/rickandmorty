import localFont from 'next/font/local'
import Image from 'next/image'

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
		<main className="flex min-h-screen w-screen flex-col items-center justify-center gap-12 p-24">
			<h1
				className={`${ramFont.className} thicc-outline mx-auto text-center text-8xl text-headingFill `}
			>
				Wubba Lubba dub-dub
			</h1>

			<section className="group mx-auto w-full ">
				<div className="relative mx-auto">
					<Image
						className="absolute -top-28 left-36 z-50 h-fit w-fit -rotate-12 animate-pulse"
						src="/assets/grand_opening.png"
						alt="Rick and Morty"
						width={350}
						height={350}
						layout="fixed"
					/>
					<Image
						className="absolute -top-28 left-36 z-50 h-fit w-fit -rotate-12 opacity-70"
						src="/assets/grand_opening.png"
						alt="Rick and Morty"
						width={350}
						height={350}
						layout="fixed"
					/>

					<Image
						className="duration-3000 mx-auto animate-spin-slow transition-all hover:animate-spin-slow "
						src="/assets/portal.png"
						alt="Rick and Morty"
						width={500}
						height={500}
						layout="fixed"
					/>
				</div>
			</section>
		</main>
	)
}
