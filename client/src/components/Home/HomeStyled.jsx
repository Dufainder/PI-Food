import styled from 'styled-components';
import { ReactComponent as LogSVG } from './svg/MassageSVG.svg';
import { ReactComponent as CreateRecipe } from './svg/full.svg';
import { ReactComponent as ContDiets } from './svg/LogoDiets.svg';
import { ReactComponent as TextDiets } from './svg/TextDiets.svg';




export const HomeContainer  = styled.div`

     position: absolute;
     padding: 20px;
     top: 50px;
     background-image: linear-gradient(to right, #54586896, #4f3d5070), url('../images/FondoBlack.jpg');

`;

export const LogoSVG = styled(LogSVG)`
  width: 130px;
  height: 100px;
  display: flex;
  position: absolute;
  left:10px;
  top: 0px;
`;

export const CreateRecipeSVG = styled(CreateRecipe)`
  width: 80px;
  height: 90px;
  display: flex;
  position: absolute;
  left:850px;
  top: 10px;
  cursor:pointer;
  .texto{
              fill: snow;
              stroke: snow;
         }
    
    &:hover{
         .texto{
              fill: blue;
              stroke: blue;
         }
    }
   
`;


export const LogoDietsSVG = styled(ContDiets)`
  width: 80px;
  height: 80px;
  display: flex;
  position: absolute;
  left:413px;
  top: 33px;
  cursor:pointer;
    
   
`;

export const ContenedorDiets = styled.div`
 
  cursor:pointer;

  .texto{
              fill: snow;
              stroke: snow;
         }

  &:hover{
         .texto{
              fill: blue;
              stroke: blue;
         }
    }
      
`;

export const TextDietsSVG = styled(TextDiets)`
  width: 100px;
  height: 100px;
  display: flex;
  position: absolute;
  left:405px;
  top: -22px;
  cursor:pointer;

  &:hover{
         .texto{
              fill: blue;
              stroke: blue;
         }
    }
    
`;
// body{
  
//    } 