import  { 
    FormContainerSVG, 
    InputName, 
    InputSummary, 
    InputHealthScore, 
    InputScore, 
    SelectDiets, 
    InputSteps,
    ButtonSubmit, 
    P_button,
    DivDietasOn,
    DivDietas,
    ButtonCloseDiets,
    DivSubmitContainer,
}from './FormStyled.jsx';

import React from 'react';
import { useNavigate }  from 'react-router-dom'
import { getTypes, postRecipes, getDatabase } from '../actions/index.js';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'




// Validar que el campo nombre de mi objeto este completado antes de 
// transformarlo a json y mandarlo por body

function validate(input){
    let errors = {}
    if(!input.name) {
        errors.name = 'Name is require'
    }
    return errors
}





function Form() {

    const dispatch = useDispatch()
    const history = useNavigate()
    const type = useSelector((state) => state.types)     
    const allState = useSelector((state) => state.recipesAll)
    const [error, setError] = useState({})
    // console.log(allState);
    
  
    const [input, setInput] = useState({
        name: '',
        summary: '',
        score: 0, 
        healthScore: 0,
        image: 'https://vegano.club/wp-content/uploads/2019/11/comidas-veganas.jpg',
        steps: '',
        diets: []
    })

    useEffect(() => {
        dispatch(getTypes())
     }, [])
 
    async function handleSubmit(evt){
        evt.preventDefault()
        await dispatch(postRecipes(input))
        setInput({
            name: '',
            summary: '',
            score: 0, 
            healthScore: 0,
            image: 'https://vegano.club/wp-content/uploads/2019/11/comidas-veganas.jpg',
            steps: '',
            diets: []
        })
        const result = await dispatch(getDatabase())
        console.log(result)
        history('/home')
    }
   

    function handleSelect(evt){
        if(!input.diets.includes(evt.target.value)){
            setInput({
                ...input,
                diets: [...input.diets, evt.target.value]
            })
        }
        console.log(input)
    }


    function handleChange(evt){
        setInput({
            ...input,
            [evt.target.name]: evt.target.value
        })
        setError(validate({
            ...input,
            [evt.target.name]:evt.target.value
        }))
        if(allState.find(recipe => recipe.name.toLowerCase() === evt.target.value.toLowerCase())){
            setError({
                ...input,
                [evt.target.name]: 'Recipe is found'
            })
        }
        // console.log(input)
    }


    
    function handleNumber(evt){
        try{
            const parsValue = parseInt(evt.target.value)
            if ((Number.isInteger(parsValue)) && (parsValue >= 0) && (parsValue <= 99)){
                setInput({
                    ...input,
                    [evt.target.name]: parsValue
                })
            }
        }catch{
            console.log('error de parseo')
        }
        // console.log(input)
    }


    
    function handleDelete(evt){
        setInput({
            ...input,
            diets: input.diets.filter(diet => diet !== evt)
        })
    }

 console.log(input);

    return (
        
            <>
                 <FormContainerSVG/>
                 <form onSubmit={(evt) => handleSubmit(evt)}>

                       <InputName 
                        type="text"
                        value = {input.name}
                        name = 'name' 
                        placeholder='Agregar Nombre...'
                        onChange = {evt => handleChange(evt)}
                       />


                       <InputSummary  
                        type="text"
                        value = {input.summary}
                        name = 'summary'
                        placeholder='Escribe aqui el Summary...'
                        onChange = {evt => handleChange(evt)}
                        />

                       <InputScore
                        type="number"
                        value = {input.score}
                        name = 'score'
                        onChange = {evt => handleNumber(evt)}
                       />

                       <InputHealthScore
                        className= "controls"
                        type="number"
                        value = {input.healthScore}
                        name = 'healthScore'
                        onChange = {evt => handleNumber(evt)}
                       />

                       <InputSteps
                
                        type="text"
                        value = {input.steps}
                        name = 'steps'
                        placeholder='Escribe aqui los Steps...'
                        onChange = {evt => handleChange(evt)}
                       />

                
                    <SelectDiets defaultValue='Diets' onChange={(evt) => handleSelect(evt)}>
                        <option disabled>Diets</option>
                            {type?.map((type) => <option key={type.name} value={type.name}>{type.name}</option>)}
                    </SelectDiets>  

                  <DivSubmitContainer>  

                    {((input.name !== '') && (!error.name)) ?
                         
                             <ButtonSubmit type='submit'>Recipes Create</ButtonSubmit>
                              : <P_button>Name is require</P_button>
                      }
                  </DivSubmitContainer> 
                
                  <DivDietas>

                    {input.diets.map(
                        (el, index) => <DivDietasOn key = {index}><p>{el}</p>
                      <ButtonCloseDiets onClick={() => handleDelete(el)}>x</ButtonCloseDiets></DivDietasOn>)}
               
                 </DivDietas>
                 

                 </form>
            </>
    
    )
}

export default Form;
