// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu6Ay1lHHvCmlxPTi3fwwx-5Ya2EmV73k",
  authDomain: "craftopia-hub.firebaseapp.com",
  projectId: "craftopia-hub",
  storageBucket: "craftopia-hub.appspot.com",
  messagingSenderId: "658097715611",
  appId: "1:658097715611:web:1a5c059588f071b1cb893e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;