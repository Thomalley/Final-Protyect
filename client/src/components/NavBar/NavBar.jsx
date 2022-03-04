import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Order from "../Order/Order";
import Filter from "../Filter/Filter";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterByScore } from "../../redux/actions";

export function NavBar() {
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    dispatch(filterByScore());
  };
  return (
    <div>
      <nav className="navAll">
        <SearchBar className="search" />
        <Order />
        <button onClick={handleOnClick}>Filter by score</button>
        <Filter />
        <div className="navs">
          <NavLink className="navLink" to="/">
            Landing Page
          </NavLink>
          <NavLink className="navLink" to="/Home/AddRecipe">
            New Recipe
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
