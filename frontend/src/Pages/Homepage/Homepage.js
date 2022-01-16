import React, {useEffect,useState} from "react";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Homepage.css";
import axios from 'axios'

function Homepage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function fetchRecipes(){
      const {data} = await axios.get('http://127.0.0.1:8000/api/recipes/')
      setRecipes(data)
      console.log(recipes)
    }
    fetchRecipes();
    return () => {
      
    }
    
  }, [])

  return (
    <div>
        <div className="homepageBody">
          <div className="topRecipesOfTheDay">
            <h3 style={{ marginBottom: "20px" }}>Top Recipes</h3>
            <div className="recipeContainer">
              {recipes.map(recipe => <RecipeCard recipe={recipe} />)}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Homepage;

{/* <div className="topRecipesOfTheDay">
<h3 style={{ marginBottom: "20px" }}>Based on the type of food you like</h3>
<div className="recipeContainer">
  <Swiper
    spaceBetween={15}
    slidesPerView={4.2}
    onSlideChange={() => ""}
    onSwiper={(swiper) => ""}
  >
   
  </Swiper>
</div>
</div> */}