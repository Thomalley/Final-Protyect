const { Router } = require("express");
const { Recipe, TypeOfDiets } = require("../db");
const router = Router();
const axios = require("axios");
const { apiKey } = process.env;
router.get("/", async (req, res, next) => {
  try {
    const { name } = req.query;
    let recipesApi;
    let recipesDb;
    if (name) {
      recipesApi = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${apiKey}&number=100&addRecipeInformation=true`
      );
      recipesDb = await Recipe.findAll({
        where: {
          title: name,
        },
      });
      Promise.all([recipesApi, recipesDb]).then((r) => {
        const [recipesApi, recipesDb] = r;
        console.log(recipesApi);
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
        const varias = [...filteredRecipesApi, ...recipesDb];
        // el rest operator concatena ambos arrays para devolverme todo en una sola request y el ".data.results" hace que se pueda iterar sobre todos los resultados que se estan filtrando por la query
        if (varias.length === 0) {
          return res
            .status(404)
            .send("No se encontró ninguna receta con el parametro ingresado");
        } else {
          res.send(varias);
        }
      });
    } else {
      recipesApi = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true`
      );
      recipesDb = await Recipe.findAll({
        include: TypeOfDiets,
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
        const data = [...filteredRecipesApi, ...recipesDb];
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
      recipe = await Recipe.findByPk(idReceta, { include: TypeOfDiets });
      console.log(recipe);
      res.send(recipe);
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
    const { title, summary, spoonacularScore, healthScore, steps, dietsID } =
      req.body;
    const newRecipe = await Recipe.create({
      title,
      summary,
      spoonacularScore,
      healthScore,
      steps,
    });
    await newRecipe.addTypeOfDiets(dietsID);
    res.send(newRecipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
