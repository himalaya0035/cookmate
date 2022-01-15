import React from 'react'
import './Menu.css'

function Menu() {
    return (
        <div className='menu'>
            <div className="menuItem">
                <img src="/overviewIcon.svg" alt="Overview icon" width={25} />
                 <h4>Overview</h4>
            </div>
            <div className="menuItem">
                <img src="/recipeIcon.svg" alt="recipe icon" width={25} />
                 <h4>Recipes</h4>
            </div>
            <div className="menuItem">
                <img src="/favoriteIcon.svg" alt="Favourite icon" width={25} />
                 <h4>Favorite</h4>
            </div>
            <div className="menuItem">
                <img src="/logoutIcon.svg" alt="Logout icon" width={25} />
                 <h4>Logout</h4>
            </div>
            <div className="menuItem">
                <img src="/settingsIcon.svg" alt="Settings icon" width={25} />
                 <h4>Settings</h4>
            </div>   
        </div>
    )
}

export default Menu
