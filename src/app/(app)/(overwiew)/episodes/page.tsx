import type { Metadata } from 'next'
import Link from 'next/link'
import { EpisodeCard, SectionHeader } from '@/ram/components'
import { getAllEpisodes } from '@/ram/lib/api'
import { cn } from '@/ram/lib/utils'

export const metadata: Metadata = {
	title: 'Episodes',
	description:
		'An overview of all the episodes from the Rick and Morty universe.',
}

export default async function Episodes({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const page =
		typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

	const episodes = await getAllEpisodes(page)

	return (
		<section className="flex w-full flex-grow flex-col items-center gap-8 p-5">
			<SectionHeader heading="Episodes" />
			<div className="flex gap-4">
				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600': page === 1,
						}
					)}
					prefetch={true}
					href={`/episodes?page=${page - 1} `}
				>
					prev
				</Link>
				<span className="w-32 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary">
					{page} of {episodes.info.pages || 3}
				</span>
				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
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
				{episodes.results.map((ep) => (
					<EpisodeCard key={`${ep.id}${ep.name}`} episode={ep} />
				))}
			</section>
		</section>
	)
}
