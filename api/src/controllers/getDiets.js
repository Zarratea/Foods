const axios = require('axios');
const {Diets} = require('../db');

const getDiets= async (req,res) => {
    const API_Key='?apiKey=f0aaf8f8aea846e2ad3a697e1a04c176';
    const URL='https://api.spoonacular.com/recipes/complexSearch';
    const dietsApi= await axios.get(`${URL}${API_Key}&addRecipeInformation=true&number=100`)
    //const dietsApi= await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`);
    let diets=dietsApi.data.results;
    let aux=[];
    for (let i = 0; i < diets.length; i++) {
        if(diets[i].vegetarian && !aux.includes('vegetarian'))aux.push('vegetarian');
        if(diets[i].vegan && !aux.includes('vegan'))aux.push('vegan');
        if(diets[i].glutenFree && !aux.includes('gluten free'))aux.push('gluten free');
        for (let j = 0; j < diets[i].diets.length; j++) {
            if(!aux.includes(diets[i].diets[j])){
                aux.push(diets[i].diets[j]);
            };
        };
    };
    aux.forEach(el => {
        Diets.findOrCreate({
            where:{name:el}
        });
    });
    console.log(aux);
    const allDiets= await Diets.findAll();
    res.writeHead(200,{ "Content-Type": "application/json" });
    res.end(JSON.stringify(allDiets));
}

module.exports=getDiets;