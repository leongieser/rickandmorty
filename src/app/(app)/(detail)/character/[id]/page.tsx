export async function generateMetadata({ params }: { params: { id: string } }) {
	return null //TODO
}

export default function Charater() {
	return (
		<div className="flex h-full w-full flex-col items-center bg-zinc-800 p-5">
			<h1 className="text-2xl">Charater</h1>
		</div>
	)
}
