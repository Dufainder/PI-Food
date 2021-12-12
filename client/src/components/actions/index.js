import axios from 'axios';
import {GET_RECIPES, GET_RECIPES_ID,  GET_TYPES
} from './TypesActions.js'



 export function getRecipesAll(){
    return function(dispatch){
             axios.get('http://localhost:3001/recipes')
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
            axios.get(`http://localhost:3001/types`)
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


export function getRecipesId(id) {
    return async function (dispatch) {
        try {
            let detail = await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch({
                type: GET_RECIPES_ID,
                payload: detail.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}







// export function postRecipes(payload){
//     console.log(payload)
//     return async function(dispatch) {
//         try {
//             console.log(payload)
//             const response = await axios.post('/recipe', payload)
//             console.log(response)
//             return response

//         }catch(error){
//             console.log(error);
//         }
//     }
// }