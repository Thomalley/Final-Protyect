import React from "react";
import "./RecipeCard.css";
function Recipe({ id, title, diets, image, spoonacularScore }) {
  return (
    <div className="containerCard" key={id}>
      <div className="card">
        <img className="imgCard" src={image} alt="Imagen" />
        <h4 className="title">{title}</h4>
        <h3 className="diets">Type of diets: {diets}</h3>
        <h3 className="scoreCard">Score: {spoonacularScore}</h3>
        <a href={`/Home/${id}`}>leer mas</a>
      </div>
    </div>
  );
}
export default Recipe;
