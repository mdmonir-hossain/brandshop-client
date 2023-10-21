import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

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
  
  const loginUser = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
    }

    , [])
  
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((current) => current === "light" ? "dark" : "light");
  }

  
  const authInfo = {
    user,
    registerUser,
    googleUserSignin,
    auth,
    googleProvider,
    loginUser,
    logOutUser,
    theme,
    toggle,
  };
    return (
      <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </div>
    );
};

export default AuthProvider;