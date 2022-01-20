import React from 'react';
import {PagedButton, ContainerButtons} from "./PaginationStyled"


function Pagination({ recipesPage, recipesAll, Page }) {

    const pageNumbers = []
    console.log(recipesAll)
    for (let i = 0; i < Math.ceil(recipesAll/recipesPage); i++) {
        pageNumbers.push(i + 1)
    }
    return (
    <ContainerButtons>
       {pageNumbers.map(number => (
        <PagedButton  key={number} onClick={() => Page(number)}> {number} </PagedButton>
       ))}
    
    {/* <PagedButton key={number-1} onClick={()=>Page(number-1)}> previus </PagedButton>

    <PagedButton key={number+1} onClick={()=>Page(number+1)}> next </PagedButton> */}
    </ContainerButtons>);



}
export default Pagination
