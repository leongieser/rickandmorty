import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Link from 'next/link'
import { getAllEpisodes } from '@/ram/lib/api'
import { AllEpisodesResponse, Episode } from '@/ram/types'

const ramFont = localFont({
	src: './../../../../lib/fonts/WubbaLubbaDubDub.woff2',
	preload: true,
	display: 'swap',
	weight: 'normal',
	variable: '--font-ram',
})

export const metadata: Metadata = {
	title: 'Episodes',
	description:
		'An overview of all the episodes from the Rick and Morty series.',
}

export default async function Episodes() {
	const episodes: AllEpisodesResponse = await getAllEpisodes()

	return (
		<div className="flex w-full flex-grow flex-col items-center bg-zinc-800 p-5">
			<h1
				className={`${ramFont.className} thicc-outline text-headingFill mx-auto text-center text-7xl `}
			>
				Episodes
			</h1>
			<section className="grid grid-cols-4 gap-5">
				{episodes.results.map((episode: Episode) => (
					<div
						className=" rounded-md bg-white p-5 text-black"
						key={episode.id}
					>
						<h2>Title: {episode.name}</h2>
						<p>First aired{episode.air_date}</p>
						<p>EP: {episode.episode}</p>
						<Link href={`/episode/${episode.id}`}>Details</Link>
					</div>
				))}
			</section>
		</div>
	)
}

//TODO add pagination
