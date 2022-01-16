import React from 'react'
import './RecipeCard.css'
import {Link} from 'react-router-dom'

function RecipeCard({recipe}) {
  
    return (
        <Link to={`recipe/${recipe.id}`} style={{textDecoration:"none",color:"black"}} className='recipeCard'>
           <img src={recipe.imageOne} alt="dosa" draggable="false" />
           <div className='recipeCardInfo'>
                <div className='flex flex-ac flex-sb'>
                    <h5 className="recipeTag">{recipe.recipeTime}</h5>
                    <p className="recipeTime"><i className="fa fa-clock" style={{marginRight:"5px"}}></i>{recipe.cookingTime} min.</p>
                </div>
                <h4 style={{marginTop:"10px"}}>{recipe.title}</h4>
           </div>
        </Link>
    )
}

export default RecipeCard
