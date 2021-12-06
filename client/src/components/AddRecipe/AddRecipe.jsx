import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../redux/actions";
import "./AddRecipe.css";

export function validate(input) {
  let errors = {};
  if (!input.title) {
    errors.title = "Username is required";
  }
  if (!input.summary) {
    errors.summary = "Summary is required";
  }
  if (!input.score) {
    errors.score = "Score is required";
    if (input.score < 0 || input.score > 100) {
      errors.score = "Only numbers from 0 to 100";
    }
  }
  if (!input.health) {
    errors.health = "Health is required";
    if (input.health < 0 || input.health > 100) {
      errors.health = "Only numbers from 0 to 100";
    }
  }
  if (!input.steps) {
    errors.steps = "Steps are required";
  }

  return errors;
}

export default function AddRecipe() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});
  const [value, setValue] = useState({
    title: "",
    summary: "",
    score: "",
    health: "",
    steps: "",

    diets: [],
  });
  const [temporal, setTemporal] = useState([]);
  useEffect(() => {
    dispatch(getDiets());
  }, []);
  useEffect(() => {
    if (temporal.length) {
      let total = diets.reduce((acc, el) => {
        if (temporal.includes(el.name) === true) {
          acc.push(el.id);
        }
        return acc;
      }, []);
      setValue({ ...value, diets: total });
    }
  }, [temporal]);

  const handleOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(
      validate({
        ...value,
        [e.target.name]: e.target.value,
      })
    );
    if (Object.keys(errors).length === 0) {
      dispatch(postRecipe(value));
    }
    setValue({
      title: "",
      summary: "",
      score: "",
      health: "",
      steps: "",
      diets: [],
    });
  };

  const handleSelect = (e) => {
    if (temporal.includes(e.target.value)) {
      alert("This diet has alredy been selected");
    } else {
      let arreglo = [];
      const alonso = arreglo.push(e.target.value);
      setTemporal([...temporal, arreglo]);
    }
    console.log(e.target.value);
  };
  console.log("acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", temporal);
  return (
    <div>
      <nav className="navForm">
        <a href="/Home">Home</a>
      </nav>
      <form onSubmit={handleSubmit} className="input">
        <label> Title: </label>
        <input
          className={errors.title && "danger"}
          type="text"
          name="title"
          onChange={handleOnChange}
          value={value.title}
        />
        {errors.title && <p className="danger">{errors.title}</p>}
        <label> Summary: </label>
        <input
          clasName={errors.summary && "danger"}
          type="text"
          name="summary"
          onChange={handleOnChange}
          value={value.summary}
        />
        {errors.summary && <p className="danger">{errors.summary}</p>}
        <label> Score: </label>
        <input
          className={errors.score && "danger"}
          type="text"
          name="score"
          onChange={handleOnChange}
          value={value.score}
        />
        {errors.score && <p className="danger">{errors.score}</p>}
        <label> Health score: </label>
        <input
          className={errors.health && "danger"}
          type="text"
          name="health"
          onChange={handleOnChange}
          value={value.health}
        />
        {errors.health && <p className="danger">{errors.health}</p>}
        <label> Steps: </label>
        <input
          className={errors.steps && "danger"}
          type="text"
          name="steps"
          onChange={handleOnChange}
          value={value.steps}
        />
        {errors.steps && <p className="danger">{errors.steps}</p>}
        <p> Choose the type of diet: </p>
        <select onChange={(e) => handleSelect(e)}>
          {diets &&
            diets.map((d) => (
              <option value={d.name} key={d.id}>
                {d.name}
              </option>
            ))}
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
