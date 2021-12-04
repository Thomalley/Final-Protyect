import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByDiet, getDiets } from "../../redux/actions";
export default function Filter() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const handleOnChange = (e) => {
    dispatch(filterByDiet(e.target.value));
  };
  return (
    <div>
      <p>Filtrar por tipo de dieta:</p>
      <select id="types" onChange={handleOnChange}>
        <option value="all">Diets</option>
        {diets &&
          diets.map((d) => (
            <option key={d.id} value={d.name}>
              {d.name}
            </option>
          ))}
      </select>
    </div>
  );
}
