import axios from "axios";

export default async function cityAirPollution(request, response) {
  const { lat, lon } = request.query;
  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;
  const { data } = await axios.get(url);
  response.status(200);
  response.json(data);
}
