import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDfF0ztYwYSSL8KbE_GIQoVyMWf_BobaAE",
    authDomain: "occs-chat.firebaseapp.com",
    projectId: "occs-chat",
    storageBucket: "occs-chat.appspot.com",
    messagingSenderId: "550468652190",
    appId: "1:550468652190:web:cf4f8c292983219dd6bf8f"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);