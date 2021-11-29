import SearchBar from "./SearchBar";
import Recipes from "./Recipes";
import Order from "./Order";
export function Home() {
  return (
    <div>
      <SearchBar />
      <Order />
      <Recipes />
    </div>
  );
}

export default Home;
