import Link from 'next/link'
import { getAllEpisodes, getEpisode } from '@/ram/lib/api'
import { AllEpisodesResponse } from '@/ram/types'

export async function generateStaticParams() {
	const episodes: AllEpisodesResponse = await getAllEpisodes()

	const nOfEpisodes = Number(episodes.info.count)
	const staticParams = []

	for (let i = 1; i < nOfEpisodes; i++) {
		staticParams.push({
			params: {
				id: `${i}`,
			},
		})
	}

	return staticParams
}

export default async function Episode({ params }: { params: { id: string } }) {
	const episode = await getEpisode(params.id)
	return (
		<section className="flex w-full flex-grow flex-col items-center  p-5">
			<div className="flex gap-5 ">
				<Link href={`/episode/${Number(params.id) - 1}`}>Prev</Link>
				<h1 className="text-2xl">Episode</h1>
				<Link href={`/episode/${Number(params.id) + 1}`}>Prev</Link>
			</div>

			<p>{episode.name}</p>
		</section>
	)
}

//TODO episode detail card
