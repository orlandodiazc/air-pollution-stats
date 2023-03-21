const axios = require('axios')

exports.handler = async function (event) {
	const { city } = event.queryStringParameters
	const API_KEY = 'f18c5efec7fe93374ccee2f15f9bc2a3'
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`

	try {
		const { data } = await axios.get(url)
		return {
			status: 200,
			body: JSON.stringify(data),
		}
	} catch (error) {
		const { status, statusText, headers, data } = error.response
		return {
			status,
			body: JSON.stringify({ status, statusText, headers, data }),
		}
	}
}
