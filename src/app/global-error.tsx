'use client'

import { useEffect } from 'react'
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

	return (
		<html>
			<body>
				<SectionHeader heading="Pluto Was A Planet" />
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	)
}
