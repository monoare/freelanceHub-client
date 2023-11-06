import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Config/Firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // create user
  const signUp = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login with email
  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   login with google
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   get the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("Current user:", currentUser);
        setIsLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //   Update profile
  const updateInfo = () => {
    updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // logout user
  const logout = () => {
    return signOut(auth);
  };

  const authInfo = { user, isLoading, signUp, login, logout, googleLogin };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
