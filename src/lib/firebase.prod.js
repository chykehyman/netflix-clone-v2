import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCExf9bm6zMllP-NgxQr9xoWDwT6Z7P4LQ',
  authDomain: 'nexflix-5c9cc.firebaseapp.com',
  databaseURL: 'https://nexflix-5c9cc.firebaseio.com',
  projectId: 'nexflix-5c9cc',
  storageBucket: 'nexflix-5c9cc.appspot.com',
  messagingSenderId: '217427934502',
  appId: '1:217427934502:web:eb0a05d09618c1ad3bd5e7',
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
