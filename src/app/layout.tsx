import { Inter } from 'next/font/google'
import { BreakpointIndicator } from '@/ram/components/util/BreakpointIndicator'
import { ThemeSwitch } from '../components/util/ui/ThemeSwitch'
import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
	return {
		title: {
			template: '%s | Rick and Morty',
			default: 'Rick and Morty',
		},
		description:
			'A Rick and Morty fan site with information about the characters, locations, episodes.',
		icons: {
			icon: '/favicon.ico',
			apple: '/apple-touch-icon.png',
			shortcut: '/apple-touch-icon.png',
		},
		manifest: '/site.webmanifest',
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
			<body className={inter.className}>
				<Providers>
					<ThemeSwitch />
					<BreakpointIndicator />
					{children}
				</Providers>
			</body>
		</html>
	)
}
