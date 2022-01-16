import React,{useState,useEffect} from "react";
import "./RecipePage.css";
import RecipeCardTwo from "../../Components/RecipeCardTwo/RecipeCardTwo";
import HeaderWithBackButton from "../../Components/HeaderWithBackButton/HeaderWithBackButton";
import IngredientItem from "../../Components/IngredientItem/IngredientItem";
import axios from 'axios'
import { useParams } from "react-router-dom";

function RecipePage() {
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState([])
  const {id} = useParams();
  useEffect(() => {
    
    async function fetchRecipe(){
      const {data} = await axios.get('http://127.0.0.1:8000/api/recipes/' + id)
      setRecipe(data)
      setInstructions(data.instructions)
      setIngredients(data.ingredients)
    }
    
    fetchRecipe();
    return () => {
    
    }
  }, [id])
  
  return (
    <div>
      <div className="recipePageBody">
        <HeaderWithBackButton
          textHeading={recipe.title}
        />
        <p style={{position:"absolute",top:"30px",right:"40px",color:"black"}}>Recipe By : <span style={{color:"#fb9300",fontWeight:"bold"}}>{recipe.authorName}</span> </p>
        <div className="flex" style={{ marginTop: "40px" }}>
          <div
            className="recipeInfoAndIngredients"
            style={{ marginRight: "30px" }}
          >
            <RecipeCardTwo recipe = {recipe} />
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
                  {ingredients.map((ingredient) => <IngredientItem key={ingredient.id} itemName={ingredient.name} quanity={ingredient.quantity} />)}
                </div>
              </div>
              <div className="noOfPeople flex center">
                <img src="/peopleEatingIcon.svg" alt="" width={100} />
                <h4>No. of Serving</h4>
                <h4>x{recipe.noOfPeople}</h4>
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
              {instructions.map(instruction => <p key={instruction.id}>{instruction.text}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
