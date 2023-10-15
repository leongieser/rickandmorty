export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<nav className="flex flex-wrap items-center justify-between bg-teal-500 p-6">
				Overview - episodes
			</nav>

			<main>{children}</main>
		</>
	)
}
