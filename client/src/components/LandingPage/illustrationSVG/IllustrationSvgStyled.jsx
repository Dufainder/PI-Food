import styled, {keyframes} from 'styled-components'

import { ReactComponent as FootSVG } from '../svg/FootFood.svg';
import { ReactComponent as Plato2 } from '../svg/plato_2.svg';
import { ReactComponent as Plato3 } from '../svg/plato_3.svg';
import { ReactComponent as Plato4 } from '../svg/plato_4.svg';

import { ReactComponent as ContenedorSVG } from '../svg/MassageSVG.svg';

const moveSVG3 = keyframes`
 
 0%{
   
   transform: rotate(-0.4deg);
   opacity: 1;
  }
   /*
   
   100%{
     transform:translate(0px, -80px) scale(0.5) ;
     opacity:0;
     
     
   }  */
    /* 25%{
    transform: rotate(180deg);
     opacity: 1;
   }      */

   100%{
     transform: rotate(0.4deg) ;
     opacity:1;
   

`;

const moveSVG2 = keyframes`
 
 
0%{
   
   transform: rotate(0.4deg);
   opacity: 1;
  }
   
  100%{
     transform: rotate(-0.4deg) ;
     opacity:1;
    }
`;


const moveSVG = keyframes`
 
  0%{
     opacity:1;
     transform:  translate (0px,-5px);


   }
   100%{
     transform: translate(0px,-5px) ;
     opacity:1;
     
   } 
`; 

export const ContSVG = styled(ContenedorSVG)`
  width: 500px;
  height: 400px;
  display: flex;
  position: absolute;
  top: -50px;

  .bigote2{
   
      
      fill: snow;
      color: black;
    
      
      animation-name: ${moveSVG};
      animation-duration: 0.5s;
      animation-iteration-count: infinite; 
      animation-delay: 0.5s;
      animation-timing-function: ease;
      animation-direction: alternate;
  }
  
  .bigote1{
      
      fill: gray;
      color: black;
      
      animation-name: ${moveSVG};
      animation-duration: 0.5s;
      animation-iteration-count: infinite;  
      animation-delay: 0.5s;
      animation-timing-function: ease;
      animation-direction: alternate;
  }
  /* align-items: center; */
  
  /* margin-top: 40px; */ 
  `;



 

export const SvgPrinContainer = styled.div`
  /* display:flex;  
  position: absolute;
  flex-direction: column;
  margin: 0;
  padding: 0; */
 
  `;

export const FootFoodSVG = styled(FootSVG)`
  
  position: absolute;
  align-content: center;
  justify-content: center;
  width: 1200px;
  height: 200px;
  left: 70px;
  bottom: -600px;


  `;



export const SVG2 = styled(Plato2)`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 80px;
  width: 100px;
  height: 100px;
  opacity: 0;
  
  /* animation-name: ${moveSVG2}; */
  animation-duration: 3s;
  animation-iteration-count: infinite; 
  animation-direction: alternate;
  animation-timing-function: ease;
  


  
`;
export const SVG3 = styled(Plato3)`
 display: flex;
 position: absolute;
 opacity: 0;
 margin-top: 80px;
 width: 100px;
  height: 100px;
  justify-content: center;
  animation-name: ${moveSVG3};
  animation-duration: 3s;
  animation-iteration-count: infinite; 
  animation-delay: 3s;
  animation-direction: alternate;
  animation-timing-function: ease;
`;

export const SVG4 = styled(Plato4)`
  display: flex;
  position: absolute;
  margin-top: 80px;
  width: 100px;
  height: 100px;
  opacity: 0;
  justify-content: center;
  /* animation-name: ${moveSVG}; */
  animation-duration: 3s;
  animation-iteration-count: infinite; 
  animation-delay: 1.5s;
  animation-direction: alternate;
  animation-timing-function: ease;

`;
