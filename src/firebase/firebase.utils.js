import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'


const config = {
    apiKey: "AIzaSyAyN-WAjZdVM2L4O72QDhip3H0y2NUdZqA",
    authDomain: "crwn-db-503d2.firebaseapp.com",
    projectId: "crwn-db-503d2",
    storageBucket: "crwn-db-503d2.appspot.com",
    messagingSenderId: "648923026680",
    appId: "1:648923026680:web:68462797631f024fc1d70d",
    measurementId: "G-YXT87GYPPG"
};

export const createUserProfileDocument = async (userAuth, addidtionalData) => {
    if (!userAuth) return;

    console.log(firestore.doc('users/128lgbt'))
}

firebase.initializeApp(config);


export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;