import Image from 'next/image'

export default function Loading() {
	return (
		<Image
			className="animate-spin"
			src={'/assets/loading_portal.png'}
			alt="loading"
			width={500}
			height={500}
		/>
	)
}
