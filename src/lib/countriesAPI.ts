import { AxiosError, AxiosResponse } from 'axios'

const axios = require('axios').default

const url = 'https://restcountries.com/v3.1'

export interface CountryInterface {
	name: {
		common: string
	}
	capital: string
	region: string
	flags: {
		png: string
		svg: string
	}
}

export const fetchAllCountries = (): CountryInterface[] => {
	return axios(`${url}/all`)
		.then((response: AxiosResponse<CountryInterface[]>) => {
			return response.data
		})
		.catch((error: AxiosError) => error)
}
