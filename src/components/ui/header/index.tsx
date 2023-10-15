import Image from 'next/image'
import { ThemeSwitch } from '../ThemeSwitch'
import { HeaderNavLinks } from './nav'

export default function Header() {
	return (
		<header className="flex h-16 w-full items-center justify-between gap-6 bg-zinc-900 px-5">
			<div className="flex h-full items-center justify-start gap-5">
				<div className="flex items-center gap-2">
					<Image
						src="/assets/rickAndMortySlogan.png"
						alt="Rick and Morty Logo"
						height={100}
						width={130}
					/>
				</div>
				<HeaderNavLinks />
			</div>

			<ThemeSwitch />
		</header>
	)
}
