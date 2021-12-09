const { Router } = require("express");
const { Recipe, TypeOfDiet } = require("../db");
const router = Router();
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const { apiKey } = process.env;
router.get("/", async (req, res, next) => {
  try {
    const { name } = req.query;
    let recipesApi;
    let recipesDb;
    if (name) {
      try {
        recipesDb = await Recipe.findAll({
          where: {
            title: name,
          },
          include: TypeOfDiet,
        });
        if (recipesDb.length !== 0) {
          let filteredRecipesDB = recipesDb.map((e) => {
            return {
              id: e.id,
              title: e.title,
              summary: e.summary,
              spoonacularScore: e.spoonacularScore,
              healthScore: e.healthScore,
              steps: e.steps,
              diets: e.TypeOfDiets.map((a) => a.name),
            };
          });
          return res.send(filteredRecipesDB);
        } else {
          recipesApi = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${apiKey}&number=100&addRecipeInformation=true`
          );
          let filteredRecipesApi = recipesApi.data.results.map((c) => {
            return {
              id: c.id,
              title: c.title,
              summary: c.summary,
              spoonacularScore: c.spoonacularScore,
              healthScore: c.healthScore,
              steps: c.analyzedInstructions.map((d) =>
                d.steps.map((c) => c.step)
              ),
              diets: c.diets,
              image: c.image,
            };
          });
          res.send(filteredRecipesApi);
        }
      } catch (error) {
        res.send("No existe ninguna receta con el nombre ingresado");
      }
    } else {
      recipesApi = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true`
      );
      recipesDb = await Recipe.findAll({
        include: TypeOfDiet,
      });
      Promise.all([recipesApi, recipesDb]).then((r) => {
        const [recipesApi, recipesDb] = r;

        let filteredRecipesApi = recipesApi.data.results.map((c) => {
          return {
            id: c.id,
            title: c.title,
            summary: c.summary,
            spoonacularScore: c.spoonacularScore,
            healthScore: c.healthScore,
            steps: c.analyzedInstructions.map((d) =>
              d.steps.map((c) => c.step)
            ),
            diets: c.diets,
            image: c.image,
          };
        });
        let filteredRecipesDB = recipesDb.map((e) => {
          return {
            id: e.id,
            title: e.title,
            summary: e.summary,
            spoonacularScore: e.spoonacularScore,
            healthScore: e.healthScore,
            steps: e.steps,
            diets: e.TypeOfDiets.map((a) => a.name),
          };
        });
        const data = [...filteredRecipesApi, ...filteredRecipesDB];
        res.send(data);
      });
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:idReceta", async (req, res, next) => {
  try {
    const { idReceta } = req.params;
    let recipe;
    if (typeof idReceta === "string" && idReceta.length > 8) {
      recipe = await Recipe.findByPk(idReceta, { include: TypeOfDiet });
      return res.send(recipe);
    } else {
      const result = await axios.get(
        `https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${apiKey}&number=100`
      );
      recipe = result.data;
    }
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const {
      title,
      summary,
      spoonacularScore,
      healthScore,
      steps,
      diets,
      // image,
    } = req.body;
    const newRecipe = await Recipe.create({
      title,
      // image,
      summary,
      spoonacularScore,
      healthScore,
      steps,
    });

    await newRecipe.addTypeOfDiets(diets);

    res.json(newRecipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
