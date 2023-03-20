import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pollutionApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org' }),
	endpoints: (builder) => ({
		getCoordinates: builder.query({
			query: (city) => `/geo/1.0/direct?q=${city}&limit=5&appid=${import.meta.env.VITE_API_KEY}`,
		}),
		getCityPollution: builder.query({
			query: ({ lat, lon }) =>
				`/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`,
		}),
	}),
})

export const { useLazyGetCoordinatesQuery, useGetCityPollutionQuery } = pollutionApi
