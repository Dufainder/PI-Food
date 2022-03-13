import styled from "styled-components";

                                                                              
export const OptionsContainer = styled.div`

  position: absolute;
  left:80%;
  top: 200px;
  bottom: 10 px;
  background-color: transparent;
  width: 210px;
  height: 400px;
 

`;   

export const SelectContainer = styled.div`
  
  position: relative;
  display: flex;
  margin-top: 0.5rem;
  width: 200px;
  height: 3em;
  line-height: 3;
  overflow: hidden;
  border-radius: 20px;
 
  
`;   

export const Select = styled.select`
  
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background-image: none;
  flex: 1;
  padding: 0 0.5em;
  color:#fff;
  cursor: pointer;
  font-size: 19px;
  font-family: "Open Sans", sans-serif;
  background-image: linear-gradient(to right, silver 0%, gray 100%);
  justify-content: center;
  align-content: center;
  text-align: center;

  &:hover{
    background:snow;
    color:black;
  }

  &:active{
    color: black;
  }

`;   