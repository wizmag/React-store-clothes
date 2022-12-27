import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAsxLo00J43LyTZg6ATdTTc9aivgvRiQGE',

//   authDomain: 'app-store-2a7cd.firebaseapp.com',

//   projectId: 'app-store-2a7cd',

//   storageBucket: 'app-store-2a7cd.appspot.com',

//   messagingSenderId: '543388028997',

//   appId: '1:543388028997:web:b739cea8af1e2388f5d32c',
// };

console.log(`key = ${process.env.REACT_APP_FIREBASE_KEY}`);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
