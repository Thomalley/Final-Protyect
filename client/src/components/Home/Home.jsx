import React from "react";
import Recipes from "../Recipes/Recipes.jsx";
import { NavBar } from "../NavBar/NavBar";
import Paged from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import "./Home.css";

export default function Home() {
  const recipes = useSelector((state) => state.filteredRecipes);
  return (
    <div className="allHome">
      <NavBar />
      <Recipes />
      <Paged className="paged" recipes={recipes} />
    </div>
  );
}
