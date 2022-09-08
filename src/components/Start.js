import PlacesAutocomplete, {geocodeByAddress, getLatlng} from "react-places-autocomplete"
import React , {useState} from 'react'
import {FaExclamationTriangle} from 'react-icons/fa'
import Search from "./Search";

export default function Start (props){
    return (
      <div className="startContainer">
        <h1 onClick={props.start}>WELCOME</h1>
        <p>Fill in a <u className="danger">valid</u> city name</p>
        <Search  
        handleSearchChange = {props.handleSearchChange}
        setCity = {props.setCity}
        city = {props.city}
        start = {props.start}/>
        <p><FaExclamationTriangle className=" danger"/> Make sure You have a steady internet connection and input a valid city name </p>
             </div>
    );
            
}