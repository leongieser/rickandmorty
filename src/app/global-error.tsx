'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { SectionHeader } from '@/ram/components'

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	/*
	 *
	 * Not stable yet
	 *@see https://github.com/vercel/next.js/issues/55462
	 */
	return (
		<html>
			<body>
				<SectionHeader heading="Pluto Was A Planet..." />
				<Image
					src="/assets/jerry.png"
					width={500}
					height={500}
					alt="Jerry looking cluless as usual"
				/>
				<button onClick={() => reset()}>
					<SectionHeader heading="Try again" />
				</button>
			</body>
		</html>
	)
}
