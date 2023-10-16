'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SectionHeader } from '@/ram/components'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	const router = useRouter()

	return (
		<section className="flex h-full w-full flex-col items-center justify-center gap-8">
			<SectionHeader heading="Pickle Error!" />
			<Image
				src="/assets/pickleRick.png"
				width={500}
				height={500}
				alt="Pickle Rick"
			/>

			<button onClick={() => reset()}>
				<SectionHeader heading="Try again" />
			</button>
			<button onClick={() => router.back()}>
				{' '}
				<SectionHeader heading="Go back" />
			</button>
		</section>
	)
}
