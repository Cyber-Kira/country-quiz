import React from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { getCountries } from '../../../features/countries/countriesSlice'

export const Navigation = () => {
	const dispatch = useAppDispatch()
	return (
		<button
			type='button'
			onClick={() => dispatch(getCountries())}
			className='mt-6 py-[15px] px-9 rounded-2xl bg-accent-yellow font-poppins font-bold text-lg text-white-50 drop-shadow-lg hover:drop-shadow-md transition-all'
		>
			Next
		</button>
	)
}
