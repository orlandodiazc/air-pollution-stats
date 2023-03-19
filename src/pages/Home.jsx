import City from '../components/City'

const POPULAR_CITIES = [
	{ name: 'Bogota', lat: 4.624335, lon: -74.063644 },
	{ name: 'New York', lat: 40.73061, lon: -73.935242 },
]

export default function Home() {
	return (
		<section>
			{POPULAR_CITIES.map((cityLocation) => (
				<City key={cityLocation.name} cityLocation={cityLocation} />
			))}
		</section>
	)
}
