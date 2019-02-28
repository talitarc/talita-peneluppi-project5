import React from 'react';

const DisplayVideo = props => {
    return (
        <main>
            <h2>{props.title}</h2>
            <p>Date: {props.date}</p>
            <iframe width="420" height="315" src={props.video} title={props.title}></iframe>
            <p>{props.description}</p>
        </main>
    )
}

export default DisplayVideo