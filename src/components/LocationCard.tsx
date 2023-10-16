import Link from 'next/link'
import { Location } from '@/ram/types'

export const dynamic = true

export const LocationCard = ({ location }: { location: Location }) => {
	return (
		<article className="group flex h-full w-full max-w-sm flex-col justify-between rounded-md bg-zinc-200 px-3 py-1 text-zinc-950 dark:bg-zinc-300 dark:text-zinc-950">
			<Link href={`/location/${location.id}`} className="cursor-pointer">
				<div className="select-none">
					<p className="text-2xl font-bold group-hover:text-slate-200">
						{location.name}
					</p>
					<p className="font-semibold">Dim: {location.dimension}</p>
					<p className="font-semibold">Type: {location.type}</p>
				</div>
			</Link>
		</article>
	)
}
