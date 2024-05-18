import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
export const AuthContext=createContext(null)
const FirebaseProvider = ({children}) => {

const [user, setUser]=useState(null)
console.log(user)
    // create user
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // sig in user

    const signInUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }

    // social providor
    // google
    const googleProvider=new GoogleAuthProvider()

    const googleLogIn=()=>{
        signInWithPopup(auth,googleProvider)
    }

    // gitHub
    const gitHubProvider=new GithubAuthProvider()

    const gitHubLogIn=()=>{
        signInWithPopup(auth, gitHubProvider)
    }

    // sign out
    const logOut=()=>{
        setUser(null)
        signOut(auth)
        .then(result=>{
            console.log(result)
        })
    }
    // Observer

    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
            
          });
    },[])


    const allValues={
        createUser,
        signInUser,
        googleLogIn,
        gitHubLogIn,
        logOut,
        user,
    }
    return (
    <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;