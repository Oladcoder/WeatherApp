import React from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, GEO_API_URL } from './api';
import {FaSearch} from "react-icons/fa"
import {FaArrowRight} from 'react-icons/fa'

export default function  Search (props){

    const [search, setSearch] = React.useState(null)

   
    function handleChange (searchData){
        props.handleSearchChange(searchData)
        setSearch(searchData)
        props.setCity(searchData.value)
        console.log(props.city)
       
    }

const loadOptions = (inputValue) => {
        return (
            fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response =>{
                return {
                    options: response.data.map((city) => {
                        return {
                            value:city.name, 
                            label: `${city.name}, ${city.country}`
                        }
                    })
                }
            }
            )
            .catch(err => console.error(err))
        )
    }




    return (
        <div className='searchBarDiv'>
        <AsyncPaginate 
        placeholder = 'Search for City'
        value={search}
        debounceTimeout = {600}
        onChange = {handleChange}
        loadOptions = {loadOptions}
        className ="searchBar"/>

<button className='submit' onClick={() => props.start(prev => !prev)}> <FaArrowRight/> </button>
        </div>
    )
}