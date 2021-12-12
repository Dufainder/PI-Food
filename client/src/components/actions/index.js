import axios from 'axios';
import {GET_RECIPES,
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