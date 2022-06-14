import { createSlice } from '@reduxjs/toolkit'

interface InitialStateInterface {
	isPlaying: boolean
	isStopped: boolean
	isFinished: boolean
}

const initialState: InitialStateInterface = {
	isPlaying: true,
	isStopped: false,
	isFinished: false,
}

export const gameFlowSlice = createSlice({
	name: 'gameFlow',
	initialState,
	reducers: {
		setIsPlaying: (state, { payload }: { payload: boolean }) => {
			state.isPlaying = payload
		},
		setIsStopped: (state, { payload }: { payload: boolean }) => {
			state.isStopped = payload
		},
		setIsFinished: (state, { payload }: { payload: boolean }) => {
			state.isFinished = payload
		},
	},
})

export const { setIsPlaying, setIsStopped, setIsFinished } =
	gameFlowSlice.actions
