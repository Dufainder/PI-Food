import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getRecipesAll} from '../actions/index'
import{ HomeContainer,  LogoSVG, CreateRecipeSVG, LogoDietsSVG, TextDietsSVG, ContenedorDiets }from './HomeStyled'
import SearchBar from './SearchBar'

function Home() {
  const dispatch = useDispatch();
  const second = useSelector((state) => state.recipesAll);
  if(second.length === 0) dispatch(getRecipesAll())

    return (
        
            <>
              <SearchBar/>
              <LogoSVG/>
              <CreateRecipeSVG/>
              <ContenedorDiets>
                <LogoDietsSVG/>
                <TextDietsSVG/>
              </ContenedorDiets>

            </>
    
    )
}

export default Home;
