import { useGetCityPollutionQuery } from '../store/api/pollutionApi'
import { Link } from 'react-router-dom'

export default function City({ cityLocation }) {
	const { name, lat, lon } = cityLocation
	const { data: cityAirPollution, isSuccess: isPollutionSuccess } = useGetCityPollutionQuery({
		lat,
		lon,
	})
	const { main: airQuality } = isPollutionSuccess ? cityAirPollution.list[0] : {}
	if (isPollutionSuccess) {
		return (
			<li>
				<Link state={{ cityAirPollution, cityLocation }} to={`/details/${name}`}>
					{name} {airQuality.aqi}
				</Link>
			</li>
		)
	}
	return <p>Loading</p>
}
