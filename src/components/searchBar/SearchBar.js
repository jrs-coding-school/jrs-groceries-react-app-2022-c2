import React, { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {

    const [searchParam, setSearchParam] = useState('')
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault()
        navigate('/home/search/' + searchParam)
    }

    return (
        <form onSubmit={handleSearch} className="search-root">
            <input
                type="text"
                value={searchParam}
                onChange={e => {
                    setSearchParam(e.target.value)
                }}
                className='search-bar'
                placeholder='Search for milk, chicken, apples, etc...' />
        </form>

    )
}
