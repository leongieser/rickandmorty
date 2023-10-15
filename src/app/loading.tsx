import Image from 'next/image'

export default function Loading() {
	return (
		<main className="flex h-screen w-screen items-center justify-center">
			<Image
				className="animate-spin-slow"
				src={'/assets/portal.png'}
				alt="loading"
				width={500}
				height={500}
			/>
		</main>
	)
}
