import React, { Component } from 'react';
import Button from '../button/Button.js';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="wrapper">
                <h1>Our Amazing Universe</h1>
                <p>Choose a date and hit the button to see how incredible our universe is:</p>
                <form action="#main" onSubmit={this.props.handleSubmit}>
                    <input type="date" id="selectDate" min="1995-06-16" onChange={this.props.handleChange}></input>
                    <Button value="Show me!" />
                </form>
            </header>
        )
    }
}

export default Header;