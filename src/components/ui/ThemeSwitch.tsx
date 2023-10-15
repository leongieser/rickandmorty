'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useMounted } from '@/ram/hooks/useMounted'

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme()
	const mounted = useMounted()
	if (!mounted) return null

	return (
		<button
			className="h-12 w-12 items-center justify-center transition-colors duration-200"
			type="button"
			role="switch"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? (
				<Image
					alt="moon icon"
					src="/assets/sun.png"
					width={50}
					height={50}
				/>
			) : (
				<Image
					alt="moon icon"
					src="/assets/moon.png"
					width={50}
					height={50}
				/>
			)}
		</button>
	)
}
