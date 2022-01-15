import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import HeaderWithBackButton from "../../Components/HeaderWithBackButton/HeaderWithBackButton";
import "./CreateRecipePage.css";

function CreateRecipePage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [noOfPeople, setNoOfPeople] = useState("");
  const [firstImage, setFirstImage] = useState(
    "https://via.placeholder.com/400x180?text=Upload+Recipe+Image+(Required)"
  );
  const [secondImage, setSecondImage] = useState(
    "https://via.placeholder.com/200"
  );
  const [thirdImage, setThirdImage] = useState(
    "https://via.placeholder.com/200"
  );
  const instructionsArray = [
    {
      id: 1,
      value: "",
    },
  ];

  const ingredientsArray = [
    {
      id: 1,
      itemName: "",
      quantity: "",
    },
  ];

  const [instructions, setInstructions] = useState(instructionsArray);
  const [ingredients, setIngredients] = useState(ingredientsArray);

  const addInstruction = () => {
    setInstructions((s) => {
      return [
        ...s,
        {
          value: "",
        },
      ];
    });
  };

  const addIngredient = () => {
    setIngredients((s) => {
      return [
        ...s,
        {
          itemName: "",
          quantity: "",
        },
      ];
    });
    console.log(ingredients);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setInstructions((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };

  const handleChangeTwo = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setIngredients((s) => {
      const newArr = s.slice();
      newArr[index].itemName = e.target.value;
      return newArr;
    });
  };

  const handleChangeThree = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setIngredients((s) => {
      const newArr = s.slice();
      newArr[index].quantity = e.target.value;
      return newArr;
    });
  };

  const showFirstImage = (e) => {
    console.log(e.target.value);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(reader.result);
        setFirstImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const showSecondImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setSecondImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const showThirdImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setThirdImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <div className="createRecipePagebody">
        <HeaderWithBackButton textHeading={"Create Your Own Recipe !"} />
        <div className="createRecipeForm flex">
          <div className="recipeInfo">
            <input
              required
              type="text"
              spellCheck="false"
              value={title}
              onInput={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Recipe Title"
            />
            <br />
            <div className="imageCollectionUpload">
              <label htmlFor="firstDishImage">
                <div className="firstImage">
                  <img src={firstImage} className="firstImage" alt="" />
                </div>
              </label>
              <div>
                <label htmlFor="secondDishImage">
                  <div className="secondImage">
                    <img src={secondImage} className="secondImage" alt="" />
                  </div>
                </label>
                <label htmlFor="thirdDishImage">
                  <div className="thirdImage">
                    <img src={thirdImage} className="secondImage" alt="" />
                  </div>
                </label>
              </div>
            </div>
            <input
              type="file"
              required
              onChange={(e) => showFirstImage(e)}
              accept="image/*"
              name=""
              id="firstDishImage"
              style={{ visibility: "none", display: "none" }}
            />
            <input
              type="file"
              onChange={(e) => showSecondImage(e)}
              accept="image/*"
              name=""
              id="secondDishImage"
              style={{ visibility: "none", display: "none" }}
            />
            <input
              type="file"
              onChange={(e) => showThirdImage(e)}
              accept="image/*"
              name=""
              id="thirdDishImage"
              style={{ visibility: "none", display: "none" }}
            />
            <textarea
              required
              value={desc}
              onInput={(e) => setDesc(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="10"
              spellCheck="false"
              placeholder="A Short Description of the recipe"
            ></textarea>
            <div className="flex">
              <div className="addIngredientsList">     
                    {ingredients.map((item, i) => {
                    return (
                      <div className="flex">
                        <input
                          onChange={handleChangeTwo}
                          value={item.itemName}
                          id={i}
                          type="text"
                          style={{ width: "175px",marginRight:"10px" }}
                          placeholder="Item Name"
                        />
                        <input
                          onChange={handleChangeThree}
                          value={item.quantity}
                          id={i}
                          type="text"
                          style={{ width: "175px" }}
                          placeholder="Quantity"
                        />
                      </div>
                    );
                  })}
              
                <Button
                  icon={"fa fa-plus"}
                  onClickFunction={addIngredient}
                  text={"Add Ingredient"}
                />
              </div>
              <div className="aisehi">
                <input
                  type="number"
                  required
                  value={noOfPeople}
                  onInput={(e) => setNoOfPeople(e.target.value)}
                  placeholder="No Of Servings"
                  spellCheck="false"
                />
                <input
                  type="number"
                  required
                  value={cookingTime}
                  onInput={(e) => setCookingTime(e.target.value)}
                  placeholder="Cooking Time (in mins.)"
                  min={0}
                  spellCheck="false"
                />
              </div>
            </div>
          </div>

















          <div className="addInstructionAndIngredients">
            {instructions.map((item, i) => {
              return (
                <>
                  <textarea
                    onChange={handleChange}
                    value={item.value}
                    id={i}
                    placeholder="Write Instruction"
                    resize="none"
                    style={{ height: "80px" }}
                  />{" "}
                  <br />
                </>
              );
            })}
            <Button
              icon={"fa fa-plus"}
              onClickFunction={addInstruction}
              text={"Add Instruction"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipePage;
