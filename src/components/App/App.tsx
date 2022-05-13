import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getCountries } from '../../features/countries/countriesSlice'

export const App = () => {
	const { data } = useAppSelector(store => store.countries)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getCountries())
	}, [])

	const items = (
		<div>
			<ul>
				{data.map(item => {
					return (
						<li
							className='block my-10 first:mt-0 last:mb-0'
							key={item.name.common}
						>
							<div>
								<p>name: {item.name.common}</p>
								<p>capital: {item.capital}</p>
								flag: <img src={item.flags.png} alt={item.name.common} />
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)

	return <div className='text-xl font-mono'>{items}</div>
}

export default App
