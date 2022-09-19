import React from 'react'
import './pagination.css'

export default function Pagination({recipesPerPage, pagination, allRecipes, setIsActive, isActive, currentPage}) {
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(allRecipes/recipesPerPage)+1; i++) {
        pageNumbers.push(i);
    }
     // eslint-disable-next-line
    
    const handleClick = (number) => {
        pagination(number)
        setIsActive(number)
    }
    return (
        <div className="pageContainer">
            <ul className="pagesList" >
                {(currentPage > 1)&&<li className="itemList" onClick={currentPage > 1 ? ()=>handleClick(currentPage-1):null}>&lt;</li>}
                {pageNumbers?.map(number => {
                    return (
                        <li key={number} className={(isActive=== number) ? "active": "itemList" } onClick={() => handleClick(number)}>
                                {number}
                        </li>
                    )
                })}
                { (currentPage < (pageNumbers.length)) && <li className="itemList" onClick={currentPage < (pageNumbers.length) ? ()=>handleClick(currentPage+1):null}>&gt;</li>} 
            </ul>
        </div>
    )
}
