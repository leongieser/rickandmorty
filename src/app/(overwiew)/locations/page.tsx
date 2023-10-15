import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Locations',
	description: 'An overview of all locations from the Rick and Morty series.',
}

export default function Locations() {
	return (
		<div className="flex h-full w-full flex-col items-center bg-zinc-800 p-5">
			<h1 className="text-2xl">Locations</h1>
		</div>
	)
}
