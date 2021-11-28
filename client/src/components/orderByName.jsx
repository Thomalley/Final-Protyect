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
  function onSelectChange(e) {
    if (e.target.value === ASCENDENTE || e.target.value === DESCENDENTE) {
      dispatch(sort(e.target.value));
    } else {
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      dispatch(sortScore(e.target.value));
    }
  }

  return (
    <div>
      <select name="select" onChange={onSelectChange}>
        <option value={ASCENDENTE}>Alfabéticamente ascendente</option>
        <option value={DESCENDENTE}>Alfabéticamente descendente</option>
        <option value={ASCENDENTES}>Mayor puntaje</option>
        <option value={DESCENDENTES}>Menor puntaje</option>
      </select>
    </div>
  );
}
