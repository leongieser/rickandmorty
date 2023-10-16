'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = {
	episodes: '/episodes',
	characters: '/characters',
	locations: '/locations',
}

export function HeaderNavLinks() {
	const pathname = usePathname()

	return (
		<nav className="flex h-full items-center gap-4 text-lg font-medium">
			<Link
				className={`relative flex h-full items-center px-5 ${
					navLinks.characters === pathname
						? 'bg-zinc-600 text-white'
						: ''
				}`}
				href={'/characters'}
			>
				Characters
				{navLinks.characters === pathname && (
					<span className="absolute inset-x-0 bottom-0 h-2 bg-ram-secondary dark:bg-ram-primary" />
				)}
			</Link>
			<Link
				className={`relative flex h-full items-center px-5 ${
					navLinks.episodes === pathname
						? 'bg-zinc-600 text-white'
						: ''
				}`}
				href={'/episodes'}
			>
				Episodes
				{navLinks.episodes === pathname && (
					<span className="absolute inset-x-0 bottom-0 h-2  bg-ram-secondary dark:bg-ram-primary" />
				)}
			</Link>
			<Link
				className={`relative flex h-full items-center px-5 ${
					navLinks.locations === pathname
						? 'bg-zinc-600 text-white'
						: ''
				}`}
				href={'/locations'}
			>
				Locations
				{navLinks.locations === pathname && (
					<span className="absolute inset-x-0 bottom-0 h-2 bg-ram-secondary dark:bg-ram-primary" />
				)}
			</Link>
		</nav>
	)
}
