import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { searchRecipesId } from "../redux/actions/index";
import { useSelector } from "react-redux";
export default function RecipeDetail() {
  let recipeId = useSelector((state) => state.filteredRecipes);
  let dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(searchRecipesId(id));
  }, []);
  return (
    <div>
      <h3>{recipeId.title}</h3>
      <img src={recipeId.image} alt="Imagen" />
      <p>
        <b>Diets: </b>
        {recipeId.diets}
      </p>
      <p>
        <b>Dish Types: </b>
        {recipeId.dishTypes}
      </p>
      <p>
        <b>Summary: </b>
        {recipeId.summary}
      </p>
      <p>
        <b>Score: </b>: {recipeId.spoonacularScore}
      </p>
      <p>
        <b>Health Score: </b>
        {recipeId.healthScore}
      </p>
      <p>
        <b>Steps:</b>
        {recipeId.analyzedInstructions
          ? recipeId.analyzedInstructions.map((d) => d.steps.map((c) => c.step))
          : ""}
      </p>
    </div>
  );
}
