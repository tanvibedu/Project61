import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBos9cmtOHzFFVfMDKCraZEjl0ESBV3DtU",
    authDomain: "schoolattendance-2e120.firebaseapp.com",
    databaseURL: "https://schoolattendance-2e120-default-rtdb.firebaseio.com",
    projectId: "schoolattendance-2e120",
    storageBucket: "schoolattendance-2e120.appspot.com",
    messagingSenderId: "929820913059",
    appId: "1:929820913059:web:18c42447574749afe87e16",
    measurementId: "G-D464LH1XC1"
  };


// Initialize Firebase
let app =   firebase.initializeApp(firebaseConfig);
export default app.database();
