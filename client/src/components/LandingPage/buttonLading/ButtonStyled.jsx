import styled, {keyframes} from 'styled-components'
import { ReactComponent as ButtonSVG } from '../svg/HomeButton.svg';
import { ReactComponent as MasaSVG } from '../svg/masa.svg';



const move = keyframes`
 
 

50%{
    opacity:1;
    transform:  translate (0px,-20px);
    }

100%{
        transform: translate(0px,20px) ;
        opacity:1;
        
    } 
    
 `;
    
export const ButtonContainer = styled.div`
    
    position: absolute;
    bottom: -400px;
    left: 115px;
    `;

    export const ButtonHome = styled(ButtonSVG)`
    
               margin-top: 0;
               width: 250px;
               cursor: pointer;
               z-index: 1000;
    
               animation-name: ${move};
               animation-duration: 0.5s;
               animation-iteration-count: infinite; 
               animation-delay: 0.05s;
               animation-timing-function: ease;
               animation-direction: alternate;
               transition: 0.5s;

          &:hover{
              animation: none;
          }     
    
    
    `;

export const SplashSVG = styled(MasaSVG)`

           position: absolute;
           margin-top: 0;
           width: 90px;
           left:80px;
           top:-37px;
           cursor: pointer;
           z-index: -1;
         
    

      &:hover{
          visibility: Hidden;

      }
      

`;




