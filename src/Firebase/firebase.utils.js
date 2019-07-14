import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyByX2mtrEkr-1_84qc_KsFO3XzJy3UPRvY",
    authDomain: "sticker-mania-141e8.firebaseapp.com",
    databaseURL: "https://sticker-mania-141e8.firebaseio.com",
    projectId: "sticker-mania-141e8",
    storageBucket: "",
    messagingSenderId: "716797073159",
    appId: "1:716797073159:web:85ea7d391ed64ebf"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
