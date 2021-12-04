import "./App.css";
import Home from "./components/Home/Home.jsx";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import LandingPage from "./components/LandingPage/LandingPage";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import { Route } from "react-router";
function App() {
  return (
    <div className="App">
      <Route exact path="/Home" component={Home} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Home/:id" component={RecipeDetail} />
      <Route exact path="/Home/AddRecipe" />
    </div>
  );
}

export default App;
