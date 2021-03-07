import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDRuKP2nWn_R6s504o6KHu1czcyYEfL1kQ",
  authDomain: "puppygallery-8fa99.firebaseapp.com",
  projectId: "puppygallery-8fa99",
  storageBucket: "puppygallery-8fa99.appspot.com",
  messagingSenderId: "141562150146",
  appId: "1:141562150146:web:97d824c18bc1118878561b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
