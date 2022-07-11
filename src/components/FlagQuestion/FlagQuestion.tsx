import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getCountries } from '../../features/countries/countriesSlice'
import { AppPaper } from '../AppPaper'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { QuestionList } from '../QuestionList'

export const FlagQuestion = () => {
	const { data } = useAppSelector(store => store.countries)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (data.length === 0) {
			dispatch(getCountries())
		}
	}, [data])

	return (
		<AppPaper>
			<ErrorBoundary>
				<QuestionList flags />
			</ErrorBoundary>
		</AppPaper>
	)
}
