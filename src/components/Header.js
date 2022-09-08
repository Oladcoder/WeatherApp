import React, {useState} from "react";
import Search from "./Search";
import Altsearch from "./Altsearch";
import {FaMapMarkerAlt, FaChevronLeft} from "react-icons/fa"

export default function Header (props){
    const d = new Date()
    const hour = d.getHours()
    const minutes = d.getMinutes()
    const day = d.getDate()
    const month = d.getMonth()
    const year = d.getFullYear()

    const time = `${hour}: ${minutes}`
    const date = `   ${day} / ${month} / ${year}`

    return (
        <div className="header">
            <div className="placeTime">
                <div>
                <h4 className="cityName">{props.city}</h4>
                <p> {time},</p>
                <p>  {date}</p>
                </div>
                <FaMapMarkerAlt 
                onClick={() => props.start()}/>
            </div>
            
            </div>
    
    )
}