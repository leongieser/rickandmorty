import { Metadata } from 'next'
import Link from 'next/link'
import { CharacterCard, LocationCard, SectionHeader } from '@/ram/components'
import {
	getLocationById,
	getAllLocations,
	getCharactersByLocation,
} from '@/ram/lib/api'
import { cn } from '@/ram/lib/utils'

export async function generateMetadata({
	params,
}: {
	params: { id: string }
}): Promise<Metadata> {
	const character = await getLocationById(params.id)
	return {
		title: {
			absolute: character.name,
		},
	}
}

export async function generateStaticParams() {
	const locations = await getAllLocations()
	const staticParams = []

	for (let i = 1; i < Number(locations.info.count); i++) {
		staticParams.push({
			params: {
				id: `${i}`,
			},
		})
	}
	return staticParams
}

export default async function Location({ params }: { params: { id: string } }) {
	const locations = await getAllLocations()

	const {
		info: { count },
	} = locations

	const id = Number(params.id)
	const characters = await getCharactersByLocation(params.id)
	const location = await getLocationById(params.id)

	return (
		<section className="flex w-full flex-grow flex-col items-center gap-8 p-5">
			<div className="flex gap-5 ">
				<SectionHeader heading="Location" />
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
					href={`/location/${Number(params.id) - 1}`}
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
					href={`/location/${Number(params.id) + 1}`}
				>
					next
				</Link>
			</div>

			<section className="mx-auto flex flex-col items-start justify-center gap-7">
				<div className="mx-auto">
					<LocationCard location={location} />
				</div>
				<SectionHeader heading="Residents" />
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
