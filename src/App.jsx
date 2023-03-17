import { useState } from 'react'
import { useEffect } from 'react'
import { useLazyGetCoordinatesQuery, useLazyGetCityPollutionQuery } from './store/api/pollutionApi'

export default function App() {
  const [city, setCity] = useState('');
  const [getCoordinates, {data: cityCoordinates} ] = useLazyGetCoordinatesQuery()
  const [getCityPollution, {data: cityAirPollution, isSuccess: isPollutionSuccess} ] = useLazyGetCityPollutionQuery()

  useEffect(() => {
    if(cityCoordinates){
      const {lat, lon} = cityCoordinates[0]
      getCityPollution({lat, lon})
      setCity(cityCoordinates[0].name)
    }
  }, [cityCoordinates])

  const {main: airQuality, components: chemicalComponents} = isPollutionSuccess ? cityAirPollution.list[0] : {}
  console.log(airQuality, chemicalComponents)
  return (
  <main>
    { isPollutionSuccess &&
      <section>
       <h2>{city}</h2>
       <h3>{airQuality.aqi}</h3>
       {Object.keys(chemicalComponents).map(component => (
          <p>{component} : {chemicalComponents[component]}</p>
       ))}
     </section>
    }
    <button type='button' onClick={() => getCoordinates('Bogota')}>getCoordinates</button>
  </main>
  
  )
}


