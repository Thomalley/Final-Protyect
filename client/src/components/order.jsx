import { useDispatch } from "react-redux";
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort";
import { sort } from "../redux/actions";

export default function Order() {
  const dispatch = useDispatch();
  function onSelectChange(e) {
    dispatch(sort(e.target.value));
  }
  return (
    <div>
      <select name="select" onChange={onSelectChange}>
        <option value={ASCENDENTE}>ascendente</option>
        <option value={DESCENDENTE}>descendente</option>
      </select>
    </div>
  );
}
