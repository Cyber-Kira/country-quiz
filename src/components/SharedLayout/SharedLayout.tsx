import React from 'react'
import { Outlet } from 'react-router-dom'
import { Background } from '../Background'
import { Footer } from '../Footer'

export const SharedLayout = () => {
	return (
		<div className='flex flex-col h-screen'>
			<div className='md:flex md:justify-center md:items-center md:h-screen'>
				<Outlet />
			</div>
			<Footer />
			<Background />
		</div>
	)
}
