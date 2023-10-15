import Header from '@/ram/components/ui/header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className="h-full flex-grow">{children}</main>
		</>
	)
}
