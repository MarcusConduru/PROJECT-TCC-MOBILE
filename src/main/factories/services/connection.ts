import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyCpjn_3sUba2Ym3bqnO75JqpsqcdZNFXkk',
  authDomain: 'reactnativetcc.firebaseapp.com',
  projectId: 'reactnativetcc',
  storageBucket: 'reactnativetcc.appspot.com',
  messagingSenderId: '1016705555483',
  appId: '1:1016705555483:web:b802122c6eb19626426cbe',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
