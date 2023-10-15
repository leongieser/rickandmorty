import Header from '@/ram/components/ui/header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className="flex h-full w-screen flex-grow">{children}</main>
		</>
	)
}
