import React from 'react'

export const NavigateBefore = ({
	handleClick,
}: {
	handleClick: () => void
}) => {
	return (
		<button
			type='button'
			onClick={handleClick}
			className='flex absolute -top-3 md:top-5 -left-5 rounded-full w-9 h-9 bg-white-50 md:shadow-md hover:md:shadow-lg transition-shadow'
		>
			<span className='material-symbols-outlined m-auto'>navigate_before</span>
		</button>
	)
}
