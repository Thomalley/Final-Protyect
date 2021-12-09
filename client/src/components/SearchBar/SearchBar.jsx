import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../../redux/actions";
import { useLocation } from "react-router";
import "./SearchBar.css";
export default function SearchBar() {
  const { pathname } = useLocation();
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();
  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchRecipes(search));
  }

  function onInputChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      {pathname.toLowerCase() === "/home" ? (
        <div>
          <form onSubmit={onSubmit}>
            <input type="text" onChange={onInputChange} value={search} />
            <input type="submit" value="buscar" />
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
