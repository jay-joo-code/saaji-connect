import * as firebase from "firebase/app";
import 'firebase/analytics';

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

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;