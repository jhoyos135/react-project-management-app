import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
const config = {
    apiKey: "AIzaSyA9hcQBDMgHSWkDDX-iRB8ZuplRXDRj5nU",
    authDomain: "project-management-4b879.firebaseapp.com",
    databaseURL: "https://project-management-4b879.firebaseio.com",
    projectId: "project-management-4b879",
    storageBucket: "project-management-4b879.appspot.com",
    messagingSenderId: "734017674272"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase