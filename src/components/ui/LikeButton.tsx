'use client'

import { useEffect, useState } from 'react'
import { Character, Episode, Location } from '@/ram/types'
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'

type Props = {
	item: Location | Character | Episode
}

export default function LikeButton({ item }: Props) {
	const [isLiked, setIsLiked] = useState(false)

	useEffect(() => {
		if (localStorage.getItem(item.name + item.id) === 'true') {
			setIsLiked(true)
		}
	}, [])

	const handleLikeClick = () => {
		localStorage.setItem(item.name + item.id, !isLiked ? 'true' : 'false')
		setIsLiked(!isLiked)
	}
	return (
		<button
			onClick={handleLikeClick}
			className="flex h-8 w-full flex-col items-center "
		>
			{isLiked ? (
				<HeartFilledIcon className="h-9 w-9 text-red-600" />
			) : (
				<HeartIcon className="h-9 w-9 text-red-600" />
			)}
		</button>
	)
}
