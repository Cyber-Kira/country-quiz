import React from 'react'
import { Outlet } from 'react-router-dom'
import { Background } from '../Background'
import { Footer } from '../Footer'

export const SharedLayout = () => {
	return (
		<div>
			<header>header</header>
			<Outlet />
			<Footer />
			<Background />
		</div>
	)
}
