const { default: axios } = require("axios");
const { Router } = require("express");
const { TypeOfDiet } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let newArray = [
      "Gluten Free",
      "Ketogenic",
      "Vegetarian",
      "Lacto-Vegetarian",
      "Ovo-Vegetarian",
      "Vegan",
      "Pescetarian",
      "Paleo",
      "Primal",
      "Low FODMAP",
      "Whole 30",
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
