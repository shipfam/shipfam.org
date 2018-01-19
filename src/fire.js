import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCPYM-SZmMieiDjPk4rJnu6lii1F3TXRVA",
  authDomain: "shipfam-84383.firebaseapp.com",
  databaseURL: "https://shipfam-84383.firebaseio.com",
  projectId: "shipfam-84383",
  storageBucket: "shipfam-84383.appspot.com",
  messagingSenderId: "465280760184"
};

export default firebase.initializeApp(config);
