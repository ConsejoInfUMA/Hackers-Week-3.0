import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_0Y-fuUlYoKr64wAlIqt3QRGF19TRKnE",
    authDomain: "hwtest-6031d.firebaseapp.com",
    databaseURL: "https://hwtest-6031d.firebaseio.com",
    projectId: "hwtest-6031d",
    storageBucket: "",
    messagingSenderId: "702756594704",
    appId: "1:702756594704:web:a71cabaf00adb533"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var db = firebase.firestore();