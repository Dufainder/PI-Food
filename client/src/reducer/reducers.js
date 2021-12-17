import {GET_RECIPES, GET_TYPES, POST_RECIPES, GET_RECIPES_ID, GET_STATE_ID} from '../components/actions/TypesActions.js'


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

            case GET_TYPES:
                return{
                    ...state,
                    types: action.payload
                }
            case POST_RECIPES:
                    return {
                        ...state,
                    }

            case GET_RECIPES_ID:
                        console.log(action.payload)
                        return {
                            ...state,
                            detail: action.payload
                        }  
                        
            case GET_STATE_ID:
                            const filtId = state.recipesAll
                            const Idfind = filtId.find((recipe) => {
                                if(typeof action.payload === 'number'){
                                    if (recipe.idApi === action.payload) return recipe
                                } else {
                                    if (recipe.id === action.payload) return recipe
                                }
                            })
                            return{
                                ...state,
                                detail: Idfind
                            }       

            default: return state
        }
    
    }
    