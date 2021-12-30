import styled from "styled-components";

export const Container  = styled.div`
  position: absolute;
  background-color: transparent;
  align-content:center;
  width: 70%;
  height:800px;
  top: 10px;
  right: 0;
  left: 10%;
  bottom: 0;
  margin-left: 2em;
  border-radius: 20px;

  /* background-image: linear-gradient(to top, gray 0%, white 100%); */
  
`;

export const TitleContainer  = styled.div`
  position: relative;
  justify-content: center;
  text-align:center;
  align-content: center;
  top: 0;
  padding:0;
`;

export const H1  = styled.h1`
  font-family: 'Pacifico', cursive;
  font-family: 'Shalimar', cursive;
  font-size: 80px; 
  color:snow;
  top: 0;
  padding :0;
  margin: 0; 
`;

export const CardContainer  = styled.div`
   display: inline-flex;
   justify-content: center;
   align-items: center;
   width: 100%;
  
`;

export const ImageContainer  = styled.div`
  /* width: 50%;
  height: 315px; */
  filter: saturate(180%);
`;

export const Image  = styled.img`
   width: 100%;
   border-radius:20px;
  
`;

export const DietsContainer  = styled.div`
  
  display: flex;
  flex-direction:column;
  align-content: center;
  text-align:center;
  
  width: 25%;
  height: 200px;
  margin-left: 1em;
  background-color: rgba(185, 218, 245, 0.8);
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  background-image: linear-gradient(-225deg, snow 0%, silver 100%);
`;

export const DishContainer  = styled(DietsContainer)`
`;

export const P  = styled.p`
 
  font-size: 20px; 
  color:black;
  top: 0;
  padding :0;
  margin: 0; 
`;

export const ScoresContainer  = styled.div`
  display: flex;
  width: 50%;
  margin-left:400px;
  justify-content: space-around;


`;
 
export const Score  = styled.div`
    width: 200px;
    background: gray;
    align-content: center;
    text-align:center;
    color:snow;
    border-radius:20px;
    margin-bottom :20px;
`;

export const InfoContainer  = styled.div`

display: inline-flex;
align-content: center;
flex-wrap: nowrap;
justify-content: center;
`;

export const SummaryContainer  = styled.div`

width: 45%;
background-color: rgba(185, 218, 245, 0.8);
margin-right: 1em;
justify-content: baseline;
border-radius: 20px;
margin-bottom: 1em;
box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.4);
background-image: linear-gradient(-225deg, silver 0%, snow 100%);

`;

export const StepsContainer  = styled(SummaryContainer)`

`;

export const H3Tittle  = styled.h3`
  
font-family: 'Pacifico', cursive;
font-family: 'Shalimar', cursive;
font-size: 70px; 
text-align:center;
color:black;
padding :0;
margin:5px 0px 10px 10px;
`;

export const H3Score  = styled(H3Tittle)`
  
font-size: 35px; 
color:black;

`;


export const PInfo  = styled.p`
  

font-size: 20px; 
padding :0;
margin:5px 10px 20px 20px;
  
`;