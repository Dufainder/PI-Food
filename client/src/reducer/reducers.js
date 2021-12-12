import {GET_RECIPES} from '../components/actions/TypesActions.js'


const inicialState ={

    recipes: [],
    recipesAll: [],
    types: [],
    detail: []
}

export const rootReducer = (state = inicialState, action) => {
    console.log('entro');
    console.log(action.type);
    switch (action.type) {
         
        case GET_RECIPES: 

            console.log(action.payload)
            return {
                ...state,
                recipes: action.payload,
                recipesAll: action.payload
            }

            default: return state
        }
    
    }
    