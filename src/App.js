import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header/Header.js';
import DisplayImg from './components/display-content/DisplayImg.js';
import DisplayVideo from './components/display-content/DisplayVideo.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apod: [],
      chosenDate: ''
    };
  }
  // create a constructor and call super
  // create an empty object to set initial state
  // object must have: title, src and description

  // listen when button is clicked

  // fire the call to the NASA API - today is the default

  handleChange = (event) => {
    this.setState({
      chosenDate: event.target.value
    })
  }

  queryDate = () => {
    return this.state.chosenDate
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.getAPOD();
  }

  // create a function to get APOD
  getAPOD = () => {
    axios ({
      method: "GET",
      url: "http://api.nasa.gov/planetary/apod?api_key=iRBxHa8umb23CV7ksEzwtsQ7CCH8jpuUSvuXTUf8",
      dataType: "jsonp",
      params: {
        date: this.state.chosenDate,
        hd: true
      }
    }).then(response => {
      response = response.data;
      this.setState({
        apod: response,
      });
    }).catch(function(error){
      alert("Server error. Please try again later.")
    });
  }

  // change the state (setState) with the api response

  render() {
    return (
      <div className="App">
        {/* Header.js */}
        {/* Create an H1 to hold website's name */}
        {/* Create a button - when clicks it will fire the API call */}
        <Header
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {/* <header>
          <h1>Astronomy Picture of the Day</h1>
          <p>Choose a date and hit the button to see it:</p>

          <form onSubmit={this.handleSubmit}>
              <input type="date" id="selectDate" min="1995-06-16" onChange={this.handleChange}></input>
              <button>Show me!</button>
          </form>
        </header> */}

      
        {
          this.state.apod.media_type === "image" ? (
            <DisplayImg
              key={this.state.apod.date}
              title={this.state.apod.title}
              date={this.state.apod.date}
              img={this.state.apod.hdurl}
              description={this.state.apod.explanation}
            />
          ) : (
            <DisplayVideo
              key={this.state.apod.date}
              title={this.state.apod.title}
              date={this.state.apod.date}
              video={this.state.apod.url}
              description={this.state.apod.explanation}
            />
          )
        }
          
        
        {/* Main.js */}
        {/* Map state to get title, picture and description */}
        {/* Create a div to show the title, picture and description */}
        
        
      </div>
    );
  }
}

export default App;
