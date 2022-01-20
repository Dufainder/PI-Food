import {InputCity, SearchContainer, ButtonSVG} from "./SearchBarStyled"
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { getRecipesName, searchBarName } from '../actions/index.js'

export default function SearchBar() {
   //const recipesAll = useSelector((state) => state.recipes)
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
           setName('')   // poner el estado en cero otra  vez
       }
   } 
    return( 
            <>
              <SearchContainer>
                 <InputCity type="text" 
                    placeholder="Search Recipe..." 
                    onChange={evt => handleInput(evt)}
                />

                <ButtonSVG  type ="submit" onClick={ evt => handleSubmit(evt)}/> 
               
              </SearchContainer>
           </>
    )};