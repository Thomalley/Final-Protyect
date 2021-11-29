import { ASCENDENTE, ASCENDENTES } from "../../constantes/sort";

import {
  FETCH_RECIPES,
  SEARCH_RECIPES,
  SEARCH_RECIPES_ID,
  SORT,
  SORT_SCORE,
} from "../actions";

const initialState = {
  recipes: [],
  filteredRecipes: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        filteredRecipes: action.payload,
      };
    case SEARCH_RECIPES:
      return {
        ...state,
        filteredRecipes: action.payload,
      };
    case SEARCH_RECIPES_ID:
      return {
        ...state,
        filteredRecipes: action.payload,
      };
    case SORT:
      let orderedRecipes = [...state.filteredRecipes];
      orderedRecipes = orderedRecipes.sort((a, b) => {
        if (a.title < b.title) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.title > b.title) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredRecipes: orderedRecipes,
      };
    case SORT_SCORE:
      let orderedScore = [...state.filteredRecipes];
      orderedScore = orderedScore.sort((a, b) => {
        if (a.spoonacularScore < b.spoonacularScore) {
          return action.payload === ASCENDENTES ? 1 : -1;
        }
        if (a.spoonacularScore > b.spoonacularScore) {
          return action.payload === ASCENDENTES ? -1 : 1;
        }
        return 0;
      });
      return {
        ...state,
        filteredRecipes: orderedScore,
      };
    default:
      return state;
  }
}
