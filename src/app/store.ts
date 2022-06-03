import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { gameFlowSlice } from '../features/games/gameFlowSlice'
import { countryGameSlice } from '../features/games/countryGameSlice'
import { countriesSlice } from '../features/countries/countriesSlice'

export const store = configureStore({
	reducer: {
		countries: countriesSlice.reducer,
		countryGame: countryGameSlice.reducer,
		gameFlow: gameFlowSlice.reducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
