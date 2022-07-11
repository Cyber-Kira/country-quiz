import React from 'react'
import { AppPaper } from '../AppPaper'
import { Quiz } from '../Quiz'

export const GameSelector = () => {
	return (
		<AppPaper>
			<div>
				<div className='grid grid-cols-2 gap-4'>
					<Quiz title='Guess a capital' url='/capital' info='Guess a capital' />
					<Quiz title='Guess a flag' url='/flag' info='Guess a flag' />
				</div>
			</div>
		</AppPaper>
	)
}
