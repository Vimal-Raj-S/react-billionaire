
import React from 'react';


const Card = (props) =>{
    return(
        <div className='tc bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5 animate__fadeOutDown'>
    
            <img alt='elon musk' src={`https://robohash.org/${props.id}?100x100`}/>
            <div>
                <h2> {props.name }</h2>
                <h4> {props.company} </h4>
            </div>
        </div>
    );
}


export default Card;