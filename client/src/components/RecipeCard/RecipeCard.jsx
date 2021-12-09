import React from "react";
import "./RecipeCard.css";
function Recipe({ id, title, diets, image, spoonacularScore }) {
  return (
    <div>
      {id <= 1000000 ? (
        <div className="containerCard" key={id}>
          <div className="card">
            <img className="imgCard" src={image} alt="Imagen" />
            <h4 className="title">{title}</h4>
            <h3 className="diets">Type of diets: {diets}</h3>
            <h3 className="scoreCard">Score: {spoonacularScore}</h3>
            <a href={`/Home/Search/${id}`}>leer mas</a>
          </div>
        </div>
      ) : (
        <div className="containerCard" key={id}>
          <div className="card">
            <h4 className="title">{title}</h4>
            <h3 className="diets">Type of diets: {diets}</h3>
            <h3 className="scoreCard">Score: {spoonacularScore}</h3>
            <a href={`/Home/Search/${id}`}>leer mas</a>
          </div>
        </div>
      )}
    </div>
  );
}
export default Recipe;
