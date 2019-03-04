import React from 'react';
import './DisplayContent.css';

const DisplayVideo = props => {
    return (
        <main className="wrapper">
            <h2>{props.title}</h2>
            {/* <p>Date: {props.date}</p> */}
            <div className="containerVideo">
                <iframe className="video" allowFullScreen src={props.video} title={props.title}></iframe>
            </div>
            <p>{props.description}</p>

            <input type="submit" value="Save this content" onClick={props.handleSave}></input>
        </main>
    )
}

export default DisplayVideo