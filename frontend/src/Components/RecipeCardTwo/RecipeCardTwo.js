import React from "react";
import "./RecipeCardTwo.css";

function RecipeCardTwo() {
  return (
    <div className="recipeCardTwo">
      <div className="flex mainImage">
        <img src="/dosa.jpg" alt="dosa" draggable="false" />
        <div className="galleryImages">
          <img src="/dosa.jpg" alt="" />
          <img src="/dosa.jpg" alt="" />
          <img src="/dosa.jpg" alt="" />
        </div>
      </div>
      <div className="recipeCardInfo">
        <div className="flex flex-ac flex-sb">
          <h5 className="recipeTag">Breakfast</h5>
          <p className="recipeTime">
            <i className="fa fa-clock" style={{ marginRight: "5px" }}></i>Cooking Time : 60
            mins.
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ea
          illo, magni dolore debitis autem magnam excepturi libero, explicabo
          reiciendis molestias nostrum iste et incidunt quas blanditiis illum, a
          vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Obcaecati assumenda architecto deleniti quas nostrum praesentium debitis 
          illo est, quibusdam quaerat.
        </p>
      </div>
    </div>
  );
}

export default RecipeCardTwo;
