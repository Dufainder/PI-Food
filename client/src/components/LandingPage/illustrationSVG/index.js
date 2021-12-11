import React from 'react';
import { FootFoodSVG, SvgPrinContainer,ContSVG } from './IllustrationSvgStyled';
import ButtonLanding from '../buttonLading/index';
import { Link } from 'react-router-dom';
function IlustracionSVG() {
    return (     
      <>
     <>
        <ContSVG/>
        <Link to='home'>
           <ButtonLanding/>
        </Link>
         <FootFoodSVG/>
       {/* <SvgPrincipal/>
       <SVG4/>
       <SVG3/>
      <SVG2/> */}
    </>

   </>  
 );} 

export default IlustracionSVG;