import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from '../Buttons/Navigation'
import img from './assets/undraw_adventure_4hum 1.svg'

interface Props {
	children?: JSX.Element
}

export const AppPaper = ({ children }: Props) => {
	return (
		<div className='w-full px-6 py-4 md:p-0 max-w-[464px]'>
			<div className='flex justify-between'>
				<h1 className='font-poppins font-bold text-2xl leading-[64px] md:text-4xl text-primary-100 md:text-white-100 uppercase md:mt-4'>
					Country quiz
				</h1>
			</div>
			<div className='relative bg-white-50 pt-9 md:pt-16 px-0 md:px-8 pb-16 md:rounded-3xl min-h-[492px]'>
				<Link
					to='/'
					className='flex absolute -top-3 md:top-5 -left-5 rounded-full w-9 h-9 bg-white-50 md:shadow-md hover:md:shadow-lg transition-shadow'
				>
					<span className='material-symbols-outlined m-auto'>
						navigate_before
					</span>
				</Link>
				<img
					className='absolute right-0 -top-20 w-28 md:w-40'
					src={img}
					alt='The guy standing by the globe'
				/>
				{children}
				<div className='w-full hidden justify-endh'>
					<Navigation />
				</div>
			</div>
		</div>
	)
}
