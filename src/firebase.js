import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const app = initializeApp({
    apiKey: "AIzaSyBzLqnN3vI1eYK8Xbio1HJoC2sbTxMuaIE",
    authDomain: "blackpearl-auth.firebaseapp.com",
    projectId: "blackpearl-auth",
    storageBucket: "blackpearl-auth.appspot.com",
    messagingSenderId: "1020276751683",
    appId: "1:1020276751683:web:f122e3ef9f305ea27b03f6"
})

export const auth = getAuth(app);
export default app;