import { createSlice } from '@reduxjs/toolkit'

interface InitialStateInterface {
	score: number
	highestScore: number
}

const initialState: InitialStateInterface = {
	score: 0,
	highestScore: 0,
}

export const countryGameSlice = createSlice({
	name: 'countryGame',
	initialState,
	reducers: {
		increaseScore: state => {
			state.score += 1
		},
		resetScore: state => {
			state.score = 0
		},
		setHighestScore: state => {
			state.highestScore = state.score
		},
	},
})

export const { increaseScore, setHighestScore, resetScore } =
	countryGameSlice.actions
