import Cities from '../components/Cities'

const POPULAR_CITIES = [
	{ name: 'Bogota', lat: 4.624335, lon: -74.063644 },
	{ name: 'New York', lat: 40.73061, lon: -73.935242 },
	{ name: 'New York', lat: 40.73061, lon: -73.935242 },
	{ name: 'New York', lat: 40.73061, lon: -73.935242 },
	{ name: 'New York', lat: 40.73061, lon: -73.935242 },
]

export default function Home() {
	return (
		<section>
			<div className="m-auto max-w-3xl">
				<h1 className="pl-3 py-2 font-bold text-2xl">Popular Cities</h1>
				<Cities cityList={POPULAR_CITIES} />
			</div>
		</section>
	)
}
