import React from 'react';
import Card from './Card';



const CardList =({Details}) =>{
    const CardComponent = Details.map((user,i) =>{
    return<Card key={i} 
    id={Details[i].id} 
    name={Details[i].name} 
    company={Details[i].company}/>
    })
    return(
        <div>
            {CardComponent}
        </div>
    )
}
export default CardList;