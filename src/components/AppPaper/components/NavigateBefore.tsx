import React from 'react'
import { useLocation } from 'react-router-dom'

export const NavigateBefore = ({
	handleClick,
}: {
	handleClick: () => void
}) => {
	const location = useLocation()
	const isHome = location.pathname === '/'

	return (
		<button
			type='button'
			onClick={handleClick}
			className={`${
				isHome ? 'hidden' : 'flex'
			} items-center gap-1 absolute -top-3 md:top-5 -left-5 rounded-full w-9 h-9 bg-white-50 md:shadow-md hover:md:shadow-lg transition-shadow`}
		>
			<span className='material-symbols-outlined m-auto'>navigate_before</span>
			<span className='flex font-poppins font-semibold text-lg md:hidden'>
				Back
			</span>
		</button>
	)
}
