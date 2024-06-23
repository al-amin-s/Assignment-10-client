import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext=createContext(null)
const FirebaseProvider = ({children}) => {
// const navigate=useNavigate();
const [user, setUser]=useState(null);
const [loading,setLoading]=useState(true);
// const location=useLocation()
// console.log(user)
    // loader
    
    // create user
    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // sig in user

    const signInUser=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
    }

    // social providor
    // google
    const googleProvider=new GoogleAuthProvider()

    const googleLogIn=()=>{
        // setLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result=>{
         console.log(result)
        })
    }

    // gitHub
    const gitHubProvider=new GithubAuthProvider()
    // setLoading(true)
    const gitHubLogIn=()=>{
        signInWithPopup(auth, gitHubProvider)
        .then(result=>{
            console.log(result)
        })
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
              setLoading(false)
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
        loading
    }
    console.log(user)
    return (
    <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;









// import { 
//     GithubAuthProvider, 
//     GoogleAuthProvider, 
//     createUserWithEmailAndPassword, 
//     onAuthStateChanged, 
//     signInWithEmailAndPassword, 
//     signInWithPopup, 
//     signOut 
// } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import auth from "../Firebase/Firebase.config";

// export const AuthContext = createContext(null);

// const FirebaseProvider = ({ children }) => {
//     // const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     // const location = useLocation();

//     // Create user
//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//             .catch(error => {
//                 setLoading(false);
//                 console.error("Error creating user:", error);
//                 throw error;
//             });
//     };

//     // Sign in user
//     const signInUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//             .catch(error => {
//                 setLoading(false);
//                 console.error("Error signing in user:", error);
//                 throw error;
//             });
//     };

//     // Google provider
//     const googleProvider = new GoogleAuthProvider();
//     const googleLogIn = () => {
//         setLoading(true);
//         signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 if (result.user) {
                    
//                 }
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setLoading(false);
//                 console.error("Error with Google login:", error);
//             });
//     };

//     // GitHub provider
//     const gitHubProvider = new GithubAuthProvider();
//     const gitHubLogIn = () => {
//         setLoading(true);
//         signInWithPopup(auth, gitHubProvider)
//             .then(result => {
//                 console.log(result);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setLoading(false);
//                 console.error("Error with GitHub login:", error);
//             });
//     };

//     // Sign out
//     const logOut = () => {
//         setLoading(true);
//         signOut(auth)
//             .then(() => {
//                 setUser(null);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setLoading(false);
//                 console.error("Error signing out:", error);
//             });
//     };

//     // Observer
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             setUser(user);
//             setLoading(false);
//         });

//         // Cleanup subscription on unmount
//         return () => unsubscribe();
//     }, []);

//     const allValues = {
//         createUser,
//         signInUser,
//         googleLogIn,
//         gitHubLogIn,
//         logOut,
//         user,
//         loading
//     };

//     return (
//         <AuthContext.Provider value={allValues}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default FirebaseProvider;
