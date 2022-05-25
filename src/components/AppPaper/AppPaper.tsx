import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { getCountries } from '../../features/countries/countriesSlice'
import { Navigation } from '../Buttons/Navigation'
import img from './assets/undraw_adventure_4hum 1.svg'

interface Props {
	children?: JSX.Element
}

export const AppPaper = ({ children }: Props) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getCountries())
	}, [])

	return (
		<div className='w-full px-6 py-4 md:p-0 max-w-[464px]'>
			<div className='flex justify-between'>
				<h1 className='font-poppins font-bold text-2xl leading-[64px] md:text-4xl text-primary-100 md:text-white-100 uppercase md:mt-4'>
					Country quiz
				</h1>
			</div>
			<div className='relative bg-white-50 pt-6 md:pt-16 px-0 md:px-8 pb-16 md:rounded-3xl min-h-[492px]'>
				<img
					className='absolute right-0 -top-20 w-28 md:w-40'
					src={img}
					alt='The guy standing by the globe'
				/>
				{children}
				<div className='w-full flex justify-end'>
					<Navigation />
				</div>
			</div>
		</div>
	)
}
