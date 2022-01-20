//import { useState} from 'react';
//import { getRecipesId } from '../actions/index.js';
import React from 'react';
import {useSelector} from 'react-redux';
import { CardContainer,
     Container,
     ImageContainer,
     DietsContainer,
     DishContainer,
     ScoresContainer,
     Score,
     InfoContainer,
     SummaryContainer,
     StepsContainer,
     TitleContainer,
     H1,
     Image,
     P,
     H3Tittle,
     PInfo,
     H3Score
     } from './DetailStyled.jsx';


function Detail() {
    
    const detail = useSelector((state) => state.detail) 
   

    
    return (
        <Container>
           <TitleContainer>
            {detail.name ? <H1>{detail.name}</H1> : <H1>Recipe not Found</H1>}
           </TitleContainer>
           
            <CardContainer>

                <ImageContainer>
                    <Image src={detail.image} className='img' alt= {'spoonacular'} />
                </ImageContainer>

                <DietsContainer>
                    <H3Score>Diets Types</H3Score>
                    {detail.diets?.map((diet, index) => <P key={index} >{diet}</P>)}
                </DietsContainer>

                <DishContainer>
                    <H3Score>Dish Types</H3Score>
                    {detail.types?.map((dish, index)=> <P key={index} >{dish.name ? dish.name : dish}</P>)}
                </DishContainer>

            </CardContainer>

            <ScoresContainer>

                <Score>
                    <H3Score>Score: {detail.score}</H3Score>
                </Score>

                <Score>
                    <H3Score>Health-Score: {detail.healthScore}</H3Score>
                </Score>

            </ScoresContainer>

            <InfoContainer>

                <SummaryContainer>
                    <H3Tittle>Summary</H3Tittle>
                    <PInfo dangerouslySetInnerHTML={{ __html: detail.summary }} />
                </SummaryContainer>

                <StepsContainer>
                    <H3Tittle>Steps</H3Tittle>
                    <PInfo>{detail.steps}</PInfo>
                </StepsContainer>

            </InfoContainer>

        </Container>
    )
}

export default Detail