import React from 'react'

function IngredientItem({itemName,quanity}) {
    return (
        <div className="ingredientItem flex flex-sb flex-ac">
            <p className="itemName">{itemName}</p>
            <p className="itemQuantity">{quanity}</p>
        </div>
    )
}

export default IngredientItem
