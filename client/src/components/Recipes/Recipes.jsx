import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../../redux/actions";
import Recipe from "../RecipeCard/RecipeCard.jsx";
import "./Recipes.css";
function Recipes() {
  let recipes = useSelector((state) => state.filteredRecipes);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);
  const currentPage = useSelector((state) => state.currentPage);
  const cardsPP = useSelector((state) => state.cardsPP);

  const indexOfLastItem = currentPage * cardsPP;
  const indexOfFirstitem = indexOfLastItem - cardsPP;
  const currentItems = recipes.slice(indexOfFirstitem, indexOfLastItem);

  return (
    <div className="todas">
      {currentItems &&
        currentItems.map((r, id) => (
          <div className="cards" key={id}>
            <Recipe
              id={r.id}
              title={r.title}
              image={r.image}
              diets={r.diets}
              spoonacularScore={r.spoonacularScore}
            />
          </div>
        ))}
    </div>
  );
}
export default Recipes;
