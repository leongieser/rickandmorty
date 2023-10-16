import type { Metadata } from 'next'
import Link from 'next/link'
import { CharacterCard, SectionHeader } from '@/ram/components'
import { getAllCharacters } from '@/ram/lib/api'
import { cn } from '@/ram/lib/utils'

export const metadata: Metadata = {
	title: 'Characters',
	description:
		'An overview of all the characters from the Rick and Morty series.',
}

export default async function Characters({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const page =
		typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

	const characters = await getAllCharacters(page)
	return (
		<section className="flex w-full flex-grow flex-col items-center gap-8 p-5">
			<SectionHeader heading="Characters" />
			<div className="flex gap-4">
				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600': page === 1,
						}
					)}
					prefetch={true}
					href={`/characters?page=1 `}
				>
					first
				</Link>
				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600': page === 1,
						}
					)}
					prefetch={true}
					href={`/characters?page=${page - 1} `}
				>
					prev
				</Link>
				<span className="w-32 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary">
					{page} of {characters.info.pages}
				</span>
				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600':
								page === Number(characters.info.pages),
						}
					)}
					prefetch={true}
					href={`/characters?page=${page + 1}`}
				>
					next
				</Link>

				<Link
					className={cn(
						'w-20 select-none rounded-md bg-ram-primary px-4 py-2 text-center  text-xl font-bold text-ram-secondary ring-4  ring-ram-secondary',
						{
							'pointer-events-none bg-gray-600':
								page === Number(characters.info.pages),
						}
					)}
					prefetch={true}
					href={`/characters?page=${characters.info.pages} `}
				>
					last
				</Link>
			</div>
			<section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{characters.results.map((char) => (
					<CharacterCard key={`${char.id}${char.name}`} char={char} />
				))}
			</section>
		</section>
	)
}
