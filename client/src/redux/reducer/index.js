import { ASCENDENTE, ASCENDENTES } from "../../constantes/sort";

import {
  FETCH_RECIPES,
  SEARCH_RECIPES,
  SEARCH_RECIPES_ID,
  SORT,
  SORT_SCORE,
  FILTER_BY_DIET,
  GET_DIETS,
  CHANGE_PAGE,
} from "../actions";

const initialState = {
  recipes: [],
  filteredRecipes: [],
  diets: [],
  currentPage: 1,
  cardsPP: 9,
  error: false,
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        filteredRecipes: action.payload,
      };
    case SEARCH_RECIPES:
      if (action.payload.length === 0) {
        return {
          ...state,
          filteredRecipes: action.payload,
          error: true,
        };
      } else {
        return {
          ...state,
          filteredRecipes: action.payload,
        };
      }
    case SEARCH_RECIPES_ID:
      return {
        ...state,
        filteredRecipes: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case FILTER_BY_DIET:
      const recetas = state.recipes;
      console.log(recetas);
      const filteredR =
        action.payload === "all"
          ? recetas
          : recetas.filter((e) =>
              e.diets.includes(action.payload.toLowerCase())
            );
      console.log(filteredR);
      if (filteredR.length > 0) {
        return {
          ...state,
          filteredRecipes: filteredR,
        };
      } else {
        return {
          ...state,
          filteredRecipes: recetas,
        };
      }
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
