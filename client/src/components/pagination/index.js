import React from 'react';
import './Pagination.css';


function Pagination({ recipesPage, recipesAll, Page }) {

    const pageNumbers = []

    for (let i = 0; i < Math.ceil(recipesAll/recipesPage); i++) {
        pageNumbers.push(i + 1)
    }
    return <div>
    {pageNumbers.map(number => (
        <button className='pagedButton' key={number} onClick={() => Page(number)}>{number}</button>
    ))}
</div>
}

export default Pagination
