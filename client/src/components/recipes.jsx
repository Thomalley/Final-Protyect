import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/actions";
import Recipe from "./recipe";

export default function Recipes() {
  let recipes = useSelector((state) => state.filteredRecipes);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {recipes.map((r) => {
        return (
          <Recipe title={r.title} image={r.image} diets={r.diets} key={r.id} />
        );
      })}
    </div>
  );
}
