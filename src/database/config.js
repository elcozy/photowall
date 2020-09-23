import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCbOZ-6t6PmNvKYJMs1KfMSA5cryTy4fDE",
  authDomain: "photowalls-10244.firebaseapp.com",
  databaseURL: "https://photowalls-10244.firebaseio.com",
  projectId: "photowalls-10244",
  storageBucket: "photowalls-10244.appspot.com",
  messagingSenderId: "423221996883",
  appId: "1:423221996883:web:ab0afc2165641b8d7245a6",
  measurementId: "G-97HLM5FJZF",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
export { database };
