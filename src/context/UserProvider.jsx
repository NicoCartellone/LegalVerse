import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { getDoc, setDoc, doc } from "firebase/firestore/lite";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        setUserData({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(false);
        setUserData({});
      }
    });
  }, [user]);

  const registerUser = async (email, password, nombre, rol) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const docRef = doc(db, "users", user.uid);
      const docSpan = await getDoc(docRef);
      if (docSpan.exists()) {
        setUserData({ ...docSpan.data() });
      } else {
        await setDoc(docRef, {
          email: user.email,
          uid: user.uid,
          displayName: nombre,
          photoURL: user.photoURL,
          rol: rol,
        });
        setUser(true);
        setUserData({
          email: user.email,
          uid: user.uid,
          displayName: nombre,
          photoURL: user.photoURL,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    signOut(auth);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        registerUser,
        loginUser,
        signOutUser,
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

export const UserContext = createContext();
