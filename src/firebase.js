import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDSkHpCGDF5h-LT4CVxQmCGJvmIOLL6AhY",
  authDomain: "react-slack-clone-c0095.firebaseapp.com",
  databaseURL: "https://react-slack-clone-c0095.firebaseio.com",
  projectId: "react-slack-clone-c0095",
  storageBucket: "react-slack-clone-c0095.appspot.com",
  messagingSenderId: "880329047744",
  appId: "1:880329047744:web:b4095cef336a83cafa3725",
  measurementId: "G-VVS537GJT1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
