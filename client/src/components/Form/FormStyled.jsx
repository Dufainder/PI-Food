import styled from 'styled-components';
import { ReactComponent as FormSVG } from './svg/formulario.svg';


export const FormContainerSVG = styled(FormSVG)`
  width: 1100px;
  height: 800px;
  display: flex;
  position: absolute;
  left:10%;
  top: 20px;
`;


export const InputName = styled.input`
   width: 380px;
   height: 35px;
   position:absolute;
   background: transparent;
   color: snow;
   top: 130px;
   left: 39%;
   font-size: 25px;
   border:none;
   
   &::placeholder{
       color: snow;
       background: transparent;
       opacity: 0.5;
   }

   &:focus{
    background: transparent;
  
   }

`;

export const InputSummary = styled.textarea`
   width: 500px;
   height: 70px;
   position:absolute;
   background: transparent; 
   top: 340px;
   left: 42%;
   font-size: 20px;

   &::placeholder{
       color: snow;
       opacity: 0.5;
   }

`;


export const InputScore = styled.input`
   width: 45px;
   height: 35px;
   position:absolute;
   background: transparent; 
   top: 430px;
   left: 53.3%;
   font-size: 20px;
   color: snow;
   align-items: center;
   text-align: center;

   &::placeholder{
       color: snow;
   }

`;

export const InputHealthScore = styled.input`
   width: 45px;
   height: 35px;
   position:absolute;
   background: transparent; 
   top: 430px;
   left: 73.5%;
   font-size: 20px;
   text-align: center;
   color: snow;

   &::placeholder{
       color: snow;
   }

`;


export const SelectDiets = styled.select`
   width: 150px;
   height: 35px;
   position:absolute;
   background: transparent; 
   color:snow;
   top: 550px;
   left: 21%;
   font-size: 20px;
   &:focus{
     color:black;
     background: transparent;
   }

`;

export const InputSteps = styled.textarea`
   width: 600px;
   height: 60px;
   position:absolute;
   background: transparent; 
   top: 555px;
   left: 37.3%;
   font-size: 20px;

   &::placeholder{
       color: snow;
       opacity: 0.5;
   }

`;


export const ButtonSubmit = styled.button`
   display: flex;
   width: 50px;
   height: 50px;
   padding: 50px;
   text-align: center;
   align-items: center;
   justify-content: center;
   position:absolute;
   background: black; 
   color:snow;
   border-radius: 100%;
   top: 705px;
   left: 48%;
   font-size: 15px;
   cursor: pointer;
  

`;

export const P_button = styled.p`
   position: absolute;
   background: red; 
   padding: 0px 10px;
   border-radius: 5px;
   color:snow;
   top: 715px;
   left: 45%;
   font-size: 30px;
  

`;

export const DivDietasOn = styled.div`
 
   position: relative;
   display: flex;
   width: 100px;
   height: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   background: transparent; 
   color:snow;
   top: 628px;
   left: 71%;
   font-size: 20px;
  
`;


export const ButtonCloseDiets = styled.button`
  
   position: absolute;
   width: 30px;
   height: 30px;
   position:absolute;
   background: gray;
   color:snow;
   border-radius: 100%;
   border-bottom: black;
   top: 35px;
   left: 20%;
   font-size: 15px;
  cursor: pointer;

`;

export const DivDietas = styled.div`
 
   display: flex;
   
  
`;

export const DivSubmitContainer = styled.div`
 
  
`;
