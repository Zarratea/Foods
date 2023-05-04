const {Diets , Recipe} = require('../db');
const baseDatos = require('../controllers/baseDatos.js');


const postRecipes=async (req, res) => {
    try {
        const baseDedatos= await baseDatos()
        let {
            name,
            image,
            health_score,
            summary,
            steps,
            diets,
        }=req.body;
        const filtro=baseDedatos.filter(el=>el.name==name)
        if(filtro!=true){
            let recipesCreate=await Recipe.create({
                name,
                image,
                health_score,
                summary,
                steps,
            });
            let dietsBd= await Diets.findAll({
                where:{ name : diets }
            })
            recipesCreate.addDiets(dietsBd);
            res.send('Personaje Creado Con Exito');
        }
    } catch (error) {
        res.writeHead(500,{ "Content-Type": "text/plain" })
        res.end('Error inesperado al crear la base de datos')
    }
};

module.exports=postRecipes