import React from "react";
import Button from "../../Components/Button/Button";
import "./RecipePage.css";
import { useNavigate } from "react-router-dom";
import RecipeCardTwo from "../../Components/RecipeCardTwo/RecipeCardTwo";

function RecipePage() {
  const navigate = useNavigate();
  const backPage = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="recipePageBody">
        <div className="flex flex-sb flex-ac" style={{ marginBottom: "20px" }}>
          <div className="flex flex-ac">
            <Button
              onClickFunction={backPage}
              text={"Back"}
              icon={"fa fa-arrow-left"}
            />
            <h3>Dosa served with sambhar and coconut chutney</h3>
          </div>
          <h3>Himalaya Gupta</h3>
        </div>
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
                  <div className="ingredientItem flex flex-sb flex-ac">
                    <p className="itemName">Rice</p>
                    <p className="itemQuantity">250 Grams</p>
                  </div>
                  <div className="ingredientItem flex flex-sb flex-ac">
                    <p className="itemName">Rice</p>
                    <p className="itemQuantity">250 Grams</p>
                  </div>
                  <div className="ingredientItem flex flex-sb flex-ac">
                    <p className="itemName">Rice</p>
                    <p className="itemQuantity">250 Grams</p>
                  </div>
                  <div className="ingredientItem flex flex-sb flex-ac">
                    <p className="itemName">Rice</p>
                    <p className="itemQuantity">250 Grams</p>
                  </div>
                  <div className="ingredientItem flex flex-sb flex-ac">
                    <p className="itemName">Rice</p>
                    <p className="itemQuantity">250 Grams</p>
                  </div>
                  <div className="ingredientItem flex flex-sb flex-ac">
                    <p className="itemName">Rice</p>
                    <p className="itemQuantity">250 Grams</p>
                  </div>
                  <div className="ingredientItem flex flex-sb flex-ac">
                    <p className="itemName">Rice</p>
                    <p className="itemQuantity">250 Grams</p>
                  </div>
                  <div className="ingredientItem flex flex-sb flex-ac">
                    <p className="itemName">Rice</p>
                    <p className="itemQuantity">250 Grams</p>
                  </div>
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
