
export default function EachForecast (props){

  const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));


  
    return (
        <div className = "eachForecast">

            <h4>{props.id}</h4>
            <div className="imgAndTemp">
            <img alt="imagepic" src={`icons/${props.data.weather[0].icon}.png`}/>
            <h1>{Math.round(props.data.main.temp)}°C</h1>
            </div>
            <h2>{props.data.weather[0].main}</h2>
            <h4> {props.data.weather[0].description}</h4>
        <div className="currentWeatherText">
            <div className="minMaxContainer">
      <div className="minAndMax">
        <h5>Max:{Math.round(props.data.main.temp_max)}°C </h5>
        <h5>Min: {Math.round(props.data.main.temp_max)}°C</h5>
        
      </div>
      <div className="minAndMax">
      <h5>Humiidity:{props.data.main.humidity} % </h5>
        <h5>Pressure: {props.data.main.pressure} hPa</h5>
      </div>
      </div>

        </div>
        </div>
    )
}


