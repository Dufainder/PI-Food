import styled from "styled-components";

export const ContainerButtons  = styled.div`
`;



export const PagedButton  = styled.button`
  position: relative;
  left:-100px;
  background: silver;
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 20px;
  color: black;
  font-size: 15px;
  background-image: linear-gradient(60deg, silver 0%, gray 100%);
  margin-left: 5px;
  margin-bottom: 20px;
  cursor:pointer;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;


   &:hover {
      background: snow;
      box-shadow: 0 0 10px snow, 0 0 40px silver, 0 0 80px white;
    }

`;

