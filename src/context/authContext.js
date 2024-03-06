import {
  useState,
  useEffect,
  createContext,
  useHistory,
  useContext,
} from "react";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      else setUser(null); // Ensure user is set to null when no user is logged in
    });
    return () => unsubscribe(); // Cleanup function for unsubscribing from onAuthStateChanged
  }, []);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth)
      .then(() => {
        toast.success("Successfully logged out");
      //  history.push("/signIn");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  }

  // Other functions like setDetails, setProduct, getDetails, getProduct, uploadImage, getAllData, deleteProduct

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AuthContext);
}
