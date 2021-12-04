import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/actions/index";
import "./Pagination.css";
export default function Pagination({ recipes }) {
  const pageNumbers = [];
  const itemsPerPage = useSelector((state) => state.cardsPP);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  const total = recipes.length;
  for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    let len = pageNumbers.length;
    if (len < currentPage) {
      if (len === 0) len = 1;
      dispatch(changePage(len));
    }
  });

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          className="pagbtn"
          key={number}
          onClick={() => dispatch(changePage(number))}
          value={number}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
