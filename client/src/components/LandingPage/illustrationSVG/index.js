import React from 'react';
import {ContSVG} from './IllustrationSvgStyled';
import ButtonLanding from '../buttonLading/index';
import { Link } from 'react-router-dom';

function IlustracionSVG() {
    return (     
      <>
          <ContSVG/>
          <Link to='home'>
            <ButtonLanding/>
          </Link>
   </>  
 );} 

export default IlustracionSVG;