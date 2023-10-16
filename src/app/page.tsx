import Image from 'next/image'
import Link from 'next/link'
import { ThemeSwitch } from '@/ram/components/ui/ThemeSwitch'
import { ramFont } from '../lib/utils'

export const metadata = {
	openGraph: {
		title: 'Rick and Morty Fan Page',
		description:
			'A wiki like page with details about all Characters, Episodes and Locations from the Rick and Morty universe.',
		siteName: 'Rick and Morty Fan Page',
		images: [
			{
				url: '/assets/opengraph-image.jpg',
				width: 851,
				height: 315,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
}

export default function Home() {
	return (
		<main className="flex min-h-full w-screen flex-col items-center justify-center gap-12 p-24">
			<div className="absolute right-5 top-5">
				<ThemeSwitch />
			</div>
			<h1
				className={`${ramFont.className} thicc-outline mx-auto text-center text-8xl text-ram-primary `}
			>
				Wubba Lubba dub-dub
			</h1>
			<Link
				href={'/characters'}
				className="group flex w-full items-center justify-center "
			>
				<div className="absolute h-80 w-80 ">
					<Image
						className="absolute -left-36 -top-36 z-50 h-fit w-fit -rotate-12 animate-pulse"
						src="/assets/grand_opening.png"
						alt="Rick and Morty"
						width={350}
						height={350}
						fetchPriority="high"
					/>
					<Image
						className="absolute -left-36 -top-36 z-50 h-fit w-fit -rotate-12 opacity-70"
						src="/assets/grand_opening.png"
						alt="Rick and Morty"
						width={350}
						height={350}
						fetchPriority="high"
					/>
				</div>
				<Image
					className="duration-3000 mx-auto animate-spin-slow transition-all hover:animate-spin-slow "
					src="/assets/portal.png"
					alt="Rick and Morty"
					width={500}
					height={500}
					fetchPriority="high"
				/>
			</Link>
		</main>
	)
}
