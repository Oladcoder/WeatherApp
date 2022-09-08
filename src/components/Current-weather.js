export default function Currentweather (props) {
return (
    <div className="currentWeather">
        <img alt="imagepic" src={`icons/${props.data.weather[0].icon}.png`}/>
        <div className="currentWeatherText">
        <h1>{Math.round(props.data.main.temp)}°C</h1>
        <p>{props.data.weather[0].main}</p>
        <p>{props.data.weather[0].description}</p>
        </div>
        
    </div>
)
}