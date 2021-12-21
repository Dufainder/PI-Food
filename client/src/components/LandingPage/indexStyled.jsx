import styled, {keyframes} from 'styled-components';
import { ReactComponent as FootSVG } from './svg/FootFood.svg';
import { ReactComponent as Olla } from './svg/Olla.svg';
import { ReactComponent as Sarten } from './svg/Sarten.svg';
import { ReactComponent as Plato1 } from './svg/Plato1.svg';
import { ReactComponent as Plato2 } from './svg/Plato2.svg';
import { ReactComponent as Plato3 } from './svg/Plato3.svg';
import { ReactComponent as Plato4 } from './svg/Plato4.svg';
import { ReactComponent as Plato5 } from './svg/Plato5.svg';



const move = keyframes`
 
0%{
    opacity:1;
    /* transform:  translate (0px,-20px); */
    }

100%{
        transform: translate(0px,150px) scale(0.5);
        opacity:0;
        
    } 
`;




export const InfoContainer = styled.div`

    position: relative;
    display: inline-block;
    text-align: center;

`;

export const PrincipalContainer = styled.div`

  /* display: flex; */
`;

export const OllaSVG = styled(Olla)`

  position: absolute;
  top: 200px;
  left: 65%;
  width: 200px;
`;

export const SartenSVG = styled(Sarten)`

  position: absolute;
  top: 140px;
  left: 45%;
  width: 200px;
`;

export const Plato1SVG = styled(Plato1)`

  position: absolute;
  top: 90px;
  left: 45.5%;
  width: 150px;
  animation-name: ${move};
  animation-duration: 2s;
  animation-iteration-count: infinite; 
  animation-delay: 0.05s;
  animation-timing-function: ease;
  animation-direction: alternate;

`;

export const Plato2SVG = styled(Plato2)`

  position: absolute;
  top: 130px;
  left: 48%;
  width: 150px;
  animation-name: ${move};
  animation-duration: 2s;
  animation-iteration-count: infinite; 
  animation-delay: 0.05s;
  animation-timing-function: ease;
  animation-direction: alternate;

`;

export const Plato3SVG = styled(Plato3)`

  position: absolute;
  top: 90px;
  left: 53%;
  width: 100px;
  animation-name: ${move};
  animation-duration: 2s;
  animation-iteration-count: infinite; 
  animation-delay: 0.05s;
  animation-timing-function: ease;
  animation-direction: alternate;

`;

export const Plato4SVG = styled(Plato4)`

  position: absolute;
  top: 90px;
  left: 70%;
  width: 150px;
  animation-name: ${move};
  animation-duration: 2s;
  animation-iteration-count: infinite; 
  animation-delay: 0.05s;
  animation-timing-function: ease;
  animation-direction: alternate;

`;

export const Plato5SVG = styled(Plato5)`

  position: absolute;
  top: 90px;
  left: 65%;
  width: 150px;
  animation-name: ${move};
  animation-duration: 2s;
  animation-iteration-count: infinite; 
  animation-delay: 0.05s;
  animation-timing-function: ease;
  animation-direction: alternate;

`;

export const FootFoodSVG = styled(FootSVG)`
  
  position: absolute;
  align-content: center;
  justify-content: center;
  width: 1200px;
  height: 200px;
  left: 70px;
  bottom: 0px;


  `;
