import "./App.css";
import Order from "./components/order";
import Recipes from "./components/recipes";
import SearchBar from "./components/searchBar";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <Order />
      <Recipes />
    </div>
  );
}

export default App;
