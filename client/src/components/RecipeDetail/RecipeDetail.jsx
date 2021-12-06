import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipesId } from "../../redux/actions/index";
import "./RecipeDetail.css";
export default function RecipeDetail(props) {
  let recipeId = useSelector((state) => state.filteredRecipes);
  let dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(searchRecipesId(props.match.params.id));
    })();
  }, []);
  return (
    <div>
      <nav className="navDetail">
        <a href="/Home">Home</a>
      </nav>
      <header className="headerDetail">
        <div className="containerDetail">
          <h3 className="titleDetail">{recipeId.title}</h3>
          <img src={recipeId.image} alt="Imagen" className="imgDetail" />
          <p className="dietsDetal">
            <b>Diets: </b>
            {recipeId.diets}
          </p>
          <p className="dishDetail">
            <b>Dish Types: </b>
            {recipeId.dishTypes}
          </p>
          <p className="scoreDetail">
            <b>Score: </b> {recipeId.spoonacularScore}
          </p>
          <p className="healthDetail">
            <b>Health Score: </b>
            {recipeId.healthScore}
          </p>
          <p className="summaryDetail">
            <b>Summary: </b>
            {recipeId.summary}
          </p>
          <p className="stepsDetail">
            <b>Steps:</b>
            {recipeId.analyzedInstructions &&
            recipeId.analyzedInstructions.length !== 0
              ? recipeId.analyzedInstructions.map((d) =>
                  d.steps.map((c) => c.step)
                )
              : " There's no steps for this recipe"}
          </p>
        </div>
      </header>
    </div>
  );
}
