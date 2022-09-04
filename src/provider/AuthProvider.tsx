import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/auth";
import { auth } from "../libs/firebase-config";

export const AuthProvider: React.FC = (props:any) => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
};