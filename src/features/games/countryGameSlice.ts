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
		setScore: (state, { payload }) => {
			state.score = payload
		},
		setHighestScore: (state, { payload }) => {
			state.highestScore = payload
		},
	},
})

export const { setScore, setHighestScore } = countryGameSlice.actions
