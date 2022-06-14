import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
	setIsPlaying,
	setIsStopped,
} from '../../../features/games/gameFlowSlice'

export const Navigation = () => {
	const { isStopped, isFinished } = useAppSelector(store => store.gameFlow)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		if (isStopped) {
			dispatch(setIsStopped(false))
			dispatch(setIsPlaying(true))
		}
		if (isFinished) {
			navigate('/results')
		}
	}

	const navigationElement = (
		<button
			type='button'
			onClick={handleClick}
			className='mt-6 py-[15px] px-9 rounded-2xl bg-accent-yellow font-poppins font-bold text-lg text-white-50 drop-shadow-lg hover:drop-shadow-md transition-all'
		>
			{isFinished ? 'Results' : 'Next'}
		</button>
	)

	return isStopped ? navigationElement : null
}
