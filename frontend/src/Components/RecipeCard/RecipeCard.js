import React from 'react'
import './RecipeCard.css'

function RecipeCard() {
    return (
        <div className='recipeCard'>
           <img src="/dosa.jpg" alt="dosa" draggable="false" />
           <div className='recipeCardInfo'>
                <div className='flex flex-ac flex-sb'>
                    <h5 className="recipeTag">Breakfast</h5>
                    <p className="recipeTime"><i className="fa fa-clock" style={{marginRight:"5px"}}></i>60 min.</p>
                </div>
                <h4 style={{marginTop:"10px"}}>Dosa served with sambhar and coconut Chutney</h4>
           </div>
        </div>
    )
}

export default RecipeCard
