import styled, {keyframes} from "styled-components"

const loader = keyframes` 
  0% {
    width: 10%;
    transform: rotate(0deg);
  }
  10% {
    left: 0%;
    transform: rotate(0deg);
  }
  20% {
    width: 0%;
    left: 20%;
  }
  30% {
    width: 25%;
  }
  50% {
    left: 15%;
    width: 35%;
  }
  70% {
    width: 30%;
    left: 18%;
    transform: rotate(240deg);
  }
  90% {
    width: 30%;
    left: 10%;
  }
  100% {
    width: 2%;
    left: 25%;
    transform: rotate(360deg);
  }
`;

const pan = keyframes` 
  0% {
    transform: rotate(0deg);
    transform-origin: top right;
  }
  10% {
    transform: rotate(-2deg);
    transform-origin: top right;
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
` ;

const shadow = keyframes` 
  0% {
    width: 30%;
  }
  50% {
    width: 40%;
    left: 20px;
  }
  100% {
    width: 30%;
  }
`;


export const PanLoader = styled.div`
  
  position: absolute;
  width: 280px;
  height: 280px;
  // border: 1px solid red;
  left:40%;
  top: 100px;
  margin: 100px auto;
`;

export const Loader = styled.div`
    
    position: relative;
    top: 5%;
    left: 0;
    z-index: -1;
    width: 60%;
    height: 45%;
    border: 10px solid transparent;
    border-bottom: 10px solid 	#FFE4B5;
    border-radius: 50%;
    animation: ${loader} 1s infinite;
    animation-timing-function: linear;
`;

export const PanContainer = styled.div`
  
    display:flex;
    width: 100%;
    animation: ${pan} 1s infinite;
`;

export const Pan = styled.div`
  
    width: 60%;
    height: 20px;
    background: linear-gradient(silver, gray);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
`;


export const Handle = styled.div`
    width: 40%;
    height: 10px;
    background: linear-gradient(silver, gray);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const Shadow = styled.div`
  
  position: relative;
    top: 15%;
    left: 15%;
    width: 40%;
    height: 8px;
    background: black;
    // box-shadow: 5px 0 8px 4px lightgray;
    border-radius: 20px;
    animation: ${shadow} 1s infinite;
`;

