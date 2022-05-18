import React from 'react'
import { Answer } from '../Buttons/Answer'

interface Props {
	countries: string[]
}

export const QuestionList = ({ countries }: Props) => {
	return (
		<ol className='flex flex-col gap-6'>
			{countries.map((country, index) => {
				return (
					<li key={country}>
						<Answer text={country} index={index} />
					</li>
				)
			})}
		</ol>
	)
}
