const express = require('express')
const router = express.Router()
require('dotenv').config();
const { Recipe, Diet, Op } = require('../db');

router.post('/', async (req, res) => {
    let{
        name,
        summary,
        score,
        healthScore,
        image,
        steps,
        diets
    } = req.body

    try{
        let recipeCreate = await Recipe.create({ 
            name,
            summary,
            score,
            healthScore,
            image,
            steps,
        })

        let dietDB = await Diet.findAll({ 
            where: {name: diets}
        })

        if (!name) return res.status(400).send({error: 'Debe ingresar el name para la receta'});
        if (!summary) return res.status(400).send({error: 'Debe ingresar un summary del receta'});
        // console.log(recipeCreate);
        // console.log(dietDB);
        
        recipeCreate.addDiet(dietDB);
        res.send('Succesfull');

    }catch(error){
        res.status(400).send(error);
    }
})



module.exports = router



