import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB11Kv_YrZ9s0AHCp3XHjt1L1AqIDaVEfM',
  authDomain: 'store-db-f5a2c.firebaseapp.com',
  databaseURL: 'https://store-db-f5a2c.firebaseio.com',
  projectId: 'store-db-f5a2c',
  storageBucket: '',
  messagingSenderId: '213632580038',
  appId: '1:213632580038:web:33cc56fec31bc844'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
