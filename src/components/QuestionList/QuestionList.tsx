import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { shuffleArray } from '../../lib'
import { CountryInterface } from '../../lib/countriesAPI'
import { Answer } from '../Buttons/Answer'
import { QuestionListSkeleton } from './components/QuestionListSkeleton'

export const QuestionList = ({ flags }: { flags?: boolean }) => {
	const { data, isLoading } = useAppSelector(store => store.countries)
	const { isPlaying } = useAppSelector(store => store.gameFlow)

	const [randomCountries, setRandomCountries] = useState<CountryInterface[]>([])
	const [currentCountry, setCurrentCountry] = useState<CountryInterface>({
		name: {
			common: '',
		},
		capital: '',
		region: '',
		flags: {
			png: '',
			svg: '',
		},
		ccn3: '',
	})

	useEffect(() => {
		if (data && data.length > 0 && isPlaying && !isLoading) {
			const randomCurrentCountry = data[Math.floor(Math.random() * data.length)]
			const countriesArray = [randomCurrentCountry]
			setCurrentCountry(randomCurrentCountry)
			setRandomCountries([randomCurrentCountry])
			for (let index = 0; index < 3; index += 1) {
				const randomCountry = data[Math.floor(Math.random() * data.length)]
				if (!countriesArray.includes(randomCountry)) {
					setRandomCountries(oldState => [...oldState, randomCountry])
					countriesArray.push(randomCountry)
				} else {
					index += -1
				}
			}
			setRandomCountries(shuffleArray<CountryInterface>(countriesArray))
		}
	}, [data, isPlaying])

	if (isLoading) {
		return <QuestionListSkeleton />
	}

	const questionText = !flags ? (
		<p className='font-poppins font-bold text-2xl leading-9 mb-8 text-primary-100 z-10'>
			{currentCountry.capital} is the capital of
		</p>
	) : (
		<p className='font-poppins font-bold text-2xl leading-9 mb-8 text-primary-100 z-10'>
			Which country does this flag belong to?
		</p>
	)

	const countryFlag = (
		<img
			className='max-w-[84px] drop-shadow-md mb-7 mt-2'
			src={currentCountry.flags.svg}
			alt={`Flag of ${currentCountry.capital}`}
		/>
	)

	return (
		<>
			{flags ? countryFlag : null}
			{questionText}
			<ol className='flex flex-col gap-6'>
				{randomCountries.map((country, index) => {
					return (
						<li
							key={
								country.ccn3 && country.ccn3.length > 0
									? country.ccn3
									: country.name.common
							}
						>
							{country.capital === currentCountry.capital ? (
								<Answer text={country.name.common} index={index} isRight />
							) : (
								<Answer text={country.name.common} index={index} />
							)}
						</li>
					)
				})}
			</ol>
		</>
	)
}
