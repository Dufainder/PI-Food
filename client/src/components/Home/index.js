import React from 'react';
import{ HomeContainer,  LogoSVG, CreateRecipeSVG, LogoDietsSVG, TextDietsSVG, ContenedorDiets }from './HomeStyled'
import SearchBar from './SearchBar'

function Home() {
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
