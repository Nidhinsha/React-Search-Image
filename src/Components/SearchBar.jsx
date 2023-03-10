import './SearchBar.css'
import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {

    const [term,setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    }

    const handleChange=(event)=>{
        setTerm(event.target.value)
    }
    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="">Enter search Element</label>
            <input
                onChange={handleChange}
                value={term} />
            </form>
            
           
        </div>
    )
}

export default SearchBar
