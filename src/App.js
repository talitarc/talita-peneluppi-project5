import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import firebase from './firebase.js';
import Header from './components/header/Header.js';
import DisplayImg from './components/display-content/DisplayImg.js';
import DisplayVideo from './components/display-content/DisplayVideo.js';
// import DisplaySaved from './components/display-content/DisplaySaved.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apod: [],
      chosenDate: '',
      savedAPOD: []
    };
  }
  // create a constructor and call super
  // create an empty object to set initial state
  // object must have: title, src and description

  // listen when button is clicked

  // fire the call to the NASA API - today is the default

  handleSave = (event) => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    
    dbRef.push(this.state.apod)
    console.log(this.state.savedAPOD)
  }

  componentDidMount(){
    const dbRef = firebase.database().ref();

    dbRef.on('value', response => {
      const newState = [];
      const data = response.val();

      for (let key in data) {
        newState.push({
          key: key,
          title: data[key],
        })

        // console.log(newState)

        this.setState({
          savedAPOD: newState
        })
      }
    })
  }

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

  saveDate = (event) => {
    event.preventDefault();
    this.setState({
      chosenDate: event.target.id
    })

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

  removeItem = (itemKey) => {
    const dbRef = firebase.database().ref(itemKey);
    dbRef.remove();
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
      
        {
          this.state.apod.media_type === "image" ? (
            <DisplayImg
              key={this.state.apod.date}
              title={this.state.apod.title}
              date={this.state.apod.date}
              img={this.state.apod.hdurl}
              description={this.state.apod.explanation}
              handleSave={this.handleSave}
            />
          ) : (
            <DisplayVideo
              key={this.state.apod.date}
              title={this.state.apod.title}
              date={this.state.apod.date}
              video={this.state.apod.url}
              description={this.state.apod.explanation}
              handleSave={this.handleSave}
            />
          )
        }
        <div>
          <h2>Saved items:</h2>
          {
            this.state.savedAPOD.map((item) => {
              return (
                <div key={item.key}>
                  <button id={item.title.date} href="#" onClick={this.saveDate}>{item.title.title}</button>
                  <button onClick={() => {this.removeItem(item.key)}}>Remove {item.title.title}</button>
                </div>
              )
            })
          }
        </div>
        
          
        {/* Main.js */}
        {/* Map state to get title, picture and description */}
        {/* Create a div to show the title, picture and description */}
        
        
      </div>
    );
  }
}

export default App;