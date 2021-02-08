import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCuEfs0M1lbnd6-whcfN7KOozlwWATXY0I",
    authDomain: "pokemon-260ae.firebaseapp.com",
    databaseURL: "https://pokemon-260ae-default-rtdb.firebaseio.com",
    projectId: "pokemon-260ae",
    storageBucket: "pokemon-260ae.appspot.com",
    messagingSenderId: "936771033376",
    appId: "1:936771033376:web:9552b0896c856a81f45f45"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;
