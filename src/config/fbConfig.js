import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAOJI90ISgZCJZ_QJ6ifNssUSKvqJk3Ed0",
    authDomain: "job-project-8f630.firebaseapp.com",
    databaseURL: "https://job-project-8f630.firebaseio.com",
    projectId: "job-project-8f630",
    storageBucket: "job-project-8f630.appspot.com",
    messagingSenderId: "823641074891"
  };
  firebase.initializeApp(config);

  export default firebase;