import Image from 'next/image'
import { ThemeSwitch } from '../ThemeSwitch'
import { HeaderNavLinks } from './nav'

export default function Header() {
	return (
		<header className="flex h-16 w-full items-center justify-between gap-6 bg-zinc-300 px-5 dark:bg-zinc-950">
			<div className="flex h-full items-center justify-start gap-5">
				<div className=" hidden items-center gap-2 sm:block">
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
