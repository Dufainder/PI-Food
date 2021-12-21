import {GET_RECIPES, GET_TYPES, 
    POST_RECIPES, GET_RECIPES_ID, 
    GET_STATE_ID, GET_RECIPES_NAME,  
    FILTER_BY_SEARCHBAR, FILTER_BY_DIETS, 
    FILTER_BY_ORDER, ORDER_BY_SCORE
} from '../components/actions/TypesActions.js'


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
                            
                            
         case GET_RECIPES_NAME:
                        const addRecipe = state.recipesAll
                        const nameRecipes = addRecipe.map(recipe => recipe.name)
                        const newRecipeAdd = action.payload?.map(recipe => { 
                                if (!nameRecipes.includes(recipe.name)){
                                      addRecipe.push(recipe) 
                                      console.log(addRecipe) 
                                    } 
                                  })
                        return {
                                    ...state,
                                    recipes: action.payload,
                                    recipesAll: addRecipe
                                } 


        case FILTER_BY_SEARCHBAR:
                            const filtSearch = state.recipesAll
                            const filtOnState = filtSearch.filter((recipe) => {
                            let name = recipe.name.toLowerCase() 
                                if (name.includes(action.payload)) return recipe
                                    })
                             return{
                                 ...state,
                                 recipes: filtOnState   
                                }
                                
            case ORDER_BY_SCORE:

                    const recypesByScore = action.payload === 'SSc' ? state.recipesAll.sort((a, b) => {
                                   
                    if ((a.score - b.score) < 0) return 1
                        else return -1
                       }) : state.recipesAll.sort((a, b) => {
                                        
                                        if ((a.healthScore - b.healthScore) < 0) return 1
                                        else return -1
                                    })
                                    return{
                                        ...state,
                                        recipes: recypesByScore
                                    } 

         case FILTER_BY_ORDER:
                    const recypesByOrder = action.payload === 'up' ? state.recipesAll.sort((a, b) => {
                             if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                             else return -1
                                }): state.recipesAll.sort((a, b) => {
                                       if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                                       else return -1
                                        })
                     return{
                       ...state,
                      recipes: recypesByOrder
                    }       
                    
             
        case FILTER_BY_DIETS:
            const recipes_All = state.recipesAll

            const filtByDiets = action.payload === 'Filter by type' ? 
            state.recipesAll : recipes_All.filter(recipe => {
                if (recipe.diets.length > 0) {
                    if(recipe.diets.find(element => element === action.payload)) return recipe
                }
                
                if ((action.payload === 'vegetarian') && (recipe.hasOwnProperty('vegetarian')) && (recipe.vegetarian === true)) return recipe
                
                if ((action.payload === 'dairyFree') && (recipe.hasOwnProperty('dairyFree')) && (recipe.dairyFree === true)) return recipe
                })
            return{
                ...state,
                recipes: filtByDiets
            }       

            default: return state
        }
    
    }
    