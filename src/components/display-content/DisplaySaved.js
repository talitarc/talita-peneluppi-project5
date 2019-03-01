import React, { Component } from 'react';

class DisplaySaved extends Component {
    render() {
        return (
            props.map((object) => {
              <ul>
                <li key={this.props.object.date}>
                  <p>{this.props.object.title}</p>
                </li>
              </ul>
            })  
        )
}

export default DisplaySaved;