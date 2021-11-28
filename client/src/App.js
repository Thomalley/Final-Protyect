import "./App.css";
import Order from "./components/orderByName";
import Recipes from "./components/recipes";
import SearchBar from "./components/searchBar";
import RecipeDetail from "./components/recipeDetail";
import { Route, Switch } from "react-router";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <Switch>
        <Route exact path="/">
          <Order />
          <Recipes />
        </Route>
        <Route path="/:id">
          <RecipeDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
