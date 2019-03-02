import React from 'react';
import './DisplayContent.css';

const DisplayImg = props => {
    return (
        <main className="wrapper">
            <h2>{props.title}</h2>
            {/* <p>Date: {props.date}</p> */}
            <div>
                <img src={props.img} alt={props.title}></img>
            </div>
            <p>{props.description}</p>

            <input type="submit" value="Save this content" onClick={props.handleSave}></input>
        </main>
    )
}

export default DisplayImg
