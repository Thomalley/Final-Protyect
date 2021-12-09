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
  if (!input.spoonacularScore) {
    errors.spoonacularScore = "Score is required";
  }
  if (input.spoonacularScore < 0 || input.spoonacularScore > 100) {
    errors.spoonacularScore = "Only numbers from 0 to 100";
  }
  if (!input.healthScore) {
    errors.healthScore = "Health is required";
  }
  if (input.healthScore < 0 || input.healthScore > 100) {
    errors.healthScore = "Only numbers from 0 to 100";
  }
  if (!input.steps) {
    errors.steps = "Steps are required";
  }
  // if (!input.image) {
  //   errors.steps = "image is required";
  // }
  return errors;
}

export default function AddRecipe() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});
  const [value, setValue] = useState({
    title: "",
    summary: "",
    spoonacularScore: "",
    healthScore: "",
    steps: "",
    // image: "",
    diets: [],
  });
  const [temporal, setTemporal] = useState([]);
  useEffect(() => {
    dispatch(getDiets());
  }, []);
  useEffect(() => {
    if (temporal.length > 0) {
      let total = diets.reduce((acc, el) => {
        if (temporal.includes(el.name)) {
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
    setErrors(
      validate({
        ...value,
        [e.target.name]: e.target.value,
      })
    );
  };

  function handleDelete(e) {
    let filteredD = temporal.filter((t) => t !== e);
    setTemporal(filteredD);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(postRecipe(value));
    }
    setTemporal([]);
    setValue({
      title: "",
      summary: "",
      spoonacularScore: "",
      healthScore: "",
      steps: "",
      // image: "",
      diets: [],
    });
  };

  const handleSelect = (e) => {
    if (temporal.includes(e.target.value)) {
      alert("This diet has alredy been selected");
    } else {
      setTemporal([...temporal, e.target.value]);
    }
  };

  return (
    <div>
      <nav className="navForm">
        <a href="/Home">Home</a>
      </nav>
      <div className="containerForm">
        <form onSubmit={handleSubmit} className="inputForm">
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
            className={errors.summary && "danger"}
            type="text"
            name="summary"
            onChange={handleOnChange}
            value={value.summary}
          />
          {errors.summary && <p className="danger">{errors.summary}</p>}
          <label> Score: </label>
          <input
            className={errors.score && "danger"}
            type="number"
            name="spoonacularScore"
            onChange={handleOnChange}
            value={value.spoonacularScore}
          />
          {errors.spoonacularScore && (
            <p className="danger">{errors.spoonacularScore}</p>
          )}
          <label> Health score: </label>
          <input
            className={errors.healthScore && "danger"}
            type="number"
            name="healthScore"
            onChange={handleOnChange}
            value={value.healthScore}
          />
          {errors.healthScore && <p className="danger">{errors.healthScore}</p>}
          <label> Steps: </label>
          <input
            className={errors.steps && "danger"}
            type="text"
            name="steps"
            onChange={handleOnChange}
            value={value.steps}
          />
          {errors.steps && <p className="danger">{errors.steps}</p>}
          {/* <label> image: </label>
        <input
          className={errors.image && "danger"}
          type="text"
          name="image"
          onChange={handleOnChange}
          value={value.image}
        />
        {errors.image && <p className="danger">{errors.image}</p>} */}
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
        {temporal.map((t) => (
          <div>
            <p>{t}</p>
            <button onClick={() => handleDelete(t)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}
