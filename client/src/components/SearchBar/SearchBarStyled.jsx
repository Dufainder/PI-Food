import styled, {keyframes} from 'styled-components';
import { ReactComponent as SearchSVG } from './SearchSVG.svg';


const moveSVG = keyframes`
 
 0%{
   
    transform: rotate(-2deg) ;
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
     transform: rotate(2deg) ;
     opacity:1;
   

`;

export const ButtonSVG = styled(SearchSVG)`
  width: 130px;
  height: 80px;
  margin: 0%;
  padding: 0%;
  /* display: flex; */
  position: relative;
  left:-50px;
  /* top: 5px;  */
  cursor: pointer;
 
  
         .lupa {      
        
         animation-name: ${moveSVG};
         animation-duration: 0.7s;
         animation-iteration-count: infinite; 
          animation-delay: 0.1s;
         animation-timing-function: ease;
         animation-direction: alternate;
      }
   
      &:hover{
        .lupa { 
        fill: blue;
        animation: none;
        transition: 0.1s;
      }

} 


 

`;



//-------Contenedor del input y su button------

export const SearchContainer = styled.div`

   /* gap: 10px;   */
   display: flex;
   width: 100%;
   align-items: center; 
   justify-content: center;

`;


//---------Input----------------

export const InputCity = styled.input`
  /* display:flex; */
  /* align-items: center;
  justify-content: center; */
  /* text-align: center; */
  /* position: sticky; */
  box-shadow: 0 1px 1px rgba(229, 103, 23, 0.5)inset, 0 0 8px black;
  height: 26px;
  width: 20%;
  border-radius: 7px;
  border-color: black;
  font-size: 12px;
  margin: 0;
  padding: 5px;
  
  
  
  :focus{
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.5)inset, 0 0 8px #fff;
    border-color:black;
    outline: 0 none; 
    font-size: 15px;
    padding: 5px;
   }

   ::placeholder {
    /* Se aplica específicamente
       al texto del placeholder */
    color: black;
    /* text-align: center; */
    opacity: 0.4;
    font-family: 'Comforter', cursive;
    font-family: 'M PLUS 1 Code', sans-serif;
    font-size: 14px;
    /* align-items: center;
    justify-content: center; */
    }
`;


//------------------------Button---------------

export const InputButton = styled.button`
  background-image: -webkit-linear-gradient(top, black, gray);
  background-image: -moz-linear-gradient(top, black, gray);
  background-image: -ms-linear-gradient(top, black, gray);
  background-image: -o-linear-gradient(top, black, gray);
  background-image: linear-gradient(to bottom, black, gray);
  
  border-color:black;
  box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px black;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
   border-width: 1px;
   border-radius: 28px;
   text-decoration: none;
   position: absolute;
   top:18px;
   left: 50%;

   color:#fff;
   font-family: 'Work Sans', sans-serif;
   font-size: 15px;
   padding:15px 15px;
   /* margin: 5px; */
   cursor: pointer;

   &:hover{
    color: black;
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px gray;
    background: #2079b0;
    border: none;
    background-image: -webkit-linear-gradient(top, gray, #fff);
    background-image: -moz-linear-gradient(top, gray, #fff);
    background-image: -ms-linear-gradient(top, gray, #fff);
    background-image: -o-linear-gradient(top, gray, #fff);
    background-image: linear-gradient(to bottom, gray, #fff);
    text-decoration: none;
   }

   &:focus{
    color:black;
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px #fff;
    background: #2079b0;
    border: none;
    outline: none;
    
    background-image: -webkit-linear-gradient(top, gray, #fff);
    background-image: -moz-linear-gradient(top, gray, #fff);
    background-image: -ms-linear-gradient(top, gray, #fff);
    background-image: -o-linear-gradient(top, gray, #fff);
    background-image: linear-gradient(to bottom, gray, #fff);
    text-decoration: none;
   }
`;