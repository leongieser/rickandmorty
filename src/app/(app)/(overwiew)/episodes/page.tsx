import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Link from 'next/link'
import { getAllEpisodes } from '@/ram/lib/api'
import { cn } from '@/ram/lib/utils'
import { AllEpisodesResponse, Episode } from '@/ram/types'

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

export default async function Episodes({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const page =
		typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

	const episodes: AllEpisodesResponse = await getAllEpisodes(page)

	return (
		<div className="flex w-full flex-grow flex-col items-center gap-8 p-5">
			<h1
				className={`${ramFont.className} thicc-outline mx-auto text-center text-7xl text-ram-primary `}
			>
				Episodes
			</h1>
			<div className="flex gap-4">
				<Link
					className={cn(
						'w-20 rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600': page === 1,
						}
					)}
					prefetch={true}
					href={`/episodes?page=${page - 1} `}
				>
					prev
				</Link>
				<span className="w-20 rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary">
					{page}
				</span>
				<Link
					className={cn(
						'w-20 rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600':
								page === Number(episodes.info.pages),
						}
					)}
					prefetch={true}
					href={`/episodes?page=${page + 1}`}
				>
					next
				</Link>
			</div>
			<section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{episodes.results.map((episode: Episode) => (
					<Link
						href={`/episode/${episode.id}`}
						className="flex h-full w-full max-w-sm cursor-pointer flex-col justify-between rounded-md bg-zinc-400 p-3 text-zinc-950"
						key={episode.id}
					>
						<div className="">
							<h1 className="text-2xl font-bold">
								{episode.name}
							</h1>
							<p className="font-semibold">{episode.episode}</p>
							<p className="font-semibold">
								Aired on: {episode.air_date}
							</p>
						</div>
						<div className="mt-auto w-full bg-red-200">asd</div>
					</Link>
				))}
			</section>
		</div>
	)
}
