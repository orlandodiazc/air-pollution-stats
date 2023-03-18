import { Link } from 'react-router-dom'
import { useGetCityPollutionQuery, useLazyGetCoordinatesQuery } from './store/api/pollutionApi'
import { useLocation } from 'react-router-dom'

export default function App() {
	const [getCoordinates, { data: coordinates, isSuccess }] = useLazyGetCoordinatesQuery()
	console.log(coordinates)
	const POPULAR_CITIES = isSuccess
		? [{ name: coordinates[0].name, lat: coordinates[0].lat, lon: coordinates[0].lon }]
		: [
				{ name: 'Bogota', lat: 4.624335, lon: -74.063644 },
				{ name: 'New York', lat: 40.73061, lon: -73.935242 },
		  ]
	console.log(POPULAR_CITIES)
	return (
		<>
			<button type="button" onClick={() => getCoordinates('Paris')}>
				Search Paris
			</button>
			{POPULAR_CITIES.map((cityLocation) => (
				<City key={cityLocation.name} cityLocation={cityLocation} />
			))}
		</>
	)
}

function City({ cityLocation }) {
	const { name, lat, lon } = cityLocation
	const { data: cityAirPollution, isSuccess: isPollutionSuccess } = useGetCityPollutionQuery({
		lat,
		lon,
	})
	const { main: airQuality } = isPollutionSuccess ? cityAirPollution.list[0] : {}
	if (isPollutionSuccess) {
		return (
			<li>
				<Link state={{ cityAirPollution, cityLocation }} to={`details/${name}`}>
					{name} {airQuality.aqi}
				</Link>
			</li>
		)
	}
	return <p>Loading</p>
}

export function DetailsComp({ cityAirPollution, cityLocation }) {
	// const { data: cityAirPollution, isSuccess: isPollutionSuccess } = useGetCityPollutionQuery({
	// 	lat,
	// 	lon,
	// })
	const { state } = useLocation()
	console.log(state)
	// const { main: airQuality, components: chemichals } = cityAirPollution.list[0]
	return <p>DETAILS</p>
}

export function Search() {}
