import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// 需要替換成自己 firebase 的資訊
var firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);

export default firebase;
