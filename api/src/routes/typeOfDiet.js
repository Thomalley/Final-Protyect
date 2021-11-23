const { default: axios } = require("axios");
const { Router } = require("express");
const { TypeOfDiet } = require("../db");
const router = Router();
const { apiKey } = process.env;
router.get("/", async (req, res, next) => {
  try {
    // let newArray = [
    //   "Gluten Free",
    //   "Ketogenic",
    //   "Vegetarian",
    //   "Lacto-Vegetarian",
    //   "Ovo-Vegetarian",
    //   "Vegan",
    //   "Pescetarian",
    //   "Paleo",
    //   "Primal",
    //   "Low FODMAP",
    //   "Whole 30",
    // ];

    // newArray.forEach(async (c) => {
    //   await TypeOfDiet.create({ name: c });
    // });

    // let results = await TypeOfDiet.findAll({});

    // res.send(results);

    const dietApi = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=40&addRecipeInformation=true`
    );
    const filteredDiets = dietApi.data.results.map((d) => {
      return {
        name: d.diets,
      };
    });
    filteredDiets.forEach((e) =>
      e.name.map((c) => {
        TypeOfDiet.findOrCreate({
          where: { name: c },
        });
      })
    );
    const datos = await TypeOfDiet.findAll({});
    res.send(datos);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
