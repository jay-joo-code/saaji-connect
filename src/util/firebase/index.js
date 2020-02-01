import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBKenRvIdCK1q_Sq36gfKRW3y298UD3l8A",
  authDomain: "saaji-connect.firebaseapp.com",
  databaseURL: "https://saaji-connect.firebaseio.com",
  projectId: "saaji-connect",
  storageBucket: "saaji-connect.appspot.com",
  messagingSenderId: "251079209237",
  appId: "1:251079209237:web:71894a24a744c8f1dab91c",
  measurementId: "G-DZH837KRP2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;