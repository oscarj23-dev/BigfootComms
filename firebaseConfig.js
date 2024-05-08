import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyBFHytmnV6hC2Jzanz5HxDbXSxecHKhB18",
  authDomain: "capstone-1cb7a.firebaseapp.com",
  projectId: "capstone-1cb7a",
  storageBucket: "capstone-1cb7a.appspot.com",
  messagingSenderId: "764045275528",
  appId: "1:764045275528:web:4852b4d103aea6ab4cca3d"
};
console.log(firebaseConfig.apiKey);
console.log(firebaseConfig.projectId);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
