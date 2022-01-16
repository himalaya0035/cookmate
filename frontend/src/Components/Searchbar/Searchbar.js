import React, { useState } from 'react'
import './Searchbar.css'
import SearchResults from './SearchResults'


function Searchbar() {
    const [searchResults, setSearchResults] = useState([])
    const [active, setActive] = useState(false)
    const allRecipes = JSON.parse(window.localStorage.getItem('allRecipies'))
    const performLiveSearch = (e) => {
        if (e.target.value.length > 0){
            setSearchResults(allRecipes.filter((recipe) => recipe.title.toLowerCase().includes(e.target.value.toLowerCase())))
            setActive(true)
        }else{
            setSearchResults([])
            setActive(false)
        }
    }

    return (
        <div className='searchBar'> 
            <input type="text" onInput={performLiveSearch} spellCheck="false" placeholder='Search by recipe name..' className='searchBox'/>
            <img src='/searchIcon.svg' style={{"position":"absolute","top":"9px","left":"20px","color":"#a49ebe","width":"25px"}} />
            <SearchResults active={active} searchResults={searchResults} />
        </div>
    )
}

export default Searchbar
