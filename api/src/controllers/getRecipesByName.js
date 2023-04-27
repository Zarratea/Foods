const axios = require('axios');
const baseDatos = require('../controllers/baseDatos.js');

const recipesApi=async () =>{
    const API_Key='?apiKey=f0aaf8f8aea846e2ad3a697e1a04c176';
    const URL='https://api.spoonacular.com/recipes/complexSearch';
    const response= await axios.get(`${URL}${API_Key}&addRecipeInformation=true&number=80`);
    //const response= await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`);
    const recipe = await response.data.results.map(el => {
        const diets = el.diets;
        if (el.vegetarian === true) {
            diets.push('vegetarian');
        }
        return {
            name: el.title,
            id: el.id,
            image: el.image,
            health_score: el.healthScore,
            diets: diets,
            summary: el.summary,
            steps: el.analyzedInstructions.map(el => el.steps),
        }
    });
    return recipe
};

const getRecipesByName= async(req , res) => {
    const namee=req.query.name;
    const recetasBd=await baseDatos();
    const recetasApi=await recipesApi();;
    const recetasAll=await recetasBd.concat(recetasApi);
    if(namee) {
        let recetaName= await recetasAll.filter(el => el.name.toLowerCase().includes(namee.replace(/['"]+/g, '').toLowerCase()));
        if(recetaName.length){
            res.writeHead(200,{ "Content-Type": "application/json" });
            res.end(JSON.stringify(recetaName));
        }else{
            res.writeHead(500,{ "Content-Type": "text/plain" });
            res.end('No se encontro la receta con ese Name');
        }

    }else{
        res.writeHead(200,{ "Content-Type": "application/json" })
        res.end(JSON.stringify(recetasAll));
    };
    
};
module.exports=getRecipesByName;