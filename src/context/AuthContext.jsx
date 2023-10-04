import { createContext } from "react";
import { useEffect, useState } from "react";
import { auth, db } from './firebase'; // Sesuaikan dengan jalur berkas Anda

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [checkingUser, setCheckingUser] = useState(true);

  const login = async (email, password) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      setCurrentUser(user);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (email, password) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      const newUser = {
        email: user.email,
        uid: user.uid, 
        role: "user",
      };

      await db.collection('users').doc(user.uid).set(newUser);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const isLoggedIn = Boolean(currentUser);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }

    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setCheckingUser(false);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ currentUser, isLoggedIn, register, login, logout }}>{!checkingUser && children} </AuthContext.Provider>
    </>
  );
};
