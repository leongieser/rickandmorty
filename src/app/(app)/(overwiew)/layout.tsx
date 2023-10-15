export default function OverviewLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <main className="flex w-full flex-grow">{children}</main>
}
