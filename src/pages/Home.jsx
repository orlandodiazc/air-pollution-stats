import Cities from "../components/Cities";

const POPULAR_CITIES = [
  {
    id: 0,
    name: "Bogota",
    country: "CO",
    lat: 4.624335,
    lon: -74.063644,
  },
  {
    id: 1,
    name: "New York",
    country: "US",
    lat: 40.73061,
    lon: -73.935242,
  },
  {
    id: 2,
    name: "London",
    country: "EN",
    lat: 51.509865,
    lon: -0.118092,
  },
  {
    id: 3,
    name: "Paris",
    country: "FR",
    lat: 49.009724,
    lon: 2.547778,
  },
  {
    id: 4,
    name: "Tokyo",
    country: "JP",
    lat: 35.705677,
    lon: 139.751389,
  },
  {
    id: 5,
    name: "Dubai",
    country: "UAE",
    lat: 25.199514,
    lon: 55.277397,
  },
  {
    id: 6,
    name: "Barcelona",
    country: "SP",
    lat: 41.388123,
    lon: 2.186015,
  },
  {
    id: 7,
    name: "Rome",
    country: "IT",
    lat: 41.890209,
    lon: 12.492231,
  },
  {
    id: 8,
    name: "Madrid",
    country: "SP",
    lat: 40.416729,
    lon: -3.703339,
  },
  {
    id: 9,
    name: "Singapure",
    country: "SG",
    lat: 1.29027,
    lon: 103.851959,
  },
];

export default function Home() {
  return (
    <section>
      <div className="m-auto max-w-3xl">
        <h1 className="pl-3 py-2 text-gray-200 font-bold text-2xl">
          Popular Cities
        </h1>
        <Cities cityList={POPULAR_CITIES} />
      </div>
    </section>
  );
}
