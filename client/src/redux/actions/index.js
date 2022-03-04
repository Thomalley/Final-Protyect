import axios from "axios";
export const FETCH_RECIPES = "FETCH_RECIPES";
export const SEARCH_RECIPES = "SEARCH_RECIPES";
export const SEARCH_RECIPES_ID = "SEARCH_RECIPES_ID";
export const SORT = "SORT";
export const SORT_SCORE = "SORT_SCORE";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const GET_DIETS = "GET_DIETS";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_BY_SCORE = "FILTER_BY_SCORE";
export function fetchRecipes() {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/api/recipe`)
      .then((recipes) => {
        dispatch({
          type: FETCH_RECIPES,
          payload: recipes.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function searchRecipes(name) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/api/recipe?name=${name}`)
      .then((recipes) => {
        dispatch({
          type: SEARCH_RECIPES,
          payload: recipes.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function searchRecipesId(recipeId) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/api/recipe/${recipeId}`)
      .then((recipes) => {
        dispatch({
          type: SEARCH_RECIPES_ID,
          payload: recipes.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}
export function sortScore(order) {
  return {
    type: SORT_SCORE,
    payload: order,
  };
}

export function filterByDiet(payload) {
  return {
    type: FILTER_BY_DIET,
    payload,
  };
}

export function filterByScore(payload) {
  return {
    type: FILTER_BY_SCORE,
    payload,
  };
}

export function getDiets() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/typeOfDiet")
      .then((diets) => {
        return dispatch({
          type: GET_DIETS,
          payload: diets.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function changePage(payload) {
  return { type: "CHANGE_PAGE", payload };
}

export function postRecipe(input) {
  return async function (dispatch) {
    try {
      const newRecipe = await axios({
        method: "post",
        url: "http://localhost:3001/api/recipe",
        data: {
          title: input.title,
          summary: input.summary,
          spoonacularScore: parseInt(input.spoonacularScore),
          healthScore: parseInt(input.healthScore),
          steps: input.steps,
          diets: input.diets,
        },
      });
      return dispatch({
        type: "CREATE_RECIPE",
        payload: newRecipe.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
