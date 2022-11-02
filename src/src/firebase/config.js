// import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyCafy0xOjTTNZizJGDAhHoNXqqMQpJhH54",
//   authDomain: "rescom-347118.firebaseapp.com",
//   databaseURL: "https://rescom-347118-default-rtdb.firebaseio.com",
//   projectId: "rescom-347118",
//   storageBucket: "rescom-347118.appspot.com",
//   messagingSenderId: "121545648255",
//   appId: "1:121545648255:web:349ebedba732df1a72374a",
//   measurementId: "G-0DT895XNNB"
// });


// export default app;
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCafy0xOjTTNZizJGDAhHoNXqqMQpJhH54",
    authDomain: "rescom-347118.firebaseapp.com",
    databaseURL: "https://rescom-347118-default-rtdb.firebaseio.com",
    projectId: "rescom-347118",
    storageBucket: "rescom-347118.appspot.com",
    messagingSenderId: "121545648255",
    appId: "1:121545648255:web:349ebedba732df1a72374a",
    measurementId: "G-0DT895XNNB"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
//firebase.initializeApp(firebaseConfig)
export { firebase };