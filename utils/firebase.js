import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiuEpiO3HfuL0C-8wZ391RsOBqq-t7A0Y",
  authDomain: "harbe-67025.firebaseapp.com",
  projectId: "harbe-67025",
  storageBucket: "harbe-67025.appspot.com",
  messagingSenderId: "748606072990",
  appId: "1:748606072990:web:e084371287748571b0b38f",
  measurementId: "G-H49R58B6D8",
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
// export const firebase_analytics = getAnalytics(firebase_app);
export const firebase_storage = getStorage(firebase_app);
