import React from 'react'

export const Footer = () => {
	return (
		<div className='font-montserrat text-sm text-center mt-auto pb-4 md:pb-0 md:text-white-100 leading-4 font-normal md:fixed md:bottom-5 md:left-1/2 md:-translate-x-1/2'>
			created by
			<a
				href='https://devchallenges.io/portfolio/Cyber-Kira'
				target='_blank'
				rel='noreferrer'
				className='font-montserrat text-sm leading-4 font-bold px-1 underline underline-offset-1 hover:text-white-50 focus:text-white-50 transition-colors'
			>
				CyberKira
			</a>
			- devChallenges.io
		</div>
	)
}
