import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div>
			<h2>404 | Not Found</h2>
			<Image
				src="/assets/404.png"
				alt="404"
				width={500}
				height={500}
				layout="fixed"
			/>
			<p>Could not find requested resource</p>
			<Link href="/">Go Home</Link>
		</div>
	)
}
