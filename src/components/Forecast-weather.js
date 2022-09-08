import EachForecast from "./EachForecast"
import { FaArrowLeft } from "react-icons/fa"

export default function ForecastWeather (props){
    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  

    const lists = props.data.splice(0,7)
    const displayedLists = lists.map((day, key) => {
        return (
            <EachForecast 
            data = {day}
            id = {forecastDays[key]}/>
        )
    })
    console.log(lists)
    return (
        <div className='forecastContainer'>
                       <button
                       onClick={() => props.currentFlag(prev => !prev)}><FaArrowLeft/></button>
                       <h2> WEATHER FOR NEXT 7 DAYS</h2>   
            <div className="forecastInner"> 
{displayedLists}
</div>
</div>
    )
}