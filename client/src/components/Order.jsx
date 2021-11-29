import { useDispatch } from "react-redux";
import {
  ASCENDENTE,
  DESCENDENTE,
  ASCENDENTES,
  DESCENDENTES,
} from "../constantes/sort";
import { sort, sortScore } from "../redux/actions";

export default function Order() {
  const dispatch = useDispatch();
  function onSelectAsc(e) {
    dispatch(sort(e.target.value));
  }
  function onSelectChange(e) {
    dispatch(sortScore(e.target.value));
  }
  return (
    <div>
      <p>Ordenar alfabéticamente</p>
      <select name="select" onChange={onSelectAsc}>
        <option value={ASCENDENTE}>ascendente</option>
        <option value={DESCENDENTE}>descendente</option>
      </select>
      <p>Ordenar por puntaje</p>
      <select name="select" onChange={onSelectChange}>
        <option value={ASCENDENTES}>Mayor puntaje</option>
        <option value={DESCENDENTES}>Menor puntaje</option>
      </select>
    </div>
  );
}
