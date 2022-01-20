import styled from "styled-components";

//                                                                               #region[rgba(14, 156, 245, 0.15)]
export const CardContainer = styled.div`
  position: relative;
  height: 470px;
  background-color: antiquewhite;
  width: 20rem;
  border-radius: 15px;
  display: column;
  box-shadow: 10px 13px 47px 3px rgb(0, 0, 0);
  -webkit-box-shadow: 10px 13px 47px 3px rgb(0, 0, 0);
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  background-image: linear-gradient(60deg, #808080 0%,#808080 100%); 
  &:hover{
    box-shadow: 0 0 10px snow, 0 0 30px silver, 0 0 60px white;
  }
`;//                                                                                         #endregion

//                                                                               #region[rgba(200, 156, 245, 0.15)]
export const TittleContainer = styled.div`
  height: 30px;
  padding: 2px 5px;
  margin-bottom: 10px;
  border-radius: 12px 12px 0px 0px;
  background-image: linear-gradient(to right, #808080 0%, #808080 100%);
  font-family: 'Pacifico', cursive;
  font-family: 'Shalimar', cursive;
  font-size: 28px;  

`;//                                                                                           #endregion

//#blue
export const H3 = styled.h3`
     color: black;
     font-family: 'Pacifico', cursive;
     font-family: 'Shalimar', cursive;
     padding:0;
     margin: 0;
     margin-bottom: 0px;
`;//#


//#turquoise
export const H4 = styled.h4`
  color: snow;
  margin: 0px 5px;
  margin-top: 22px;
  margin-bottom: 10px;
`;//#

//#snow
export const P = styled.p`
  color: snow;
  margin: 0 12px;
  margin-top: 1px;
  padding: 0;
`;//#


//#darkmagenta
export const ImageContainer = styled.div`

cursor:pointer;

 &:hover{
     border-radius: 20%;
     transform: rotate(360deg);
     -webkit-border-radius: 20%;
     -webkit-transform: rotate(360deg);
     filter: saturate(180%);
    }
  
`;//#

//#orange
 export const Image = styled.img`
 width : 320px; 
 height: 230px;
 border-radius: 15px;
`;//#

//#lime
export const FootInformacion = styled.div`
  display: inline-flex;
  margin-top: 15px;
  width: 18rem;
  height: 10px;
`;//#

//#rosybrown
export const DietsContainer = styled.div`
   margin-left: 0.5rem;
   width: 100%;
   height: 30px;
`;//#

//#aqua
export const TypesContainer = styled.div`
   margin-left: 1rem;
   width: 50%;
   height: 30px;
`;//#

//#sienna
export const ButtonContainer = styled.div`
  margin-top: 40px;
  bottom: 4 px;
  left: 50%;
`;//#

//#gold
export const ButtonDetail = styled.button`
  margin-top: 5rem;
  position: absolute;
  bottom: 0px;
  left: 45%;
`;//#