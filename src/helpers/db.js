import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD34cnBCrrRulSKOUKaUUFNgWzAN-vutcE",
  authDomain: "jutti-store.firebaseapp.com",
  projectId: "jutti-store",
  storageBucket: "jutti-store.appspot.com",
  messagingSenderId: "806972215775",
  appId: "1:806972215775:web:da64788071152c9693f46a",
  measurementId: "G-541K79P1B2"
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;