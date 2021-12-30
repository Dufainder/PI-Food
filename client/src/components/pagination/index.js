import React from 'react';
import {PagedButton, ContainerButtons} from "./PaginationStyled"


function Pagination({ recipesPage, recipesAll, Page }) {

    const pageNumbers = []

    for (let i = 0; i < Math.ceil(recipesAll/recipesPage); i++) {
        pageNumbers.push(i + 1)
    }
    return <ContainerButtons>
    {pageNumbers.map(number => (
        <PagedButton  key={number} onClick={() => Page(number)}>{number}</PagedButton>
    ))}
</ContainerButtons>
}

export default Pagination
