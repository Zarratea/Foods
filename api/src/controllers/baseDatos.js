const {Diets , Recipe} = require('../db');

const baseDatos=async () =>{
    const recetasBd=await Recipe.findAll({
        include:{
        model : Diets,                                    
        attributes : ['name'],
        through: {
            attributes : [],
        },
        }
        });
        const dietsArray = recetasBd.map(recipe => recipe.dataValues.diets.map(diet => diet.name)).flat();
        recetasBd.forEach(recipe => {
            recipe.diets = dietsArray;
        });
        const recetasActualizadas = recetasBd.map(recipe => {
            return {
                ...recipe.dataValues,
                diets: dietsArray,
            };
        });
    
        return recetasActualizadas;
};

module.exports=baseDatos;