import { useEffect } from 'react'
import { useLazyGetCoordinatesQuery } from '../store/api/pollutionApi'
import { useLocation } from 'react-router-dom'
import Cities from '../components/Cities'

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
				<div className="m-auto max-w-3xl">
					<h1 className="pl-3 py-2 font-bold text-2xl">Results</h1>
					{[coordinates[0]].map(({ name, lat, lon }) => {
						return <Cities cityList={[{ name, lat, lon }]} />
					})}
				</div>
			</section>
		)
	}
	return <h1>Loading</h1>
}
