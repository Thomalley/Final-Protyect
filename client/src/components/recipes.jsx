import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/actions";
import Recipe from "./Recipe";

export default function Recipes() {
  let recipes = useSelector((state) => state.filteredRecipes);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);
  return (
    <div>
      {recipes.map((r) => {
        return (
          <Recipe
            id={r.id}
            title={r.title}
            image={r.image}
            diets={r.diets}
            key={r.id}
            spoonacularScore={r.spoonacularScore}
          />
        );
      })}
    </div>
  );
}
