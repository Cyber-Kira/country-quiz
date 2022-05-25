import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CountryInterface, fetchAllCountries } from '../../lib/countriesAPI'

interface InitialStateInterface {
	data: CountryInterface[]
	currentCountry: CountryInterface
	isLoading: boolean
}

const initialState: InitialStateInterface = {
	isLoading: false,
	data: [],
	currentCountry: {
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
	},
}

export const getCountries = createAsyncThunk(
	'quotes/getCountries',
	async () => {
		const response = await fetchAllCountries()
		return response
	}
)

export const countriesSlice = createSlice({
	name: 'quotes',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getCountries.pending, state => {
				state.isLoading = true
			})
			.addCase(getCountries.fulfilled, (state, { payload }) => {
				state.data = payload
				state.isLoading = false
				state.currentCountry =
					state.data[Math.floor(Math.random() * state.data.length)]
			})
			.addCase(getCountries.rejected, state => {
				state.isLoading = false
			})
	},
})
