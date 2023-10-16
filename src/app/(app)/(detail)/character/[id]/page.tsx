import { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeader, EpisodeCard, CharacterCard } from '@/ram/components'
import {
	getCharacterById,
	getEpisodesByCharacterId,
	getAllCharacters,
} from '@/ram/lib/api'
import { cn } from '@/ram/lib/utils'

export async function generateMetadata({
	params,
}: {
	params: { id: string }
}): Promise<Metadata> {
	const character = await getCharacterById(params.id)
	return {
		title: {
			absolute: character.name,
		},
	}
}

export async function generateStaticParams() {
	const characters = await getAllCharacters()
	const noOfCharacters = Number(characters.info.count)
	const staticParams = []

	for (let i = 1; i < noOfCharacters; i++) {
		staticParams.push({
			params: {
				id: `${i}`,
			},
		})
	}
	return staticParams
}

export default async function Character({
	params,
}: {
	params: { id: string }
}) {
	const characters = await getAllCharacters()
	const {
		info: { count },
	} = characters

	const id = Number(params.id)
	const episodes = await getEpisodesByCharacterId(params.id)
	const character = await getCharacterById(params.id)

	return (
		<section className="flex w-full flex-grow flex-col items-center gap-8 p-5">
			<div className="flex gap-5 ">
				<SectionHeader heading="Character" />
			</div>
			<div className="flex gap-4">
				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600': id === 1,
						}
					)}
					prefetch={true}
					href={`/character/${Number(params.id) - 1}`}
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
					href={`/character/${Number(params.id) + 1}`}
				>
					next
				</Link>
			</div>

			<section className="mx-auto flex flex-col items-start justify-center gap-8">
				<div className="mx-auto">
					<CharacterCard char={character} />
				</div>
				<SectionHeader heading="Episodes" />
				<div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
					{episodes.map((ep) => (
						<EpisodeCard key={`${ep.id}${ep.name}`} episode={ep} />
					))}
				</div>
			</section>
		</section>
	)
}
