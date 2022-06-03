import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { getCountries } from '../../features/countries/countriesSlice'
import { AppPaper } from '../AppPaper'
import { QuestionList } from '../QuestionList'

export const CapitalQuestion = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getCountries())
	}, [])

	return (
		<AppPaper>
			<QuestionList />
		</AppPaper>
	)
}
