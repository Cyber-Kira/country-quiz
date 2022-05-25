import React from 'react'

export const QuestionListSkeleton = () => {
	return (
		<>
			<div className='font-poppins font-bold text-2xl leading-9 mb-8 h-9 text-primary-100 bg-slate-400 rounded-lg animate-pulse' />
			<ol className='flex flex-col gap-6'>
				<li>
					{' '}
					<button
						className='w-full h-14 flex justify-start items-center gap-11 pl-5 border-2 border-slate-400 bg-slate-400 rounded-xl group animate-pulse'
						type='button'
					>
						<div className='font-poppins font-medium text-lg text-primary-300 group-hover:text-white-50 group-focus:text-white-50 transition-colors' />
					</button>
				</li>
				<li>
					{' '}
					<button
						className='w-full h-14 flex justify-start items-center gap-11 pl-5 border-2 border-slate-400 bg-slate-400 rounded-xl group animate-pulse'
						type='button'
					>
						<div className='font-poppins font-medium text-lg text-primary-300 group-hover:text-white-50 group-focus:text-white-50 transition-colors' />
					</button>
				</li>
				<li>
					{' '}
					<button
						className='w-full h-14 flex justify-start items-center gap-11 pl-5 border-2 border-slate-400 bg-slate-400 rounded-xl group animate-pulse'
						type='button'
					>
						<div className='font-poppins font-medium text-lg text-primary-300 group-hover:text-white-50 group-focus:text-white-50 transition-colors' />
					</button>
				</li>
				<li>
					{' '}
					<button
						className='w-full h-14 flex justify-start items-center gap-11 pl-5 border-2 border-slate-400 bg-slate-400 rounded-xl group animate-pulse'
						type='button'
					>
						<div className='font-poppins font-medium text-lg text-primary-300 group-hover:text-white-50 group-focus:text-white-50 transition-colors' />
					</button>
				</li>
			</ol>
		</>
	)
}
