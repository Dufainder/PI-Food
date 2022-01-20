import React from 'react';
import {FootFoodSVG, InfoContainer, OllaSVG, Plato1SVG, Plato2SVG, Plato3SVG, Plato4SVG, Plato5SVG, SartenSVG} from './indexStyled'
import IlustracionSVG from './illustrationSVG';


function LandingPage() {
    return (     
        
     <>
    
       <InfoContainer>
          <IlustracionSVG/>
       </InfoContainer>

       <OllaSVG/>
       <SartenSVG/>
       <Plato1SVG/>
       <Plato2SVG/>
       <Plato3SVG/>
       <Plato4SVG/>
       <Plato5SVG/>


       <FootFoodSVG/>
    </>

 );} 

export default LandingPage;