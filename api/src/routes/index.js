const { Router } = require("express");
const recipeRoute = require("./recipe");
const typeOfDietRoute = require("./typeOfDiet");
const router = Router();

router.use("/recipe", recipeRoute);
router.use("/typeOfDiet", typeOfDietRoute);
module.exports = router;
