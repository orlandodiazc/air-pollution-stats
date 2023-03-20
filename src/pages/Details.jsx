import { useLocation } from 'react-router-dom'

export default function Details() {
	const { state } = useLocation()
	console.log(state)
	return (
		<div className="m-auto max-w-3xl">
			<h1 className="pl-3 py-2 font-bold text-2xl">Details</h1>
			<p>DETAILS {state.cityLocation.name}</p>
		</div>
	)
}
