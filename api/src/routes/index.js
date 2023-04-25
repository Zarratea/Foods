const { Router } = require('express');
const getRecipesByName = require('../controllers/getRecipesByName.js')
const getRecipesById = require('../controllers/getRecipesById.js')
const getDiets = require('../controllers/getDiets.js')
const postRecipes = require('../controllers/postRecipes.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', getRecipesByName);

router.get('/recipes/:idRecipe',getRecipesById );

router.get('/diets',getDiets );

router.post('/recipes',postRecipes);

module.exports = router;
