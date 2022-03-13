import styled from 'styled-components';
import { ReactComponent as LogSVG } from './svg/MassageSVG.svg';
import { ReactComponent as CreateRecipe } from './svg/full.svg';
import { ReactComponent as ContDiets } from './svg/LogoDiets.svg';
import { ReactComponent as TextDiets } from './svg/TextDiets.svg';




export const HomeContainer  = styled.div`

     /* position: absolute;
     padding: 20px;
     top: 50px;
     background-image: linear-gradient(to right, #54586896, #4f3d5070), url('../images/FondoBlack.jpg'); */

`;

export const LogoSVG = styled(LogSVG)`
  width: 130px;
  height: 100px;
`;

export const CreateRecipeSVG = styled(CreateRecipe)`
  width: 80px;
  height: 90px;
  padding-right:10px;;
 
  
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




export const ContainerCards  = styled.div`
 
display: flex;
justify-content: center;
height: 1200px;
margin-left: 5%;
margin-right: 5%; 
margin-top: 3%;
margin-bottom: 3%;
border-radius: 20px;
width: 75%;
background: #0D0D0D;
 
 
 
 /* width: 900px;
  height: 1500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  top:180px;
  left: 2%;
  align-content: center;
  gap:15px;
  border-radius: 10px; */

`;  


export const MarginContenedor = styled.div`

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 2.5%;
  gap: 2%;
  background-color: transparent;
  
`;


export const ContainerPagination  = styled.div`

  position: absolute;
  top:1370px;
  left: 25%;
  border-radius: 5px;

`;  


// export function CreateRecipe() {
   
//      return (
//           <Link to='/create'>
//                <CreateRecipeSVG/>
//           </Link>
//      )
// }




