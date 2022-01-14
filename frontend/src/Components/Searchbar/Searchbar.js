import React from 'react'
import './Searchbar.css'

function Searchbar() {
    return (
        <div className='searchBar'> 
            <input type="text" spellCheck="false" placeholder='Search by recipe name..' className='searchBox'/>
            <img src='/searchIcon.svg' style={{"position":"absolute","top":"6px","left":"20px","color":"#a49ebe","width":"25px"}} />
        </div>
    )
}

export default Searchbar
