import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDjIqqQC5_4tcY5nfekpMBqvOWZL6CaqO8",
  authDomain: "apod-react.firebaseapp.com",
  databaseURL: "https://apod-react.firebaseio.com",
  projectId: "apod-react",
  storageBucket: "apod-react.appspot.com",
  messagingSenderId: "561404142566"
};

firebase.initializeApp(config);

export default firebase;