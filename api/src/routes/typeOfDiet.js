const { default: axios } = require("axios");
const { Router } = require("express");
const { TypeOfDiet } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let newArray = [
      "gluten free",
      "vegan",
      "primal",
      "whole 30",
      //      "ketogenic",vegetarian,       "lacto-vegetarian", "ovo-vegetarian",       "pescetarian",       "paleo",       "low FODMAP", NO FILTRAN NI ESTAN EN LAS DIETAS DE LAS RECETAS
    ];
    newArray.forEach((d, index) => {
      d &&
        TypeOfDiet.findOrCreate({
          where: {
            name: d,
            id: index + 1,
          },
        });
    });
    const diets = await TypeOfDiet.findAll({});
    res.send(diets);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
