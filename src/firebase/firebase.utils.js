import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB0xtPU_CcDpx5B7TxNorMHav9TrROw1Ks",
    authDomain: "clothefy-51803.firebaseapp.com",
    databaseURL: "https://clothefy-51803.firebaseio.com",
    projectId: "clothefy-51803",
    storageBucket: "clothefy-51803.appspot.com",
    messagingSenderId: "849812950882",
    appId: "1:849812950882:web:8f6c501851567e6d77663b",
    measurementId: "G-MS07HCR5XK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;