const {Diets , Recipe} = require('../db');


const postRecipes=async (req, res) => {
    let {
        name,
        image,
        health_score,
        summary,
        steps,
        diets,
    }=req.body;
    let recipesCreate=await Recipe.create({
        name,
        image,
        health_score,
        summary,
        steps,
    });
    let dietsBd= await Diets.findAll({
        where:{ name : diets }
    });
    recipesCreate.addDiets(dietsBd);
    res.send('Personaje Creado Con Exito');
};

module.exports=postRecipes