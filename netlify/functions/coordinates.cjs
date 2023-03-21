const axios = require('axios')

exports.handler = async function (event) {
	const { city } = event.queryStringParameters
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.API_KEY}`

	try {
		const { data } = await axios.get(url)
		return {
			statusCode: 200,
			body: JSON.stringify(data),
		}
	} catch (error) {
		const { status, statusText, headers, data } = error.response
		return {
			statusCode: status,
			body: JSON.stringify({ status, statusText, headers, data }),
		}
	}
}
