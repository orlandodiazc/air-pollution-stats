import { useGetCityPollutionQuery } from '../store/api/pollutionApi'
import { Link } from 'react-router-dom'
import { MdArrowForward } from 'react-icons/md'

export default function City({ cityLocation }) {
	const { name, lat, lon } = cityLocation
	const { data: cityAirPollution, isSuccess: isPollutionSuccess } = useGetCityPollutionQuery({
		lat,
		lon,
	})
	const { main: airQuality } = isPollutionSuccess ? cityAirPollution.list[0] : {}
	if (isPollutionSuccess) {
		return (
			<li className="text-gray-700 border-2 border-opacity-40 border-gray-200">
				<div className="px-3 py-1">
					<Link state={{ cityAirPollution, cityLocation }} to={`/details/${name}`}>
						<h2 className="font-bold text-lg">{name}</h2>
						<p>Air Quality Index: {airQuality.aqi}</p>
						<span className="flex items-center justify-end gap-1 text-gray-200">
							<MdArrowForward />
							See details
						</span>
					</Link>
				</div>
			</li>
		)
	}
}
