import React from 'react';
import { useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getRecipesId } from '../actions/index.js';
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
     PInfo
     } from './DetailStyled.jsx';



function validate(id) {

    if((id.length <= 6)&&(id.length > 0)) {
        for(let i = 0; i < id.length; i++) {
            if(!Number.isInteger(id[i] * 1)) return false
        }
    }else if( id.length < 36){
        return false
    }
    return true
}


function Detail(props) {
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail) 
    const [id, setId] = useState('');

    function handleInput(evt){
        evt.preventDefault();
        setId(evt.target.value);    
    }
    
    function handleSubmit(evt){
        evt.preventDefault();
        if (validate(id)) dispatch(getRecipesId(id)) 
    }
    
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
                    <h4>Diets Types</h4>
                    {detail.diets?.map((diet, index) => <P key={index} >{diet}</P>)}
                </DietsContainer>

                <DishContainer>
                    <h4 >Dish Types</h4>
                    {detail.types?.map((dish, index)=> <P key={index} >{dish.name ? dish.name : dish}</P>)}
                </DishContainer>

            </CardContainer>

            <ScoresContainer>

                <Score>
                    <h3 className = 'h3score'>Score: {detail.score}</h3>
                </Score>

                <Score>
                    <h3 className = 'h3score'>Health-Score: {detail.healthScore}</h3>
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