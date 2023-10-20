import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const registerUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const googleUserSignin = () => {
    return signInWithPopup(auth, googleProvider);
   }
  const logOutUser = () => {
  return  signOut(auth);
  }
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
    }

  ,[])
  const authInfo = {
    user,
    registerUser,
    googleUserSignin,
    auth,
    googleProvider,
    logOutUser,
  };
    return (
      <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </div>
    );
};

export default AuthProvider;