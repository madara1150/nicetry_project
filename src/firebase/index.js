import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsnJ39RLdgm707xIzNjJYd2MBCexr2YZE",
  authDomain: "nicetry-webpro.firebaseapp.com",
  projectId: "nicetry-webpro",
  storageBucket: "nicetry-webpro.appspot.com",
  messagingSenderId: "695003150709",
  appId: "1:695003150709:web:ccbe05aeb3ec9a07257b3c",
  measurementId: "G-L298R9KPCT"
};

const storage = getStorage(initializeApp(firebaseConfig));

// Uploads a file and returns the public URL to save with the record
export async function uploadImage(file) {
  const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;
  await uploadBytes(ref(storage, name), file);
  return `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${name}?alt=media`;
}
