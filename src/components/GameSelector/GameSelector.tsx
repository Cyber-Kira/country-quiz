import React from 'react'
import { Link } from 'react-router-dom'
import { AppPaper } from '../AppPaper'

export const GameSelector = () => {
	return (
		<AppPaper>
			<>
				<h2>Select your game type</h2>
				<div className='grid'>
					<Link
						className='w-1/2 h-12 flex items-center justify-center rounded-lg text-white-50 font-poppins text-lg uppercase bg-primary-50'
						to='/capital'
					>
						Country Quiz
					</Link>
				</div>
			</>
		</AppPaper>
	)
}
