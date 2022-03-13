//?            Importo mis styled-components                                 //#cadetblue
import {
     CardContainer,
     TittleContainer, 
     ImageContainer, 
     Image, 
     FootInformacion, 
     DietsContainer, 
     H4,
     TypesContainer,
     
     
     H3, CardCont, Img, H6, Cabeza,
    Caracteristicas, AuxContainer, Precio
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
       
       
    
        <CardCont>
        
                <Img src={image} alt= 'image' 
                onClick={() => handleId(id)}/>
        
               
                <Cabeza>
                    <AuxContainer>
                    <H3>{name}</H3> 
                    </AuxContainer>
               </Cabeza>
    
               <Caracteristicas>
               <AuxContainer>
                 <H6>
                 Diets Types:
                 </H6> 
                 {diets?.map((diet, index) => <> {diet}, </> )}
               </AuxContainer>

               <AuxContainer>
               <H6>
                  Dish Types:
               </H6>
                 {types?.map((dish, index)=> <> {dish.name ? dish.name : dish}, </>)}
 
               </AuxContainer>
    
                
               </Caracteristicas>
    
               {/* <Precio>
                     {}
               </Precio> */}
    
          </CardCont>
        
        
       
       
       
       
       
       
       
       
//        <CardContainer>

//                <ImageContainer onClick={() => handleId(id)}>
//                    <Image src={image} alt= 'image not Found'/>
//                </ImageContainer>

//                <TittleContainer>
//                    <H3>{name}</H3>
//                </TittleContainer>


//         <FootInformacion>
//                <DietsContainer>
//                     <H4>Diets Types</H4>
//                     {diets?.map((diet, index) => <P key={index} >{diet}</P>)}
//                 </DietsContainer>

//                 <TypesContainer>
//                     <H4>Dish Types</H4>
//                     {types?.map((dish, index)=> <P key={index} >{dish.name ? dish.name : dish}</P>)}
//                 </TypesContainer>
//         </FootInformacion>

//   </CardContainer>
    )
}//#

export default Card;