import React, { Component } from 'react';
import Button from '../button/Button.js';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Astronomy Picture of the Day</h1>
                <p>Choose a date and hit the button to see it:</p>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="date" id="selectDate" min="1995-06-16" onChange={this.props.handleChange}></input>
                    <Button value="Show me!" />
                </form>
            </header>
        )
    }
}

export default Header;