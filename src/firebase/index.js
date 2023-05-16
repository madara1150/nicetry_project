import { initializeApp,  } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBsnJ39RLdgm707xIzNjJYd2MBCexr2YZE",
    authDomain: "nicetry-webpro.firebaseapp.com",
    projectId: "nicetry-webpro",
    storageBucket: "nicetry-webpro.appspot.com",
    messagingSenderId: "695003150709",
    appId: "1:695003150709:web:ccbe05aeb3ec9a07257b3c",
    measurementId: "G-L298R9KPCT"
  };


  export const firebaseApp = initializeApp(firebaseConfig);

  // Initialize Firebase
  
  // Initialize Cloud Storage and get a reference to the service
  const storage = getStorage(firebaseApp);
  
  export { storage };