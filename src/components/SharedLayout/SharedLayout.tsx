import React from 'react'
import { Outlet } from 'react-router-dom'

export const SharedLayout = () => {
	return (
		<div>
			<header>header</header>
			<Outlet />
			<footer>footer</footer>
		</div>
	)
}
