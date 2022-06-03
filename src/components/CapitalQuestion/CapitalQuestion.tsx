import React from 'react'
import { AppPaper } from '../AppPaper'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { QuestionList } from '../QuestionList'

export const CapitalQuestion = () => {
	return (
		<AppPaper>
			<ErrorBoundary>
				<QuestionList />
			</ErrorBoundary>
		</AppPaper>
	)
}
