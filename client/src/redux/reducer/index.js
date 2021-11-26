import { ASCENDENTE } from "../../constantes/sort";
import {
  FETCH_RECIPES,
  SEARCH_RECIPES,
  SEARCH_RECIPES_ID,
  SORT,
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
      let orderedRecipes = [...state.recipes];
      orderedRecipes = orderedRecipes.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredRecipes: orderedRecipes,
      };
    default:
      return state;
  }
}
