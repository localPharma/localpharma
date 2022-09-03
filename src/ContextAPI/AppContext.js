import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";

const AppContext = createContext({
  currentUser: null,
  register: () => Promise, // Returns a promise
  login: () => Promise, // Returns a promise
  loginWithGoogle: () => Promise, // Returns a promise
  logout: () => Promise, // Returns a promise
  forgotPassword: () => Promise, // Returns a promise
  resetPassword: () => Promise, // Returns a promise
});

export const useAuth = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true);

  // Register User
  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Login User
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Login User with Google
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Send User reset password email
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: "https://localpharma.netlify.app/auth/signin",
    });
  };

  // Reset User Password
  const resetPassword = (oobCode, newPassword) => {
    return confirmPasswordReset(auth, oobCode, newPassword);
  };

  // Logout the User
  const logout = () => signOut(auth);

  useEffect(() => {
    // Checking if our Application has a user
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    register,
    login,
    loginWithGoogle,
    logout,
    forgotPassword,
    resetPassword,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
