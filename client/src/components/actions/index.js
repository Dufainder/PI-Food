import axios from 'axios';
import {GET_RECIPES, GET_TYPES, GET_DATABASE, 
    GET_STATE_ID, GET_RECIPES_NAME, 
    FILTER_BY_SEARCHBAR, FILTER_BY_ORDER, 
    ORDER_BY_SCORE, FILTER_BY_DIETS
} from './TypesActions.js'

const {REACT_APP_SERVER} = process.env;


 export function getRecipesAll(){
    return function(dispatch){
             axios.get(`${REACT_APP_SERVER}/recipes`)
            .then((json) => {
            return dispatch({
                type: GET_RECIPES,
                payload: json.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function getTypes() {
    return function (dispatch) {
        try {
            axios.get(`${REACT_APP_SERVER}/types`)
            .then(types => 
                 dispatch({
                type: GET_TYPES,
                payload: types.data
                })
            )
        } catch (error) {
            console.log(error);
        }
    }
}


export function getDatabase() {
    return async function (dispatch) {
        try {
            let dataBase = await axios.get(`${REACT_APP_SERVER}/recipes/dates`)
            return dispatch({
                type: GET_DATABASE,
                payload: dataBase.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function postRecipes(payload){
    console.log(payload)
    return async function(dispatch) {
        try {
            console.log(payload)
            const response = await axios.post(`${REACT_APP_SERVER}/recipe`, payload)
            console.log(response)
            return response

        }catch(error){
            console.log(error);
        }
    }
}


export function searchId(payload) {
    return {
        type: GET_STATE_ID,
        payload: payload
    }
}

export function searchBarName(payload) {
    return {
        type: FILTER_BY_SEARCHBAR,
        payload: payload
    }
}

export function getRecipesName(name) {
    return async function (dispatch) {
        try {
            const recipes = await axios.get(`${REACT_APP_SERVER}/recipes?name=${name}`)
            return dispatch({
                type: GET_RECIPES_NAME,
                payload: recipes.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function getFilterByDiets(payload){
    return {
        type: FILTER_BY_DIETS,
        payload: payload
    }
}

export function filterByOrder(payload){
    return {
        type: FILTER_BY_ORDER,
        payload: payload
    }
}

export function orderByScore(payload){
    return{
        type: ORDER_BY_SCORE,
        payload: payload
    }
}