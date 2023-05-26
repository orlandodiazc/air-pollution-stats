import axios from "axios";

export default async function coordinates(request, response) {
  const { city } = request.query;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.API_KEY}`;
  const { data } = await axios.get(url);
  response.status(200);
  response.json(data);
}
