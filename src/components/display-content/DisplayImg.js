import React from 'react';

const DisplayImg = props => {
    return (
        <main>
            <h2>{props.title}</h2>
            <p>Date: {props.date}</p>
            <img src={props.img} alt={props.title}></img>
            <p>{props.description}</p>
        </main>
    )
}

export default DisplayImg
