import React from 'react'

const Pagination1= ({cardsPerPage, totalCards, paginate}) => {
    const pageNumber=[];
    for(let i=1; i<=Math.ceil(totalCards/cardsPerPage); i++){
        pageNumber.push(i);
    }
    return (
        <nav >
            <ul className="pagination" style={{cursor:"pointer"}}>
                {pageNumber.map(number=>(
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination1
