import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getRecipesAll} from '../actions/index'
import  { HomeContainer, CreateRecipeSVG,  LogoSVG, LogoDietsSVG, TextDietsSVG, ContenedorDiets }from './HomeStyled'
import SearchBar from './SearchBar'

function Home() {
  const dispatch = useDispatch();
  const second = useSelector((state) => state.recipesAll);
  if(second.length === 0) dispatch(getRecipesAll())

    return (
        
            <>
              <SearchBar/>
              <LogoSVG/>
              
              <Link to='/create'>
                  <CreateRecipeSVG/>
              </Link>
                 
              <Link to='/ditail'>
                <ContenedorDiets>
                  <LogoDietsSVG/>
                  <TextDietsSVG/>
                </ContenedorDiets>
              </Link>



            </>
    
    )
}

export default Home;
