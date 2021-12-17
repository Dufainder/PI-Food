//?            Importo mis styled-components                                 //#cadetblue
import {
     CardContainer,
     TittleContainer, 
     H3, 
     ImageContainer, 
     Image, 
     FootInformacion, 
     DietsContainer, 
     H4,
     TypesContainer,
     ButtonContainer,
     ButtonDetail,
     P,
    }
from './CardStyled';//#

//?     Importo hooks, componentes etc... que usare en mi logica                     //#navy

import React from 'react';
import { useNavigate }  from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { searchId } from '../actions/index.js'
    // import { useHistory } from 'react-router-dom';
    //#
                                                                     

//?   Definiendo componente Funcional Card
//!   Recibe por propiedades la informacion de una recipe


function Card({id, name, image, diets, types}) {
//#goldenrod
   const dispatch = useDispatch();
   const navegate = useNavigate();

async function handleId(id){
    await dispatch(searchId(id));
    navegate('/detail');
}
    //#
                                                                              

//~   Retotno el componente Card   
                                                                             //#lightgoldenrodyellow
    return (
        <CardContainer>

               <ImageContainer>
                   <Image src={image} alt= 'image not Found'/>
               </ImageContainer>

               <TittleContainer>
                   <H3>{name}</H3>
               </TittleContainer>


        <FootInformacion>
               <DietsContainer>
                    <H4>Diets Types</H4>
                    {diets?.map((diet, index) => <P key={index} >{diet}</P>)}
                </DietsContainer>

                <TypesContainer>
                    <H4>Dish Types</H4>
                    {types?.map((dish, index)=> <P key={index} >{dish.name ? dish.name : dish}</P>)}
                </TypesContainer>
        </FootInformacion>


                <ButtonContainer>
                    <ButtonDetail onClick={() => handleId(id)}>Details</ButtonDetail>
                </ButtonContainer>

        </CardContainer>
    )
}//#

export default Card;