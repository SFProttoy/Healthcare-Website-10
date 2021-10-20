import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [path, setPath] = useState({});

  const [isLoading, setLoading] = useState(true);
  const auth = getAuth();

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const saveName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const handleRegistration = (e) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (e) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   googleSignIn

  const googleSignIn = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unSubscribed();
  }, []);

  return {
    user,
    error,
    isLoading,
    path,
    password,
    setPath,
    setLoading,
    saveName,
    setError,
    handleNameInput,
    handleEmailInput,
    handlePasswordInput,
    handleRegistration,
    handleLogin,
    googleSignIn,
    logOut,
  };
};

export default useFirebase;
