import { useLocation } from 'react-router-dom'

export default function Details() {
	const { state } = useLocation()
	return <p>DETAILS {state.cityLocation.name}</p>
}
