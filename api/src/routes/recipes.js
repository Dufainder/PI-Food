const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config();
const { Recipe, Diet, Op } = require('../db');
const {YOUR_API_KEY, spoonacularURL} = process.env;

//!                   1
const getApiInfo = async () => {
    try
    {
        const resAxios = await axios.get(`${spoonacularURL}/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);
        const { results } = resAxios.data ;
    
        
        if (results.length > 0) {

            let response = await results?.map((result) => {
                return {
                    name: result.title,
                    vegetarian: result.vegetarian,
                    vegan: result.vegan,
                    glutenFree: result.glutenFree,
                    dairyFree: result.dairyFree, 
                    image: result.image, 
                    idApi: result.id, 
                    score: result.spoonacularScore,
                    healthScore: result.healthScore,
                    types: result.dishTypes?.map(element => element),  
                    diets: result.diets?.map(element => element), 
                    summary:result.summary, 
                    steps: (result.analyzedInstructions[0] && result.analyzedInstructions[0].steps?result.analyzedInstructions[0].steps.map(item=>item.step).join(" \n"):'')
                }        
            })

        return response;
    } 
    }catch (e) {
        return ([])
    }
}

//!                   2
const getDBInfo = () => {
        try{
            const dataDB = Recipe.findAll({ 
                include:{
                    model: Diet,
                    attributes: ['name'],
                    through:{
                        attributes: []
                    }
                }
            }).then(r => r ).then(data => 
            data?.map(recipe => {
                return {
                    id: recipe.id,
                    name: recipe.name,
                    summary: recipe.summary,
                    score: recipe.score,
                    healthScore: recipe.healthScore,
                    image: recipe.image,
                    steps: recipe.steps,
                    diets: recipe.diets?.map(diet => diet.name),
                }
            })
            )
            return dataDB
        }catch(err) {
            return ('error')
        }
    }

//!                   3
    const getAllInfo = async () => {
            try{
                const apiInfo = await getApiInfo()
                const bdInfo = await getDBInfo()
                const infoTotal = apiInfo.concat(bdInfo)
                return infoTotal
            }catch(err) {
                return ('error')
            }
         }

//!                   4
const getApiByName = async (name) => {
           
            try{
                const resAxios = await axios.get(`${spoonacularURL}/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${YOUR_API_KEY}`);
                const { results } = resAxios.data;
            
                let response = results?.map((result) => {
                    return {
                        name: result.title,
                        vegetarian: result.vegetarian,
                        vegan: result.vegan,
                        glutenFree: result.glutenFree,
                        dairyFree: result.dairyFree, 
                        image: result.image, 
                        idApi: result.id, 
                        score: result.spoonacularScore,
                        healthScore: result.healthScore,
                        types: result.dishTypes?.map(element => element),  
                        diets: result.diets?.map(element => element), 
                        summary:result.summary, 
                        steps: (result.analyzedInstructions[0] && result.analyzedInstructions[0].steps?result.analyzedInstructions[0].steps.map(item=>item.step).join(" \n"):'')
                    }
                })
            return response
            }catch(err) {
                return ('error')
            }
        }

//!                   5
        const getDBByName = async (name) => {
            try{
                const DBInfo = await getDBInfo();
                const filtByName = DBInfo.filter(recipe => recipe.name.includes(name))
                return filtByName
            }catch(err){
                return err
            } 
        }
   //!                   6     
        const getInfoByName = async (name) => {
            try{
                const apiByName = await getApiByName(name)
                const DBByName = await getDBByName(name)
                const infoTotal = apiByName.concat(DBByName)
                return infoTotal
            }catch(err) {
                return ('error')
            }
        }     

//^              1
router.get('/', async (req, res) => {
    
        const { name } = req.query
    
        if (name) {
      
            const infoByName = await getInfoByName(name)
            if (infoByName !== 'error'){
                infoByName.length > 0 ? res.json(infoByName) : res.status(400).json([{ name: 'not found any recipes'}]);
            }else{
                res.status(404).json([{ name: 'API Error'}])
            }
    
        }else{
    
            const allDate = await getAllInfo() 
            if (allDate !== 'error'){  
                res.json(allDate);
            }else{
                res.status(404).json({message:'Error en la búsqueda de datos'})
            }
    
        }
    });
//^              2

    router.get('/dates', async (req, res) => {
        const allDateBD = await getDBInfo()
        if (allDateBD !== 'error') {
            res.json(allDateBD)
        } else {
            res.status(404).json({message: 'error in database '})
        }
    })


//^                3
    router.put('/', async (req, res) => {
        const {id, summary} = req.query
        let resul
        try{
            resul = await Recipe.update(
                {summary},
                {where: {id: id}},
            )
      
        }catch{
            resul = null
        }
        if(resul === 1) res.status(200).send('success')
        else res.status(404).send('reject')
    })   


//^              4

    router.get('/:id', async (req, res) => {
        const { id } = req.params;
        
        try{
            if (id.length > 12){
                const dataDB = await Recipe.findByPk(id,{
                    include: {
                    model: Diet,
                    atributes: ["name"],
                    through: {
                        attributes: [],
                        },
                    },
                });
                if(dataDB){
                const obj = {
                    id: dataDB.id,
                    name: dataDB.name,
                    summary: dataDB.summary,
                    score: dataDB.score,
                    healthScore: dataDB.healthScore,
                    image: dataDB.image,
                    steps: dataDB.steps,
                    diets: dataDB.diets?.map(diet => diet.name)
                }
                    res.json(obj)
                }else{
                    console.log('bd')
                    const objerr = {
                        name: 'Recipe not Found',
                        summary: 'None',
                        score: 0,
                        healthScore: 0,
                        image: 'https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg',
                        steps: 'none',
                        diets: []
                    }
                    res.json(objerr)
                }
            }else{
    
                const resAxios = await axios.get(`${spoonacularURL}/recipes/${id}/information?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);
    
                let obj = {};
    
                obj = {
                    name: resAxios.data.title, 
                    vegetarian: resAxios.data.vegetarian,
                    vegan: resAxios.data.vegan,
                    glutenFree: resAxios.data.glutenFree,
                    dairyFree: resAxios.data.dairyFree,
                    image: resAxios.data.image, 
                    idApi: resAxios.data.id, 
                    score: resAxios.data.spoonacularScore, 
                    healthScore: resAxios.data.healthScore, 
                    diets: resAxios.data.diets?.map(element => element),types: resAxios.data.dishTypes?.map(element => element), 
                    summary:resAxios.data.summary, 
                    steps: resAxios.data.instructions}
                
                if (obj){
                    res.json(obj);
                }else{
    
                    let objerrors
    
                    objerrors = {
                        name: 'Recipe not Found', 
                        image: 'https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg',  
                        score: 0, 
                        healthScore: 0, 
                        diets: [], 
                        summary:'none', 
                        steps: 'none'}
    
                    res.json(objerrors)
                }
            }
        }catch(e){
            let objerr
        
            objerr = {name: 'only enter numbers less than 100000 or UUID code', 
            image: 'https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg',  
            score: 0, 
            healthScore: 0, 
            diets: [], 
            summary:'none', 
            steps: 'none'}
    
        res.json(objerr)
        }
    })
    

module.exports = router

