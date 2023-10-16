export default function Loading() {
	return (
		<section className="flex w-full  flex-grow flex-col items-center gap-8 p-5">
			<div className="flex h-20 w-96 gap-5"></div>
			<div className="flex animate-pulse gap-4">
				<div className="h-10 w-20 rounded-md bg-gray-500"></div>
				<div className="w-20 select-none rounded-md bg-gray-500 px-4 py-2 text-center  text-xl font-bold "></div>
				<div className="w-20 rounded-md bg-gray-500"></div>
			</div>

			<section className="mx-auto flex flex-col items-start justify-center gap-8">
				<div className="mx-auto">
					<div className="w-56"></div>
				</div>
				<div className={'w-20'}></div>
				<div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
					{[...Array(20).keys()].map((i) => (
						<div
							style={{
								animationDelay: `${i * 0.2}s`,
								animationDuration: '1s',
							}}
							key={i}
							className="h-32 w-64 max-w-sm animate-pulse flex-col justify-between rounded-md bg-gray-600 dark:bg-gray-400 dark:text-gray-600"
						></div>
					))}
				</div>
			</section>
		</section>
	)
}
