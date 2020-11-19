import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_W5FFmcpoLooDBWggCdOaWdD20aacVXk",
  authDomain: "no-barriers.firebaseapp.com",
  databaseURL: "https://no-barriers.firebaseio.com",
  projectId: "no-barriers",
  storageBucket: "no-barriers.appspot.com",
  messagingSenderId: "175981001977",
  appId: "1:175981001977:web:c6062fce63c410c8d87628",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
export const auth = firebase.auth();
