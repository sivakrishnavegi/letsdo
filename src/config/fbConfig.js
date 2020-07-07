import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyDtl9WA28cDPNhezpqOZ_h9NiEoIN32cQg",
    authDomain: "letsdo-f44c9.firebaseapp.com",
    databaseURL: "https://letsdo-f44c9.firebaseio.com",
    projectId: "letsdo-f44c9",
    storageBucket: "letsdo-f44c9.appspot.com",
    messagingSenderId: "761370452915",
    appId: "1:761370452915:web:bf0a3946216a5e5211e1c6",
    measurementId: "G-7BR2QC6XF3",

  };
  // Initialize Firebase
  firebase.initializeApp(config);
  // firebase.firestore().settings({timestampsInSnapshots : true});


  export default firebase;