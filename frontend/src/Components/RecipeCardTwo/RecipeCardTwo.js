import React from "react";
import "./RecipeCardTwo.css";

function RecipeCardTwo({recipe}) {
  return (
    <div className="recipeCardTwo">
      <div className="flex">
        <img className="mainImage" src={recipe.imageOne ? recipe.imageOne : 'https://via.placeholder.com/424x278?text=No+Image'} alt={recipe.title} draggable="false" />
        <div className="galleryImages">
          <img src={recipe.imageOne ? recipe.imageOne : 'https://via.placeholder.com/100?text=No+Image'} alt={recipe.title} />
          <img src={recipe.imageTwo ? recipe.imageTwo : 'https://via.placeholder.com/100?text=No+Image'} alt={recipe.title}/>
          <img src={recipe.imageThree ? recipe.imageThree : 'https://via.placeholder.com/100?text=No+Image' } alt={recipe.title} />
        </div>
      </div>
      <div className="recipeCardInfo">
        <div className="flex flex-ac flex-sb">
          <h5 className="recipeTag">{recipe.recipeTime}</h5>
          <p className="recipeTime">
            <i className="fa fa-clock" style={{ marginRight: "5px" }}></i>Cooking Time : {recipe.cookingTime} mins.
          </p>
        </div>
        <p
          style={{
            marginTop: "10px",
            lineClamp: "4",
            display: "-webkit-box",
            "WebkitLineClamp": "4",
            "WebkitBoxOrient": "vertical",
            overflow: "hidden",
            fontSize:"14px",
            fontWeight:"450"
          }}
        >
          {recipe.description}
        </p>
      </div>
    </div>
  );
}

export default RecipeCardTwo;
