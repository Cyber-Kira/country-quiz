import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { resetScore } from '../../features/games/countryGameSlice'
import { setIsFinished } from '../../features/games/gameFlowSlice'
import img from './assets/undraw_winners_ao2o 2.svg'

export const Results = () => {
	const { score } = useAppSelector(store => store.countryGame)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		dispatch(setIsFinished(false))
		dispatch(resetScore())
		navigate('/')
	}

	return (
		<div className='w-full px-6 py-4 md:p-0 max-w-[464px]'>
			<div className='flex justify-between'>
				<h1 className='font-poppins font-bold text-2xl leading-[64px] md:text-4xl text-primary-100 md:text-white-100 uppercase md:mt-4 mb-2'>
					Country quiz
				</h1>
			</div>
			<div className='relative bg-white-50 pt-9 md:pt-16 px-0 md:px-8 pb-16 md:rounded-3xl min-h-[492px]'>
				<div className='grid grid-rows-3 place-items-center'>
					<img className='max-w-[238px] min-h-[136px]' src={img} alt='Result' />
					<div className=' w-full text-center mt-[40px]'>
						<h2 className='font-poppins font-bold text-5xl leading-[72px] text-primary-200'>
							Results
						</h2>
						<p className='font-poppins font-normal text-lg text-primary-200'>
							You got{' '}
							<span className='font-poppins font-bold text-4xl leading-[54px] text-accent-green'>
								{score}
							</span>{' '}
							correct answers
						</p>
					</div>
					<button
						onClick={handleClick}
						className='mt-auto px-[61px] py-[18px] border-2 border-primary-200 rounded-xl font-poppins font-semibold text-lg text-primary-200 hover:bg-primary-200 hover:text-white-50 transition-colors'
						type='button'
					>
						Try again
					</button>
				</div>
			</div>
		</div>
	)
}
