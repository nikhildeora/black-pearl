import React from "react";
import {auth} from "../firebase"
import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut,sendEmailVerification,updateProfile,sendPasswordResetEmail} from "firebase/auth"


export const AuthContext = React.createContext()

export default function AuthContextProvider({children}){
 const [currentUser , setCurrentUser] = React.useState({});


function Signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
    
}


function updateprofilename(name){
    return updateProfile(auth.currentUser,{displayName : name})
}

function sendpassreset(email){
   sendPasswordResetEmail(auth,email)
   .then(()=>{
      alert("Password reset request sent to your Email id")
   })
   .catch((err)=>console.log(err))
}

function Login(email,password){
  return signInWithEmailAndPassword(auth,email,password)
}

function emailverify(){
    sendEmailVerification(auth.currentUser)
    .then(()=>{
          alert("Verify your Email Id , a mail sent to your email")
    })
    .catch((err)=>{
        const errrrr = err;
    })
}

function Logout(){
   signOut(auth)
}



React.useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,user => {
        setCurrentUser(user)
    })

    return unsubscribe;
},[])

    const value = {
     currentUser,
     Signup,
     Login,
     Logout,
     updateprofilename,
     sendpassreset,
     emailverify
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}