import axios from "axios";
export const FETCH_RECIPES = "FETCH_RECIPES";
export const SEARCH_RECIPES = "SEARCH_RECIPES";
export const SEARCH_RECIPES_ID = "SEARCH_RECIPES_ID";
export const SORT = "SORT";
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

// export function searchRecipesId(recipeId) {
//   return function (dispatch) {
//     axios
//       .get(`http://localhost:3001/api/recipe/${recipeId}`)
//       .then((recipes) => {
//         dispatch({
//           type: SEARCH_RECIPES_ID,
//           payload: recipes.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// }

export function sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}
