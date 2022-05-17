import React from 'react'
import img from './assets/background.png'

export const Background = () => {
	return (
		<img
			className='invisible md:visible fixed inset-0 object-cover bg-no-repeat h-full w-full -z-10'
			src={img}
			alt='Background'
		/>
	)
}
