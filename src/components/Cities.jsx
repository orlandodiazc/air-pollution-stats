import City from './City'

export default function Cities({ cityList }) {
	return (
		<div
			className="grid grid-cols-2 sm:grid-cols-3 bg-blue-600
    [&>*:nth-child(4n)]:bg-blue-500 [&>*:nth-child(4n+1)]:bg-blue-500
    sm:[&>*:nth-child(4n)]:bg-blue-600 sm:[&>*:nth-child(4n+1)]:bg-blue-600
    sm:[&>*:nth-child(odd)]:bg-blue-500
     "
		>
			{cityList.map((cityLocation) => {
				return <City key={cityLocation.name} cityLocation={cityLocation} />
			})}
		</div>
	)
}
