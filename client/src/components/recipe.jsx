import { Link } from "react-router-dom";
import React from "react";
export default function Recipe({ id, title, diets, image, spoonacularScore }) {
  return (
    <div>
      <Link to={`/home/${id}`}>
        <h3>{title}</h3>
      </Link>
      <img src={image} alt="Imagen" />
      <h4>Type of diet: {diets}</h4>
      <h4>Score: {spoonacularScore}</h4>
    </div>
  );
}
