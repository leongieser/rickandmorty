'use client'

import { useTheme } from 'next-themes'
import { useMounted } from '@/ram/hooks/useMounted'

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme()
	const mounted = useMounted()
	if (!mounted) return null

	return (
		<button
			className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 p-2 text-zinc-100 transition-colors duration-200 dark:bg-zinc-100 dark:text-zinc-950"
			type="button"
			role="switch"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? <span>Light</span> : <span>dark</span>}
		</button>
	)
}
