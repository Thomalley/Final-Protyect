import "./App.css";
import Home from "./components/Home/Home.jsx";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import LandingPage from "./components/LandingPage/LandingPage";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Error from "./components/Error/Error";
import { Route, Switch } from "react-router";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home/Search/:id" component={RecipeDetail} />
        <Route exact path="/Home/AddRecipe" component={AddRecipe} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
