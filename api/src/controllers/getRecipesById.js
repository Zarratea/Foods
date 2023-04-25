const axios = require('axios');
const baseDatos = require('../controllers/baseDatos.js');

const getRecipesById = async (req , res) => {
    const API_Key='?apiKey=f0aaf8f8aea846e2ad3a697e1a04c176';
    const {idRecipe}=req.params;
    const recetasBd=await baseDatos();
    let recipesId = await recetasBd.filter(el => el.id == idRecipe);                                               
    if(recipesId.length){                                                    
        res.writeHead(200,{ "Content-Type": "application/json" });
        res.end(JSON.stringify(recipesId));
    }else{
        await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information${API_Key}`)
        .then((response) =>{
        const apiInfo={
                name:response.data.title,
                id:response.data.id,
                image:response.data.image,
                health_score:response.data.healthScore,
                summary:response.data.summary,
                steps:response.data.analyzedInstructions.map(el => el.steps),
                diets:response.data.diets,
                
            };
            return apiInfo
        })
        .then((apiInfo) => {
            res.writeHead(200,{ "Content-Type": "application/json" })
            res.end(JSON.stringify(apiInfo));
        })
        .catch((error)=>{
            res.writeHead(500,{ "Content-Type": "text/plain" })
            res.end('No se encontro la receta con ese ID')
        });
    };
   
};
module.exports = getRecipesById;