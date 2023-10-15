'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = {
	episodes: '/episodes',
	characters: '/characters',
	locations: '/locations',
}
//TODO use main theme colors
export function HeaderNavLinks() {
	const pathname = usePathname()

	return (
		<nav className="flex h-full items-center gap-4">
			<Link
				className={`relative flex h-full items-center px-5 ${
					navLinks.characters === pathname ? 'bg-zinc-950' : ''
				}`}
				href={'/characters'}
			>
				Characters
				{navLinks.characters === pathname && (
					<span className="absolute inset-x-0 bottom-0 h-1 bg-cyan-600" />
				)}
			</Link>
			<Link
				className={`relative flex h-full items-center px-5 ${
					navLinks.episodes === pathname ? 'bg-zinc-950' : ''
				}`}
				href={'/episodes'}
			>
				Episodes
				{navLinks.episodes === pathname && (
					<span className="absolute inset-x-0 bottom-0 h-1 bg-cyan-600" />
				)}
			</Link>
			<Link
				className={`relative flex h-full items-center px-5 ${
					navLinks.locations === pathname ? 'bg-zinc-950' : ''
				}`}
				href={'/locations'}
			>
				Locations
				{navLinks.locations === pathname && (
					<span className="absolute inset-x-0 bottom-0 h-1 bg-cyan-600" />
				)}
			</Link>
		</nav>
	)
}
