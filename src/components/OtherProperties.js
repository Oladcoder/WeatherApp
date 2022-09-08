import {BsWind, BsSpeedometer} from 'react-icons/bs'
import {FaLeaf, FaRegEye} from 'react-icons/fa'
import {BsSunriseFill} from 'react-icons/bs'
import { BsSunset } from 'react-icons/bs'

export default function OtherProperties (props){

        function padTo2Digits(num) {
                return num.toString().padStart(2, '0');
              }

        function timerMaker(unixTimestamp) {
                const date = new Date(unixTimestamp * 1000)

                const hours = date.getHours();
                const minutes = date.getMinutes();
                const seconds = date.getSeconds();

                const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
                        seconds,
                      )}`;

                return (
                        time
                )
        }

    return (
    <div className='otherProperties'>
        <div> 
<BsSunriseFill 
className='propIcon'/>
<h6>{timerMaker(props.data.sys.sunrise)}</h6>
<p>Sunrise</p>
        </div>

        <div> 
<BsSunset className='propIcon'/>
<h6>{timerMaker(props.data.sys.sunset)}</h6>
<p>Sunset</p> 
        </div>

        <div> 
<FaLeaf className='propIcon'/>
<h6>{props.data.main.humidity} %</h6>
<p>Humidity</p>
        </div>

        <div> 
<FaRegEye className='propIcon'/>
<h6>125</h6>
<p>Visibility</p>
        </div>

        <div> 
<BsWind className='propIcon'/>
<h6>{props.data.wind.speed} meter/sec</h6>
<p>Wind Speed</p>
        </div>

        <div> 
<BsSpeedometer className='propIcon'/>
<h6>{props.data.main.pressure} hPa</h6>
<p>Pressure</p>
        </div>
    </div>

    )
}