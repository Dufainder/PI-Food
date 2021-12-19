import {InputCity, InputButton, SearchContainer, ButtonSVG} from "./SearchBarStyled"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipesName, searchBarName } from '../actions/index.js'

export default function SearchBar() {
   const recipesAll = useSelector((state) => state.recipes)
   const dispatch = useDispatch();
   const [name, setName] = useState('');

   function handleInput(evt){
       evt.preventDefault();
       setName(evt.target.value);
       dispatch(searchBarName(evt.target.value))
   }

   function handleSubmit(evt){
       evt.preventDefault();
       if(name){
           dispatch(getRecipesName(name));
           setName('')
       }
   } 
    return( 
            <>
              <SearchContainer>
                 <InputCity type="text" 
                 placeholder="Buscar Receta..." 
                 onChange={evt => handleInput(evt)}/>

                  {/* <InputButton type ="submit" onClick={ evt => handleSubmit(evt)}>Buscar</InputButton>  */}
                  <ButtonSVG  type ="submit" onClick={ evt => handleSubmit(evt)}/> 
               
              </SearchContainer>
           </>
    )};