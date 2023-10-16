import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '../components'

export default function NotFound() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-5 ">
			<SectionHeader heading="404 | Not Found" />
			<Image
				className="mx-auto"
				src="/assets/404.png"
				alt="404"
				width={500}
				height={500}
				layout="fixed"
			/>

			<Link href="/characters">
				<SectionHeader heading="Go Home" />
			</Link>
		</div>
	)
}
