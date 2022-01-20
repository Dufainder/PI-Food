const express = require('express')
const router = express.Router()
const { Diet } = require('../db');

router.get('/', async (req, res) => {
    try{
        let typesDiet = await Diet.findAll();
        // console.log(typesDiet);
        res.status(200).json(typesDiet);
    } catch (error){
        res.status(400).send(error);
    }
})

module.exports = router