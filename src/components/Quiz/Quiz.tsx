import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
	title: string
	url: string
	info: string
}

export const Quiz = ({ title, url, info }: Props) => {
	return (
		<div className='w-full flex flex-col justify-center items-center ring-1 ring-primary-300 hover:ring-accent-yellow rounded-lg transition-all'>
			<p className='font-poppins font-semibold text-xl mt-4 text-center'>
				{title}
			</p>
			<Link
				className='px-7 py-2 bg-accent-yellow rounded-lg font-poppins font-medium text-white-50 shadow-md my-5 hover:bg-primary-300 transition-colors'
				to={url}
				type='button'
			>
				Play now
			</Link>
			<button
				className='flex items-center justify-center py-3 w-full gap-2 border-t border-slate-400 border-opacity-30'
				type='button'
			>
				<svg
					className='fill-slate-400'
					xmlns='http://www.w3.org/2000/svg'
					height='20'
					width='20'
				>
					<path d='M8.938 14.312H11.062V9H8.938ZM10 7.917Q10.5 7.917 10.833 7.583Q11.167 7.25 11.167 6.75Q11.167 6.25 10.833 5.917Q10.5 5.583 10 5.583Q9.521 5.583 9.177 5.917Q8.833 6.25 8.833 6.75Q8.833 7.229 9.167 7.573Q9.5 7.917 10 7.917ZM10 18.708Q8.188 18.708 6.604 18.031Q5.021 17.354 3.833 16.167Q2.646 14.979 1.969 13.396Q1.292 11.812 1.292 10Q1.292 8.167 1.969 6.594Q2.646 5.021 3.833 3.833Q5.021 2.646 6.604 1.969Q8.188 1.292 10 1.292Q11.833 1.292 13.406 1.969Q14.979 2.646 16.167 3.833Q17.354 5.021 18.031 6.594Q18.708 8.167 18.708 10Q18.708 11.812 18.031 13.396Q17.354 14.979 16.167 16.167Q14.979 17.354 13.406 18.031Q11.833 18.708 10 18.708Z' />
				</svg>
				<p className='font-poppins text-sm font-medium text-slate-400'>
					Read more
				</p>
				<p className='hidden'>{info}</p>
			</button>
		</div>
	)
}
