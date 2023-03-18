import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = 'f18c5efec7fe93374ccee2f15f9bc2a3'

export const pollutionApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org' }),
  endpoints: (builder) => ({
    getCoordinates: builder.query({
      query: (city) => `/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
    }),
    getCityPollution: builder.query({
      query: ({ lat, lon }) => `/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    })
  })
})

export const { useLazyGetCoordinatesQuery, useGetCityPollutionQuery } = pollutionApi

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
// http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid={API key}
