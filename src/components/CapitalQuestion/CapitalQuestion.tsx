import React from 'react'
import { AppPaper } from '../AppPaper'
import { QuestionList } from '../QuestionList'

export const CapitalQuestion = () => {
	const countries = ['Vietnam', 'Malaysia', 'Sweden', 'Austria']
	return (
		<AppPaper question='Kuala Lumpur is the capital of'>
			<QuestionList countries={countries} />
		</AppPaper>
	)
}
