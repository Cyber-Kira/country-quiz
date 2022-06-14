import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CapitalQuestion } from '../CapitalQuestion'
import { GameSelector } from '../GameSelector'
import { NotFound } from '../NotFound/NotFound'
import { Results } from '../Results'
import { SharedLayout } from '../SharedLayout/SharedLayout'

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route path='/' element={<GameSelector />} />
					<Route path='/capital' element={<CapitalQuestion />} />
					<Route path='/results' element={<Results />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App
