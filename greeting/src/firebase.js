import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtwV4QPQXGOb6GoK6a8DCF3vnpi8kMDJI",
    authDomain: "greetings-aashiq.firebaseapp.com",
    projectId: "greetings-aashiq",
    storageBucket: "greetings-aashiq.appspot.com",
    messagingSenderId: "1082514136985",
    appId: "1:1082514136985:web:cbd6e562528c29c47dbd08",
    measurementId: "G-RM8M03N688"   
})

const db = firebaseApp.firestore();

export { db };