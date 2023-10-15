import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Episodes',
	description:
		'An overview of all the episodes from the Rick and Morty series.',
}

export default function Episodes() {
	return (
		<div className="flex h-full w-full flex-col items-center bg-zinc-800 p-5">
			<h1 className="text-2xl">Episodes</h1>
		</div>
	)
}
