import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAlzzdKS2X6abQEglkWp9Qp17t8eVArhvk',
  authDomain: 'clone-268b6.firebaseapp.com',
  databaseURL: 'https://clone-268b6.firebaseio.com',
  projectId: 'clone-268b6',
  storageBucket: 'clone-268b6.appspot.com',
  messagingSenderId: '944903792788',
  appId: '1:944903792788:web:24b2fbfe883e526afaac81',
  measurementId: 'G-E5GW1V3BTK',
});

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
