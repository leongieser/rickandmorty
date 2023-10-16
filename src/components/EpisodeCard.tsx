import Link from 'next/link'
import { Episode } from '../types'

export const EpisodeCard = ({ episode }: { episode: Episode }) => {
	return (
		<article className="group flex h-full w-full max-w-sm  flex-col justify-between rounded-md bg-zinc-200 px-3 py-1 text-zinc-950 dark:bg-zinc-300 dark:text-zinc-950">
			<Link href={`/episode/${episode.id}`} className="cursor-pointer ">
				<div className="select-none">
					<p className="text-2xl font-bold group-hover:text-slate-200">
						{episode.name}
					</p>
					<p className="font-semibold">{episode.episode}</p>
					<p className="font-semibold">
						Aired on: {episode.air_date}
					</p>
				</div>
				<div className="z-40 mt-auto flex w-full select-none justify-end"></div>
			</Link>
		</article>
	)
}
