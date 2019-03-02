import React from 'react';
import './DisplayContent.css';

const DisplayVideo = props => {
    return (
        <main className="wrapper">
            <h2>{props.title}</h2>
            {/* <p>Date: {props.date}</p> */}
            <iframe width="100%" height="auto" src={props.video} title={props.title}></iframe>
            <p>{props.description}</p>

            <input type="submit" value="Save this content" onClick={props.handleSave}></input>
        </main>
    )
}

export default DisplayVideo