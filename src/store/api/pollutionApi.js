import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { v4 as uuidv4 } from 'uuid'

const CHEMS = {
	co: {
		name: 'Carbon Monoxide',
		spamodel: '/Carbon-monoxide-3D.png',
		model: '/Carbon_monoxide_2D.svg',
	},
	no: {
		name: 'Nitrogen Monoxide',
		spamodel: '/Nitric-oxide-3D.png',
		model: '/Nitric-oxide-2D.svg',
	},
	no2: {
		name: 'Nitrogen Dioxide',
		spamodel: '/Nitrogen-dioxide-3D.png',
		model: '/Nitrogen-dioxide-2D-dimensions-vector.svg',
	},
	o3: { name: 'Ozone', spamodel: '/Ozone-3D.png', model: '/Ozone-1,3-dipole.png' },
	so2: {
		name: 'Sulphur Dioxide',
		spamodel: '/Sulfur-dioxide-3D.png',
		model: '/Sulfur-dioxide-2D.svg',
	},
	nh3: { name: 'Ammonia', spamodel: '/Ammonia-3D.png', model: '/Ammonia-2D.svg' },
}

export const pollutionApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: '/.netlify/functions' }),
	endpoints: (builder) => ({
		getCoordinates: builder.query({
			query: (city) => `/coordinates?city=${city}`,
			transformResponse: (res) => {
				const countries = []
				return res.filter((location) => {
					if (!countries.includes(location.country)) {
						countries.push(location.country)
						location.id = uuidv4()
						return true
					}
					return false
				})
			},
		}),
		getCityPollution: builder.query({
			query: ({ lat, lon }) => `/cityAirPollution?lat=${lat}&lon=${lat}`,
			transformResponse: (res) => {
				delete res.list[0].components['pm2_5']
				delete res.list[0].components['pm10']
				const oldComponents = res.list[0].components
				Object.keys(CHEMS).forEach((key) => {
					res.list[0].components[key] = {
						name: CHEMS[key].name,
						spamodel: CHEMS[key].spamodel,
						model: CHEMS[key].model,
						concentration: oldComponents[key],
					}
				})
				return res
			},
		}),
	}),
})

// /geo/1.0/direct?q=${city}&limit=5&appid=${import.meta.env.VITE_API_KEY}
// /data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}

export const { useLazyGetCoordinatesQuery, useGetCityPollutionQuery } = pollutionApi
