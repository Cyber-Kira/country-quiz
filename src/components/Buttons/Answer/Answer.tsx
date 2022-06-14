import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { increaseScore } from '../../../features/games/countryGameSlice'
import {
	setIsFinished,
	setIsPlaying,
	setIsStopped,
} from '../../../features/games/gameFlowSlice'

interface Props {
	text: string
	index: number
	isRight?: boolean
}

export const Answer = ({ text, index, isRight }: Props) => {
	const { isStopped } = useAppSelector(store => store.gameFlow)
	const [isClicked, setIsClicked] = useState(false)
	const answerChars = ['A', 'B', 'C', 'D']
	const dispatch = useAppDispatch()

	const handleClick = () => {
		if (isRight && !isStopped) {
			dispatch(increaseScore())
		}
		if (!isRight) {
			dispatch(setIsFinished(true))
		}
		if (!isStopped) {
			setIsClicked(true)
			dispatch(setIsStopped(true))
			dispatch(setIsPlaying(false))
		}
	}

	return (
		<button
			onClick={handleClick}
			className={`w-full h-14 flex justify-start items-center gap-11 pl-5 border-2 rounded-xl border-primary-300 focus:outline-none ${
				isStopped
					? 'pointer-events-none hover:bg-none focus:bg-none '
					: 'hover:bg-accent-yellow hover:border-accent-yellow focus:bg-accent-yellow focus:border-accent-yellow'
			} ${isStopped && isRight ? 'bg-accent-green border-accent-green' : ''} ${
				isClicked && !isRight ? 'bg-accent-red border-accent-red' : ''
			} transition-colors group`}
			type='button'
		>
			<span
				className={`font-poppins font-medium text-2xl leading-9  ${
					isStopped
						? ''
						: 'group-hover:text-white-50 group-focus:text-white-50 '
				}  ${isStopped && isRight ? 'text-white-50' : ''} ${
					isClicked ? 'text-white-50' : ''
				}  transition-colors`}
			>
				{answerChars[index]}
			</span>
			<span
				className={`font-poppins font-medium text-lg  ${
					isStopped
						? ''
						: 'group-hover:text-white-50 group-focus:text-white-50 '
				} ${isClicked ? 'text-white-50' : ''} ${
					isStopped && isRight ? 'text-white-50' : ''
				} transition-colors`}
			>
				{text}
			</span>
		</button>
	)
}
