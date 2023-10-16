import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeader, LocationCard } from '@/ram/components/'
import { getAllLocations } from '@/ram/lib/api'
import { cn } from '@/ram/lib/utils'

export const metadata: Metadata = {
	title: 'Locations',
	description:
		'An overview of all locations from the Rick and Morty universe.',
}

export default async function Locations({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const page =
		typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

	const locations = await getAllLocations(page)

	return (
		<section className="flex w-full flex-grow flex-col items-center gap-8 p-5">
			<SectionHeader heading="Locations" />
			<div className="flex gap-4">
				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600': page === 1,
						}
					)}
					prefetch={true}
					href={`/locations?page=${page - 1} `}
				>
					prev
				</Link>
				<span className="w-32 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary">
					{page} of {locations.info.pages || 3}
				</span>
				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600':
								page === Number(locations.info.pages),
						}
					)}
					prefetch={true}
					href={`/locations?page=${page + 1}`}
				>
					next
				</Link>
			</div>
			<section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{locations.results.map((loc) => (
					<LocationCard key={`${loc.id}${loc.name}`} location={loc} />
				))}
			</section>
		</section>
	)
}
