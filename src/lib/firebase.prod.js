import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed.js';
// we need to somehow seed the database 
// we need a config here

const config = {
  apiKey: "AIzaSyADoJ8GX1G5LdGrO78NDCmJQDCxnK2WSPU",
  authDomain: "netflix-clone-5b63c.firebaseapp.com",
  databaseURL: "https://netflix-clone-5b63c.firebaseio.com",
  projectId: "netflix-clone-5b63c",
  storageBucket: "netflix-clone-5b63c.appspot.com",
  messagingSenderId: "392362273604",
  appId: "1:392362273604:web:69349707de542fee604511",
  measurementId: "G-B5GNL4NM5S",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };