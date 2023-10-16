import Image from 'next/image'
import Link from 'next/link'
import { Character } from '../types'
import LikeButton from './ui/LikeButton'

export const CharacterCard = ({ char }: { char: Character }) => {
	return (
		<article
			key={char.id}
			className="dark w-56 overflow-hidden rounded-md bg-zinc-200 dark:bg-zinc-950 dark:text-zinc-100"
		>
			<Link href={`/character/${char.id}`}>
				<Image
					src={char.image}
					alt={char.name}
					width={250}
					height={200}
				></Image>
			</Link>
			<div className="flex flex-col justify-between px-4 py-2">
				<div className="flex flex-col ">
					<p className="truncate text-lg font-bold">{char.name}</p>
					<p>{char.species}</p>
				</div>

				<div className="flex items-baseline justify-between ">
					<div className="flex items-center justify-between">
						<p>{char.status} </p>
						<span
							className={`${
								char.status === 'Alive'
									? 'bg-green-600'
									: 'bg-red-600'
							} ml-1 h-3 w-3 rounded-full`}
						></span>
					</div>
					<div>
						<LikeButton item={char} />
					</div>
				</div>
			</div>
		</article>
	)
}
