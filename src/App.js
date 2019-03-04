import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import firebase from './firebase.js';
import Header from './components/header/Header.js';
import DisplayImg from './components/display-content/DisplayImg.js';
import DisplayVideo from './components/display-content/DisplayVideo.js';

// create a constructor and call super
class App extends Component {
  constructor() {
    super();
    this.state = {
      // create an empty object to set initial state for astronomy picture of the day (APOD)
      apod: [],
      // create an empty state to hold the date (it'll be used to call the API)
      chosenDate: '',
      savedAPOD: []
    };
  } 

  // create a function to save the content in Firebase when the input "Save this content" in clicked
  handleSave = (event) => {
    //prevent to reload the page
    event.preventDefault();
    //create a const that holds the reference to the database
    const dbRef = firebase.database().ref();
    // add
    dbRef.push(this.state.apod)
  }

  //create a componentDidMount method to get info from database
  componentDidMount(){
    //create a const that holds the reference to the database (because this is local here and in handleSave)
    const dbRef = firebase.database().ref();
    //use the FB method on to get the values in the database
    dbRef.on('value', response => {
      const newState = [];
      const data = response.val();
    // loop trough it to push each item in the new array newState
      for (let key in data) {
        newState.push({
          key: key,
          title: data[key],
        })
        //setState using newState
        this.setState({
          savedAPOD: newState
        })
      }
    })
  }

  //create a function to handle the date return by queryDate
  handleChange = (event) => {
    this.setState({
      chosenDate: event.target.value
    })
  }

  // create a function to handle the input submit to call the api and show the specific content
  handleSubmit = (event) => {
    event.preventDefault();
    //call the function that will call the api
    this.getAPOD();
  }

  //create a function to get the info called by the button saveDate
  saveDate = (event) => {
    //prevent page to reload
    event.preventDefault();
    //set the state of chosenDate to the date of the saved element selected 
    this.setState({
      chosenDate: event.target.id
    }, () => {
      //call the function to show the saved content
      //callback function because chosenDate must be defined before getApod is called
      this.getAPOD();
    }); 
  }

  // create a function to get APOD
  getAPOD = () => {
    // fire the call to the NASA API - today is the query date default
    axios ({
      method: "GET",
      url: "https://api.nasa.gov/planetary/apod?api_key=iRBxHa8umb23CV7ksEzwtsQ7CCH8jpuUSvuXTUf8",
      dataType: "jsonp",
      params: {
        date: this.state.chosenDate,
        hd: true
      }
    }).then(response => {
      //set the response to be the setState apod
      response = response.data;
      this.setState({
        apod: response,
      });
    }).catch(function(error){
      //define an alert message when the api returns an error
      alert("Server error. Please try again later.")
    });
  }

  //create a function to delete a saved item when the button is clicked
  removeItem = (itemKey) => {
    const dbRef = firebase.database().ref(itemKey);
    dbRef.remove();
  }

  render() {
    return (
      <div className="App">
        {/* Create and import Header.js */}
        {/* Create an H1 to hold website's name */}
        {/* Create a button - when clicks it will fire the API call */}
        <Header
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        {/* Create and import files from DisplayContent folder*/}
        {/* Create a div to show the title, picture and description */}
        {
          this.state.apod.media_type === "image" ? (
            <DisplayImg
              key={this.state.apod.date}
              title={this.state.apod.title}
              img={this.state.apod.hdurl}
              description={this.state.apod.explanation}
              handleSave={this.handleSave}
            />
          ) : (
            <DisplayVideo
              key={this.state.apod.date}
              title={this.state.apod.title}
              video={this.state.apod.url}
              description={this.state.apod.explanation}
              handleSave={this.handleSave}
            />
          )
        }
        {/* Div to show the saved items and the option to delete each of them*/}
        <div className="wrapper displaySaved">
          <h2>Saved items:</h2>
          {
            this.state.savedAPOD.map((item) => {
              return (
                <div className="savedBox" key={item.key}>
                  <button className="savedItem" id={item.title.date} onClick={this.saveDate}>{item.title.title}</button>
                  <button className="deleteItem" onClick={() => this.removeItem(item.key)}><span>Remove:</span> {item.title.title}</button>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;