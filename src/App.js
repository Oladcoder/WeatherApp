import './App.css';
import React, { useState } from 'react';
import Currentweather from './components/Current-weather';
import Start from './components/Start';
import Header from './components/Header';

import OtherProperties from './components/OtherProperties';
import ForecastWeather from './components/Forecast-weather';



function App() {

  const [city, setCity] = useState('kaduna')
  const [currentWeatherData, setCurrentWeatherData] = useState([])
  const [ForecastWeatherData, setFofrecastWeatherData] = useState([])
  const [startFlag, setStartFlag] = useState(true)
  const [currentFlag, setCurrentFlag] = useState(false)

  const selected = (searchData) => {
    setCity(searchData.value)
  }

  function handleSearchChange(searchData) {
    console.log(searchData.value)
    selected(searchData)  
    console.log(city)
    console.log(currentWeatherData)
  }

  const changeStartFlag = () => {
    setStartFlag(prev => !prev)
  }

    

  React.useEffect(() => {
    // get the data from APIs
    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=8f8ae593224d2a213ac424cc4a667b7f&units=metric`)
  const foreCastWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=lagos&appid=79cb1b1e69225fcc4789b208386b1d69&units=metric`)

    Promise.all([currentWeatherFetch, foreCastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeatherData(weatherResponse)
        setFofrecastWeatherData(forecastResponse.list)
        console.log(currentWeatherData)
        console.log(forecastResponse.list)
      })
      .catch((err) => console.log(err))

  }, [city])

  console.log(city)

  

  return (
    <div className="container">
      {
        startFlag 
        ?
        <div>
          <Start
            handleSearchChange={handleSearchChange}
            setCity={setCity}
            city={city}
            start = {changeStartFlag} />
            </div>

            : 
            currentFlag ?
            <div className='forecastContainerApp'> 
              <ForecastWeather 
              data =  {ForecastWeatherData}
              currentFlag = {setCurrentFlag}/>
            </div>

            :

            <div className="containerInner">
              <Header 
              city={city}
              start = {changeStartFlag} />
              <Currentweather
                data={currentWeatherData}
              />
              <OtherProperties
                data={currentWeatherData} />
              <button
              onClick={() => setCurrentFlag(prev => !prev)}
                className='foreCastButton'
                >Check Weather For the Week</button>
            </div> 
             
      }
       </div>
 
  );
}

export default App;
