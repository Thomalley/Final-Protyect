import "./App.css";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router";
function App() {
  return (
    <div className="App">
      <Route exact path="/Home" component={Home} />
      <Route exact path="/" component={LandingPage} />
      <Route path="Home/:id" component={RecipeDetail} />
    </div>
  );
}

export default App;
