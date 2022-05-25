import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { shuffleArray } from '../../lib'
import { CountryInterface } from '../../lib/countriesAPI'
import { Answer } from '../Buttons/Answer'
import { QuestionListSkeleton } from './components/QuestionListSkeleton'

export const QuestionList = () => {
	const { data, isLoading, currentCountry } = useAppSelector(
		store => store.countries
	)

	const [randomCountries, setRandomCountries] = useState<CountryInterface[]>([])

	useEffect(() => {
		if (data && data.length > 0) {
			setRandomCountries(oldState => [...oldState, currentCountry])
			for (let index = 0; index < 3; index += 1) {
				const randomCountry = data[Math.floor(Math.random() * data.length)]

				if (
					!randomCountries.includes(randomCountry) &&
					randomCountry.capital.length > 0
				) {
					setRandomCountries(oldState => [...oldState, randomCountry])
				} else {
					index += -1
				}
			}
		}
	}, [data])

	if (isLoading) {
		return <QuestionListSkeleton />
	}

	return (
		<>
			<p className='font-poppins font-bold text-2xl leading-9 mb-8 text-primary-100'>
				{currentCountry.capital} is the capital of
			</p>
			<ol className='flex flex-col gap-6'>
				{shuffleArray<CountryInterface>(randomCountries).map(
					(country, index) => {
						return (
							<li key={country.ccn3}>
								<Answer text={country.name.common} index={index} />
							</li>
						)
					}
				)}
			</ol>
		</>
	)
}
