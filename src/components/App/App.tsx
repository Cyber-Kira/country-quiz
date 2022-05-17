import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NotFound } from '../NotFound/NotFound'
import { SharedLayout } from '../SharedLayout/SharedLayout'

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<SharedLayout />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App