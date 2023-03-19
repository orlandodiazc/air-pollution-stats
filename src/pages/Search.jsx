import { useEffect } from 'react'
import { useLazyGetCoordinatesQuery } from '../store/api/pollutionApi'
import { useLocation } from 'react-router-dom'
import City from '../components/City'

export default function Search() {
	// const [results, setResults] = useState([]);
	// // const [error, setError] = useState(null);
	const [getCoordinates, { data: coordinates, isSuccess }] = useLazyGetCoordinatesQuery()
	const { state } = useLocation() // <-- unpack route state
	useEffect(() => {
		getCoordinates(state)
	}, [state]) // <-- use as effect dependency
	if (isSuccess) {
		return (
			<section>
				{[coordinates[0]].map(({ name, lat, lon }) => (
					<City key={name} cityLocation={{ name, lat, lon }} />
				))}
			</section>
		)
	}
	return <h1>Loading</h1>
}
