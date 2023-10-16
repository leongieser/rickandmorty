import { ramFont } from '@/ram/lib/utils'

export const SectionHeader = ({ heading }: { heading: string }) => {
	return (
		<h1
			key={heading}
			className={`${ramFont.className} thicc-outline mx-auto text-center text-7xl text-ram-primary `}
		>
			{heading}
		</h1>
	)
}
