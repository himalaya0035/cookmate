import React from "react";
import "./RecipePage.css";
import RecipeCardTwo from "../../Components/RecipeCardTwo/RecipeCardTwo";
import HeaderWithBackButton from "../../Components/HeaderWithBackButton/HeaderWithBackButton";
import IngredientItem from "../../Components/IngredientItem/IngredientItem";

function RecipePage() {
  return (
    <div>
      <div className="recipePageBody">
        <HeaderWithBackButton
          textHeading={"Dosa Served with Sambhar and Coconut Chutney"}
        />
        <div className="flex" style={{ marginTop: "40px" }}>
          <div
            className="recipeInfoAndIngredients"
            style={{ marginRight: "30px" }}
          >
            <RecipeCardTwo />
            <div className="flex flex-as">
              <div className="ingredients">
                <h3 style={{ marginBottom: "15px", color: "#6250a6" }}>
                  <i className="fa fa-receipt"></i> Ingredients
                </h3>
                <div className="ingredientItem flex flex-sb flex-ac">
                  <h4 className="itemName">Name</h4>
                  <h4 className="itemQuantity" style={{ marginRight: "15px" }}>
                    Quantity
                  </h4>
                </div>
                <div className="ingredientsList">
                  <IngredientItem itemName={"Rice"} quanity={"250 Grams"} />
                  <IngredientItem itemName={"Rice"} quanity={"250 Grams"} />
                  <IngredientItem itemName={"Rice"} quanity={"250 Grams"} />
                  <IngredientItem itemName={"Rice"} quanity={"250 Grams"} />
                  <IngredientItem itemName={"Rice"} quanity={"250 Grams"} />
                </div>
              </div>
              <div className="noOfPeople flex center">
                <img src="/peopleEatingIcon.svg" alt="" width={100} />
                <h4>No. of Serving</h4>
                <h4>x2</h4>
              </div>
            </div>
          </div>
          <div className="instructions">
            <div className="flex flex-ac" style={{ marginBottom: "20px" }}>
              <div className="flex flex-ac">
                <img
                  src="/instructionIcon.svg"
                  alt="Instructions icon"
                  style={{ marginRight: "15px" }}
                  width={30}
                />
                <h3 style={{ color: "#fb9300" }}>Instructions</h3>
              </div>
            </div>
            <div className="instructionsList">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, iste iusto quas eligendi corporis id eius corrupti
                temporibus velit? Molestias harum voluptatibus veritatis
                explicabo ut velit deserunt, saepe sit commodi?
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipommodi?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, iste iusto quas eligendi corporis id eius corrupti
                temporibus velit? Molestias harum voluptatibus veritatis
                explicabo ut velit deserunt, saepe sit commodi?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, iste iusto quas eligendi corporis id eius corrupti
                temporibus velit? Molestias harum voluptatibus veritatis
                explicabo ut velit deserunt, saepe sit commodi?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, iste iusto quas eligendi corporis id eius corrupti
                temporibus velit? Molestias harum voluptatibus veritatis
                explicabo ut velit deserunt, saepe sit commodi?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, iste iusto quas eligendi corporis id eius corrupti
                temporibus velit? Molestias harum voluptatibus veritatis
                explicabo ut velit deserunt, saepe sit commodi?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, iste iusto quas eligendi corporis id eius corrupti
                temporibus velit? Molestias harum voluptatibus veritatis
                explicabo ut velit deserunt, saepe sit commodi?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, iste iusto quas eligendi corporis id eius corrupti
                temporibus velit? Molestias harum voluptatibus veritatis
                explicabo ut velit deserunt, saepe sit commodi?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, iste iusto quas eligendi corporis id eius corrupti
                temporibus velit? Molestias harum voluptatibus veritatis
                explicabo ut velit deserunt, saepe sit commodi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
