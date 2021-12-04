import React from "react";
import { useDispatch } from "react-redux";
import {
  ASCENDENTE,
  DESCENDENTE,
  ASCENDENTES,
  DESCENDENTES,
} from "../../constantes/sort";
import { sort, sortScore } from "../../redux/actions";
import "./Order.css";
export default function Order() {
  const dispatch = useDispatch();
  function onSelectAsc(e) {
    if (e.target.value !== "all") {
      dispatch(sort(e.target.value));
    }
  }
  function onSelectChange(e) {
    if (e.target.value !== "all") {
      dispatch(sortScore(e.target.value));
    }
  }
  return (
    <div className="all">
      <div>
        <p>Ordenar alfabéticamente</p>
        <select name="select" onChange={onSelectAsc} className="ABC">
          <option value="all"> Seleccione una opción</option>
          <option value={ASCENDENTE}>A-Z</option>
          <option value={DESCENDENTE}>Z-A</option>
        </select>
      </div>
      <div>
        <p>Ordenar por puntaje</p>
        <select name="select" onChange={onSelectChange} className="score">
          <option value="all">Seleccione una opción</option>
          <option value={ASCENDENTES}>Mayor puntaje</option>
          <option value={DESCENDENTES}>Menor puntaje</option>
        </select>
      </div>
    </div>
  );
}
