import React from 'react'
import img from './assets/undraw_adventure_4hum 1.svg'

export const CapitalQuestion = () => {
	return (
		<div className='w-full px-6 py-4 md:p-0 max-w-[464px]'>
			<div className='flex justify-between'>
				<h1 className='font-poppins font-bold text-2xl leading-[64px] md:text-4xl text-primary-100 md:text-white-100 uppercase md:mt-4'>
					Country quiz
				</h1>
				<img
					className='w-28 md:w-40'
					src={img}
					alt='The guy standing by the globe'
				/>
			</div>
		</div>
	)
}
