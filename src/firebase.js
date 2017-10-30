import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyCDxmwokIzHz4kO-QmoU7zLuwZVdpLldW8',
    authDomain: 'appauth-b62d8.firebaseapp.com',
    databaseURL: 'https://appauth-b62d8.firebaseio.com',
    projectId: 'appauth-b62d8',
    storageBucket: 'appauth-b62d8.appspot.com',
    messagingSenderId: '954550454205'
  };
  firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
