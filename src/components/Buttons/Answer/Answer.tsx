import React from 'react'

interface Props {
	text: string
	index: number
}

export const Answer = ({ text, index }: Props) => {
	const answerChars = ['A', 'B', 'C', 'D']

	return (
		<button
			className='w-full h-14 flex justify-start items-center gap-11 pl-5 border-2 border-primary-300 rounded-xl hover:bg-accent-yellow hover:border-accent-yellow focus:bg-accent-yellow focus:outline-none focus:border-accent-yellow transition-colors group'
			type='button'
		>
			<span className='font-poppins font-medium text-2xl leading-9 text-primary-300 group-hover:text-white-50 group-focus:text-white-50 transition-colors'>
				{answerChars[index]}
			</span>
			<span className='font-poppins font-medium text-lg text-primary-300 group-hover:text-white-50 group-focus:text-white-50 transition-colors'>
				{text}
			</span>
		</button>
	)
}
