import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    
  const googleUserSignin = () => {
    return signInWithPopup(auth, googleProvider);
   }

    const authInfo = {
      googleUserSignin,
      auth,
      googleProvider,
    };
    return (
      <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </div>
    );
};

export default AuthProvider;