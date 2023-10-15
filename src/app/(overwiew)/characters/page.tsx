import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Characters',
	description:
		'An overview of all the characters from the Rick and Morty series.',
}

export default function Characters() {
	return (
		<div className="flex h-full w-full flex-col items-center bg-zinc-800 p-5">
			<h1 className="text-2xl">Characters</h1>
		</div>
	)
}
