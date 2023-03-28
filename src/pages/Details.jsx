import { useLocation } from 'react-router-dom';
import Chemical from '../components/Chemical';

export default function Details() {
  const { state } = useLocation();
  const { cityLocation, cityAirPollution } = state;
  const { main, components } = cityAirPollution.list[0];

  return (
    <section className="m-auto max-w-4xl px-2 mb-6">
      <h1 className="px-3 mb-1 font-bold text-2xl">Details</h1>
      <div className="border p-3 sm:px-4 sm:py-3 rounded-lg">
        <div className="flex justify-between bg-blue-800 border border-gray-400  gap-1 px-3 py-2 md:px-4 mb-3 rounded-lg">
          <div>
            <h2 className="font-bold text-lg">{cityLocation.name}</h2>
            <p>
              Latitude:
              {' '}
              {cityLocation.lat.toFixed(2)}
              , Longitude:
              {cityLocation.lon.toFixed(2)}
            </p>
          </div>
          <p>
            Air Quality Index:
            {main.aqi}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Chemichals</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Object.keys(components).map((key) => (
              <Chemical key={key} component={components[key]} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
