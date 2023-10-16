import { Metadata } from 'next'
import Link from 'next/link'
import { CharacterCard, SectionHeader } from '@/ram/components'
import {
	getAllEpisodes,
	getCharactersByEpisodeId,
	getEpisodeById,
} from '@/ram/lib/api'
import { cn } from '@/ram/lib/utils'

export async function generateMetadata({
	params,
}: {
	params: { id: string }
}): Promise<Metadata> {
	const episode = await getEpisodeById(params.id)
	return {
		title: episode.name,
	}
}

export async function generateStaticParams() {
	const episodes = await getAllEpisodes()
	const staticParams = []
	for (let i = 1; i < Number(episodes.info.count); i++) {
		staticParams.push({
			params: {
				id: `${i}`,
			},
		})
	}
	return staticParams
}

export default async function Episode({ params }: { params: { id: string } }) {
	const episodes = await getAllEpisodes()
	const {
		info: { count },
	} = episodes

	const id = Number(params.id)
	const characters = await getCharactersByEpisodeId(params.id)
	const episode = await getEpisodeById(params.id)

	return (
		<section className="flex w-full flex-grow flex-col items-center gap-8 p-5">
			<SectionHeader heading="Episode" />
			<div className="flex gap-4">
				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600': id === 1,
						}
					)}
					prefetch={true}
					href={`/episode/${Number(params.id) - 1}`}
				>
					prev
				</Link>
				<span className="w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary">
					{id}
				</span>
				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600':
								id === Number(count),
						}
					)}
					prefetch={true}
					href={`/episode/${Number(params.id) + 1}`}
				>
					next
				</Link>
			</div>

			<section className="mx-auto flex flex-col items-start justify-center gap-8">
				<SectionHeader heading={episode.name} />
				<div className="flex gap-5">
					<p className="text-2xl font-medium">{episode.episode}</p>
					<p className="text-xl">{episode.air_date}</p>
				</div>
				<div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
					{characters.map((char) => (
						<CharacterCard
							key={`${char.id}${char.name}`}
							char={char}
						/>
					))}
				</div>
			</section>
		</section>
	)
}
