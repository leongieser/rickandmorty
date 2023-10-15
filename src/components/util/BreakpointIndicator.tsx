import { cn } from '@/ram/lib/utils'

export const BreakpointIndicator = ({
	pos = 'br',
	color = true,
}: {
	pos?: 'tl' | 'tr' | 'br' | 'bl'
	color?: boolean
}) => {
	if (process.env.NODE_ENV === 'production') return null

	const posMap = {
		tl: 'top-3 left-3',
		tr: 'top-3 right-3',
		br: 'bottom-3 right-3',
		bl: 'bottom-3 left-3',
	}

	return (
		<div
			aria-hidden={true}
			tabIndex={-1}
			className={cn(
				`${posMap[pos]} fixed z-[999] flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-xs font-semibold uppercase text-gray-950 ring-2 ring-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:ring-gray-50`,
				{
					'bg-red-200 text-red-600 ring-red-600 dark:bg-red-600 dark:text-red-200 dark:ring-red-200 sm:bg-orange-200 sm:text-orange-600 sm:ring-orange-600 sm:dark:bg-orange-600 sm:dark:text-orange-200 sm:dark:ring-orange-200 md:bg-yellow-200 md:text-yellow-600 md:ring-yellow-600 md:dark:bg-yellow-600 md:dark:text-yellow-200 md:dark:ring-yellow-200 lg:bg-green-200 lg:text-green-600 lg:ring-green-600 lg:dark:bg-green-600 lg:dark:text-green-200 lg:dark:ring-green-200 xl:bg-blue-200 xl:text-blue-600 xl:ring-blue-600 xl:dark:bg-blue-600 xl:dark:text-blue-200 xl:dark:ring-blue-200 2xl:bg-purple-200 2xl:text-purple-600 2xl:ring-purple-600 2xl:dark:bg-purple-600 2xl:dark:text-purple-200 2xl:dark:ring-purple-200':
						color,
				}
			)}
		>
			<div className="block sm:hidden">xs</div>
			<div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
				sm
			</div>
			<div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
				md
			</div>
			<div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
			<div className="hidden xl:block 2xl:hidden">xl</div>
			<div className="hidden 2xl:block">2xl</div>
		</div>
	)
}
