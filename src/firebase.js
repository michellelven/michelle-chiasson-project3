import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyADbUVel1wgABIqdHpvFIsc5bQ3zSEdQ7I",
    authDomain: "movie-watch-list-f7586.firebaseapp.com",
    projectId: "movie-watch-list-f7586",
    storageBucket: "movie-watch-list-f7586.appspot.com",
    messagingSenderId: "81629125213",
    appId: "1:81629125213:web:f6ede91c49dd54ed954bb4",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
