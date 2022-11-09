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
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const getData = await getUserDocument(user);
        if (getData) {
          setUser(true);
          setUserData(getData);
          setLoading(false);
        }
      } else {
        setUser(false);
        setUserData(false);
        setLoading(false);
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
          rol: rol,
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
        setLoading,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

export const UserContext = createContext();

const getUserDocument = async (user) => {
  if (!user.uid) return null;

  try {
    const docRef = doc(db, "users", user.uid);
    const userDocument = await getDoc(docRef).then((doc) => {
      return doc.data();
    });
    return userDocument;
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
